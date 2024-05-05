/** Login Body */
/**
 * @typedef {object} LoginBody
 * @property {string} email.required
 * @property {string} password.required
 * @property {number} remember_me
 */

/** Login Guest Body */
/**
 * @typedef {object} LoginGuestBody
 * @property {string} email.required
 * @property {string} name.required
 * @property {string} url_id.required
 */

/** Login Google Body */
/**
 * @typedef {object} LoginGoogleBody
 * @property {string} access_token.required
 */

/** Register Body */
/**
 * @typedef {object} RegisterBody
 * @property {string} email.required
 * @property {string} confirm_code
 */

/** Register Trial Body */
/**
 * @typedef {object} RegisterTrialBody
 * @property {string} name.required
 * @property {string} email.required
 * @property {string} phone.required
 * @property {string} password.required
 * @property {string} furigana.required
 * @property {string} company_name.required
 * @property {number} is_email_received.required
 */

/** Subscribe Trial Body */
/**
 * @typedef {object} SubscribeTrialBody
 * @property {string} name.required
 * @property {string} phone.required
 * @property {string} furigana.required
 * @property {string} company_name.required
 * @property {number} is_email_received.required
 */

/** Register Ticket Body */
/**
 * @typedef {object} RegisterTicketBody
 * @property {string} name.required
 * @property {string} email.required
 * @property {string} phone.required
 * @property {string} password.required
 * @property {string} furigana.required
 * @property {string} company_name.required
 * @property {number} is_email_received.required
 * @property {number} fee_id.required
 */

/** Subscribe Ticket Body */
/**
 * @typedef {object} SubscribeTicketBody
 * @property {string} name.required
 * @property {string} phone.required
 * @property {string} furigana.required
 * @property {string} company_name.required
 * @property {number} is_email_received.required
 * @property {number} fee_id.required
 */

/** Subscribe Business Body */
/**
 * @typedef {object} SubscribeBusinessBody
 * @property {string} name.required
 * @property {string} phone.required
 * @property {string} furigana.required
 * @property {string} company_name.required
 * @property {number} is_email_received.required
 * @property {number} fee_id.required
 * @property {string} company_name.required
 * @property {string} department.required
 * @property {string} company_alphabet.required
 * @property {string} zip_code.required
 * @property {string} municipality.required
 * @property {string} prefecture.required
 * @property {string} address.required
 * @property {string} message.required
 * @property {string} payment_method.required
 * @property {string} amount.required
 */

/** Confirm Body */
/**
 * @typedef {object} ConfirmBody
 * @property {string} code.required
 */

/** Tranfer invite Body */
/**
 * @typedef {object} TranferInviteBody
 * @property {string} code.required
 * @property {string} email.required
 */

/** Create Profile Body */
/**
 * @typedef {object} CreateProfileBody
 * @property {string} name.required
 * @property {string} email.required
 * @property {string} password.required
 */

/** Update Meeting Status Body */
/**
 * @typedef {object} MeetingStatusBody
 * @property {number} meeting_id.required
 */

/** Meeting Request Query */
/**
 * @typedef {object} MeetingRequestBody
 * @property {number} meeting_id.required
 * @property {number} meeting_role_id.required
 */

/** Create Teams Body */
/**
 * @typedef {object} MeetingTeamsBody
 * @property {string} microsoft_token.required
 * @property {string} name.required
 * @property {string} description
 * @property {string} time_start.required
 * @property {string} time_end.required
 * @property {string} time_zone.required
 */

/** Save Meeting Body */
/**
 * @typedef {object} SaveMeetingBody
 * @property {number} meeting_type_id.required
 * @property {string} name.required
 * @property {string} description
 * @property {string} web_meeting_id.required
 * @property {string} web_meeting_sys_url.required
 * @property {string} time_start.required
 * @property {string} time_end.required
 * @property {string} time_zone.required
 */

/** Save Invite Emails Body */
/**
 * @typedef {object} SaveInviteEmailsBody
 * @property {number} meeting_id.required
 * @property {boolean} has_host
 * @property {string} google_calendar_event_id
 * @property {string} outlook_calendar_event_id
 * @property {array<InviteItem>} invites.required
 */

