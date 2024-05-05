import { query } from "express-validator";
import { validationHelper } from "../../utils/helpers";

const validationRules = [
  query("searchBy")
    .optional()
    .isString()
    .withMessage("Search by must be a string.")
    .isLength({ max: 100 })
    .withMessage("Search by length must be greater than 100 characters."),

  query("searchKeywords")
    .optional()
    .isString()
    .withMessage("Search keywords must be a string.")
    .isLength({ max: 100 })
    .withMessage("Search by length must be greater than 100 characters."),
];

export const querySearchValidator = [
  ...validationRules,
  validationHelper.check(),
];
