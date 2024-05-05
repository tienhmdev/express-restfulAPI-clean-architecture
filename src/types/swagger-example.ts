/**
 * GET /api/v1/user/contracts/users/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {string} keyword.query - email,name,nickname,phone Keyword
 * @param {string} sort_by.query - Sort By (no, email, name, role, nickname, phone)
 * @param {string} sort_dir.query - Sort Dir (asc(tăng),  desc(giảm))
 * @param {number} offset.query - Page (ex: 1,2,3,...)
 * @param {number} limit.query - Number item on page (ex: 5,10,15,...)
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * POST /api/v1/user/contracts/add-user/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {AddUserInContract} request.body.required - Add new user in contract
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * DELETE /api/v1/user/contracts/delete-user/{contract_id}/{user_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {string} user_id.path.required - ID (ex: 2)
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * POST /api/v1/user/contracts/switch-plan/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {SwitchPlanBody} request.body.required - switch plan body
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * PUT /api/v1/user/contracts/cancel/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * GET /api/v1/user/contracts/invoice/export-pdf/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {string} invoice_month.query - Moth (Ex: 2022-05)
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * GET /api/v1/user/contracts/meetings/export-excel/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {string} date_start.query - Date start
 * @param {string} date_end.query - Date end
 * @param {string} sort_by.query - no, email, time_start_actual, total_duration_actual, num_part, total_duration, duration
 * @param {string} sort_dir.query - asc, desc
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * POST /api/v1/user/contracts/edit-user/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {EditUserInContract} request.body.required - Edit user in contract
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * POST /api/v1/user/contracts/check-email/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {CheckEmailInContractBody} request.body.required - Check email existed in group
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * GET /api/v1/user/contracts/user/reset-password
 * @tags User/ContractController
 * @security BearerAuthUser
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */

/**
 * POST /api/v1/user/contracts/import-excel/{contract_id}
 * @tags User/ContractController
 * @security BearerAuthUser
 * @param {string} contract_id.path.required - ID (ex: 2)
 * @param {CsvFile} request.body.required - csv file - multipart/form-data
 * @return {object} 200 - Album created
 * @return {object} 200 - Success get meeting
 * @return {object} 401 - Authenticated Fail Response
 * @return {object} 404 - Not Found Response
 * @return {object} 403 - Not Allow Response
 * @return {object} 500 - Internal Error Response
 * @example response - 200
 *    {
 *     "status": "OK",
 *     "result": {
 *     }
 *  }
 */
