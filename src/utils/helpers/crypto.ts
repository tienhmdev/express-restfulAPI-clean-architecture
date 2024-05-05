import crypto from "crypto";

export const hash = (password: string, salt: string) => {
  return crypto
    .createHmac("sha256", salt.toLowerCase())
    .update(password, "utf8")
    .digest("hex");
};