/**  Save Invite Emails Body */
/**
 * @typedef {object} InviteItem
 * @property {number} meeting_role_id.required
 * @property {string} email.required
 * @property {boolean} is_remove
 * @property {boolean} is_send_mail
 * @property {boolean} is_create_google_calendar
 * @property {boolean} is_create_outlook_calendar
 */

/** Reset Password Body */
/**
 * @typedef {object} ResetPasswordBody
 * @property {string} email.required
 */

/**  Reset Password Change Body */
/**
 * @typedef {object}  ResetPasswordChangeBody
 * @property {string} code.required
 * @property {string} email.required
 * @property {string} password.required
 */

/** Save Invite Outlooks Body */
/**
 * @typedef {object} InviteOutlooksBody
 * @property {string} microsoft_token.required
 * @property {number} meeting_id.required
 * @property {boolean} has_host
 * /

/**  Update Info User Body */
/**
 * @typedef {object}  UpdateInfoUserBody
 * @property {string} name
 * @property {string} password
 * @property {string} nickname
 * @property {string} phone
 * @property {string} avatar_url
 */

/** Credentials Google */
/**
 * @typedef {object} CredentialsGoogleApi
 * @property {string} access_token.required
 * @property {string} refresh_token.required
 * @property {string} scope
 * @property {string} token_type
 */

/** Sdk Meeting Body */
/**
 * @typedef {object} GoogleMeetCreateBody
 * @property {CredentialsGoogleApi} tokens.required
 * @property {string} name.required
 * @property {string} description
 * @property {string} time_start.required
 * @property {string} time_end.required
 * @property {string} time_zone
 */

/** Calendar Create Body */
/**
 * @typedef {object} CalendarCreateBody
 * @property {string} meeting_id.required
 */

/** Update Status Body */
/**
 * @typedef {object} UpdateAttendeeStatusBody
 * @property {number} status_id.required
 * @property {array<number>} user_ids.required
 */

/** Update Meeting Status Body */
/**
 * @typedef {object} UpdateMeetingStatusBody
 * @property {number} status_id.required
 */

/** Zoom Meeting Body */
/**
 * @typedef {object} MeetingZoomBody
 * @property {string} code.required
 * @property {string} name.required
 * @property {string} description
 * @property {string} time_start.required
 * @property {string} time_end.required
 * @property {string} time_zone.required
 */

/** Upload File Body */
/**
 * @typedef {object} UploadFileBody
 * @property {string} file.required - Choose file (txt,doc,docx,xlsx,xls,csv) - binary
 */

/** Upload Avatar Body */
/**
 * @typedef {object} UploadAvatarBody
 * @property {string} file.required - Choose file (jpg,jpeg,png) - binary
 */

/** Host Transfer Body */
/**
 * @typedef {object} HostTransferBody
 * @property {number} user_id.required
 * @property {number} role_id.required
 */

/** Update Meeting Content Body */
/**
 * @typedef {object} MeetingContentBody
 * @property {number} id.required
 * @property {string} content.required
 * @property {string} undo_in
 * @property {string} undo_out
 */

/** Edit Status Meeting Body */
/**
 * @typedef {object} EditStatusMeetingBody
 * @property {number} edit_status_id.required
 */

/** User Setting Body */
/**
 * @typedef {object} UserSettingBody
 * @property {number} meeting_setting.required - 1,2
 * @property {email} email.required - email
 */

/** Save Meeting Now Body */
/**
 * @typedef {object} MeetingNowBody
 * @property {number} meeting_type_id.required
 * @property {string} name.required
 * @property {string} time_start.required
 */

/** Update Status For Meeting Now Body */
/**
 * @typedef {object} UpdateAttendeeStatusMeetingNowBody
 * @property {number} status_id.required
 */

/**  Edit Name User's Body */
/**
 * @typedef {object}  EditNameUserBody
 * @property {string} name
 */

/**  Update Info User Admin Body */
/**
 * @typedef {object}  UpdateInfoAdminBody
 * @property {string} name
 * @property {string} password
 * @property {string} avatar_url
 */

/** Add Card Body */
/**
 * @typedef {object} AddNewCardBody
 * @property {string} token_id.required - tok_22223333
 */

/**  Check Email or Phone Exist Body */
/**
 * @typedef {object}  CheckEmailAndPhoneBody
 * @property {string} email.required
 * @property {string} phone.required
 */

/**  Set Default Card Body */
/**
 * @typedef {object}  SetDefaultCardBody
 * @property {string} card_id.required
 */

