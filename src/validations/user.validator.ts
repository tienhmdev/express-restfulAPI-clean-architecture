import { param } from "express-validator";
import { validationHelper } from "../utils/helpers";

const validationRules = [
  param("id").trim().optional().isInt().withMessage("id must be an integer."),
];

export const userValidator = [...validationRules, validationHelper.check()];
