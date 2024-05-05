import express from "express";
import routerSetup from "./routes";
import appDataSource from "./data-source";
import bodyParser from "body-parser";
import "./utils/extensions";
import { ServerConfigs } from "./utils/configs";

// Function to initialize the server
const initServer = async () => {
  try {
    const app = express();
    console.log("✅ Body-parser middleware has been initialized!");
    app.use(bodyParser.urlencoded({ extended: false }));

    // Setup routing.
    routerSetup(app);
    console.log("✅ Routing has been initialized!");

    // Listen for requests on the configured port.
    app.listen(ServerConfigs.PORT, () => {
      console.log(`🚀 Public App listening on port ${ServerConfigs.PORT}.`);
    });
  } catch (error) {
    console.error("✖️ Error during server initialization", error);
    process.exit(1);
  }
};

// Function to connect to the database.
appDataSource
  .initialize()
  .then(async () => {
    console.log("✅ Data Source has been initialized!");
    initServer(); // Initialize the server.
  })
  .catch((err) => {
    console.error("✖️ Error during Data Source initialization:", err);
  });