/** Add Card and Charge Body */
/**
 * @typedef {object} AddCardAndChargeBody
 * @property {string} token_id.required - tok_22223333
 * @property {number} fee_id.required - 1,2,3,4
 */

/** Charge Body */
/**
 * @typedef {object} ChargeBody
 * @property {string} card_id.required - Card_id
 * @property {number} fee_id.required - fee_id
 */

/** Checkout ticket Body */
/**
 * @typedef {object} CheckoutTicketBody
 * @property {string} token_id.required - token_id
 * @property {number} sub_id.required - sub_id
 */

/** Check ticket change Body */
/**
 * @typedef {object} CheckTicketChangeBody
 * @property {number} sub_id.required - sub_id
 */

/** Check ticket change Body */
/**
 * @typedef {object} CheckTicketChangeBody2
 * @property {number} fee_id.required - fee_id
 * @property {number} minutes.required - minutes
 * @property {number} price.required - price
 * @property {number} num_expired.required - num_expired
 */

/** Create Notification Body */
/**
 * @typedef {object} CreateNotification
 * @property {string} title.required - title
 * @property {string} body.required - body
 * @property {string} date_start.required - date start
 * @property {string} date_end.required - date end
 * @property {string} link - link
 * @property {number} allow_send_email - allow send email
 */

/** Edit Notification Body */
/**
 * @typedef {object} EditNotification
 * @property {string} title.required - title
 * @property {string} body.required - body
 * @property {string} link.required - link
 * @property {string} date_end.required - date end
 * @property {number} allow_send_email - allow send email
 */

/** Edit Ticket Setting Item */
/**
 * @typedef {object} EditTicketSettingItem
 * @property {number} id.required - id
 * @property {string} description.required - description
 * @property {number} minutes.required - minutes
 * @property {number} price.required - price
 * @property {number} num_expired.required - num expired
 * @property {number} max_join.required - max join
 * @property {number} num_day_alert.required - num_day_alert
 */

/** Edit Ticket Setting Body */
/**
 * @typedef {object} EditTicketSettingBody
 * @property {array<EditTicketSettingItem>} list_data.required - description
 */

/** Edit Trial Setting Item */
/**
 * @typedef {object} EditTrialSettingItem
 * @property {number} id.required - id
 * @property {string} description.required - description
 * @property {number} minutes.required - minutes
 * @property {number} price.required - price
 * @property {number} num_expired.required - num expired
 * @property {number} max_join.required - max join
 * @property {number} num_day_alert.required - num_day_alert
 */

/** Edit Trial Setting Body */
/**
 * @typedef {object} EditTrialSettingBody
 * @property {array<EditTrialSettingItem>} list_data.required - description
 */

/** Add new contract
 * @typedef {object} AddNewContractBody
 * @property {string} contract_name.required - Contract name
 * @property {string} email.required - Email
 * @property {string} phone.required - Phone number
 * @property {string} date_start.required - Date start
 * @property {string} zip_code.required - Zipcode
 * @property {string} prefecture.required - prefecture
 * @property {string} municipality.required  -municipality
 * @property {string} address.required  - street number, building number,..
 * @property {number} fee_id.required - 1,2,3,4
 * @property {string} domain.required - Domain for prime
 */

/** Edit contract
 * @typedef {object} EditContractBody
 * @property {number} contract_id.required - Contract id
 * @property {string} company_name - Company name
 * @property {string} phone - Phone number
 * @property {string} zip_code - Zipcode ex:1234567
 * @property {string} prefecture - prefecture
 * @property {string} municipality  -municipality
 * @property {string} address  - street number, building number,..
 * @property {string} domain - Domain for prime, business is null
 */

/**
 * @typedef {object} CsvFile
 * @property {string} bp_role.required - SU:2,Host:3
 * @property {string} file - image cover - binary
 */

/** Register Business Body */
/**
 * @typedef {object} RegisterBusinessBody
 * @property {string} name.required
 * @property {string} email.required
 * @property {string} phone.required
 * @property {string} password.required
 * @property {string} furigana.required
 * @property {string} company_name.required
 * @property {number} is_email_received.required
 * @property {number} fee_id.required
 * @property {string} department.required
 * @property {string} company_alphabet.required
 * @property {string} prefecture.required
 * @property {string} municipality.required
 * @property {string} zip_code.required
 * @property {string} address.required
 */

