import { query } from "express-validator";
import { validationHelper } from "../../utils/helpers";

const validationRules = [
  query("total").optional().isInt().withMessage("Total must be an integer."),

  query("offset").optional().isInt().withMessage("Offset must be an integer."),

  query("limit").optional().isInt().withMessage("Limit must be an integer."),

  query("sortBy")
    .optional()
    .isString()
    .withMessage("Sort by must be a string."),

  query("orderBy")
    .optional()
    .isIn(["ASC", "DESC"])
    .withMessage('Order by must be "ASC" or "DESC".'),
];

export const queryMetaValidator = [
  ...validationRules,
  validationHelper.check(),
];