/** Add new users to contract
 * @typedef {object} AddUserInContract
 * @property {string} name.required - name
 * @property {string} nickname.required - nickname
 * @property {string} email.required - Email
 * @property {string} phone.required - Phone number
 * @property {number} bp_role.required - SU:2,Host:3
 */

/** switching plan contract
 * @typedef {object} SwitchPlanBody
 * @property {number} fee_id.required - Fee ID
 * @property {number} payment_method_id.required - 1:credit,2:request
 */

/** Edit user to contract
 * @typedef {object} EditUserInContract
 * @property {number} user_id.required - user_id
 * @property {string} name - name
 * @property {string} nickname - nickname
 * @property {string} phone - Phone number
 * @property {number} bp_role - Owner:1,SU:2,Host:3
 */

/**  Check Email Exist Body */
/**
 * @typedef {object}  CheckEmailInContractBody
 * @property {string} email.required
 */

/** Add new invoice deposit
 * @typedef {object} InvoiceDepositBody
 * @property {string} pay_date.required - user_id
 * @property {number} amount.required - amount (10000)
 * @property {number} balance.required - balance (2000)
 * @property {string} note - Note maxlength 200 char
 */

/** Edit Business Setting Item */
/**
 * @typedef {object} EditBusinessSettingItem
 * @property {number} id.required - id
 * @property {string} name.required - name
 * @property {number} max_join.required - max_join
 * @property {number} fee_monthly.required - fee_monthly
 * @property {number} fee_used.required - fee_used
 * @property {number} init_fee.required - init_fee
 */

/** Edit Business Setting Body */
/**
 * @typedef {object} EditBusinessSettingBody
 * @property {array<EditBusinessSettingItem>} list_data.required - list business
 */

/** Add new invoice pay/repay
 * @typedef {object} InvoicePayBody
 * @property {number} status.required - status (0,1)
 */

/** Check business fee change Body */
/**
 * @typedef {object} CheckBusinessFeeChangeBody
 * @property {number} fee_id.required - fee_id,
 * @property {number} fee_monthly.required - fee_monthly,
 * @property {number} min_join.required - min_join,
 * @property {number} max_join.required - max_join
 * @property {number} fee_used.required - fee_used
 */

/** Change cron job*/
/**
 * @typedef {object} ChangeCronJobBody
 * @property {number} id.required  - 1: NEW_INVOICE_AND_SWITCH, 2: SEND_EMAIL_REMIND, 3: CHARGE_BUSINESS
 * @property {date} date_time.required - date time:ex: 2022-08-08 00:00:00
 */

/** Switch option*/
/**
 * @typedef {object} SwitchOptionBody
 * @property {number} fee_id.required
 * @property {number} payment_method_id.required
 * @property {date} switch_date.required
 */

/** Update contract*/
/**
 * @typedef {object} UpdateContractBody
 * @property {number} id.required
 * @property {SwitchOptionBody} switch_options.required
 * @property {date} cancel_date.required
 */

/** Upload Audio File Body */
/**
 * @typedef {object} UploadAudioFileBody
 * @property {string} file.required - Choose file (mp3,wav,aac,flac) - binary
 * @property {string} file_name.required
 */

/** Pattern Body */
/**
 * @typedef {object} PatternBody
 * @property {number} id.required
 * @property {string} name.required
 * @property {string} content.required
 * @property {number} type.required
 */

/** Create Pattern Body */
/**
 * @typedef {object} CreatePatternBody
 * @property {string} audio_uuid
 * @property {string} meeting_link_id
 * @property {string} name.required
 * @property {string} content.required
 * @property {number} type.required
 */

/** Speaker Body */
/**
 * @typedef {object} SpeakerBody
 * @property {string} speaker_id.required
 * @property {string} speaker_name.required
 */

/*  Speaker List Body */
/**
 * @typedef {object} SpeakerListBody
 * @property {array<SpeakerBody>} list.required - Speaker list
 */

/** Script Body */
/**
 * @typedef {object} ScriptBody
 * @property {number} id.required
 * @property {number} status.required
 * @property {string} content.required
 */

/** Script Body */
/**
 * @typedef {object} SummaryAIBody
 * @property {number} type
 * @property {string} content
 */
