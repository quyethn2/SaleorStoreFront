/** An enumeration. */
export enum AccountErrorCodeEnum {
  ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
  ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
  DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
  DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
  DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
  DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
  DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INACTIVE = "INACTIVE",
  INVALID = "INVALID",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  NOT_FOUND = "NOT_FOUND",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  OUT_OF_SCOPE_GROUP = "OUT_OF_SCOPE_GROUP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
  PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
  PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
  PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  JWT_SIGNATURE_EXPIRED = "JWT_SIGNATURE_EXPIRED",
  JWT_INVALID_TOKEN = "JWT_INVALID_TOKEN",
  JWT_DECODE_ERROR = "JWT_DECODE_ERROR",
  JWT_MISSING_TOKEN = "JWT_MISSING_TOKEN",
  JWT_INVALID_CSRF_TOKEN = "JWT_INVALID_CSRF_TOKEN",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
  MISSING_CHANNEL_SLUG = "MISSING_CHANNEL_SLUG",
  ACCOUNT_NOT_CONFIRMED = "ACCOUNT_NOT_CONFIRMED",
}

/** An enumeration. */
export enum AddressTypeEnum {
  BILLING = "BILLING",
  SHIPPING = "SHIPPING",
}

/** An enumeration. */
export enum AppErrorCodeEnum {
  FORBIDDEN = "FORBIDDEN",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_STATUS = "INVALID_STATUS",
  INVALID_PERMISSION = "INVALID_PERMISSION",
  INVALID_URL_FORMAT = "INVALID_URL_FORMAT",
  INVALID_MANIFEST_FORMAT = "INVALID_MANIFEST_FORMAT",
  MANIFEST_URL_CANT_CONNECT = "MANIFEST_URL_CANT_CONNECT",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  OUT_OF_SCOPE_APP = "OUT_OF_SCOPE_APP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
}

/** All places where app extension can be mounted. */
export enum AppExtensionMountEnum {
  PRODUCT_OVERVIEW_CREATE = "PRODUCT_OVERVIEW_CREATE",
  PRODUCT_OVERVIEW_MORE_ACTIONS = "PRODUCT_OVERVIEW_MORE_ACTIONS",
  PRODUCT_DETAILS_MORE_ACTIONS = "PRODUCT_DETAILS_MORE_ACTIONS",
  NAVIGATION_CATALOG = "NAVIGATION_CATALOG",
  NAVIGATION_ORDERS = "NAVIGATION_ORDERS",
  NAVIGATION_CUSTOMERS = "NAVIGATION_CUSTOMERS",
  NAVIGATION_DISCOUNTS = "NAVIGATION_DISCOUNTS",
  NAVIGATION_TRANSLATIONS = "NAVIGATION_TRANSLATIONS",
  NAVIGATION_PAGES = "NAVIGATION_PAGES",
}

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
export enum AppExtensionTargetEnum {
  POPUP = "POPUP",
  APP_PAGE = "APP_PAGE",
}

export enum AppSortFieldEnum {
  /** Sort apps by name. */
  NAME = "NAME",
  /** Sort apps by creation date. */
  CREATION_DATE = "CREATION_DATE",
}

/** Enum determining type of your App. */
export enum AppTypeEnum {
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  LOCAL = "LOCAL",
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  THIRDPARTY = "THIRDPARTY",
}

/** An enumeration. */
export enum AreaUnitsEnum {
  SQ_CM = "SQ_CM",
  SQ_M = "SQ_M",
  SQ_KM = "SQ_KM",
  SQ_FT = "SQ_FT",
  SQ_YD = "SQ_YD",
  SQ_INCH = "SQ_INCH",
}

export enum AttributeChoicesSortFieldEnum {
  /** Sort attribute choice by name. */
  NAME = "NAME",
  /** Sort attribute choice by slug. */
  SLUG = "SLUG",
}

/** An enumeration. */
export enum AttributeEntityTypeEnum {
  PAGE = "PAGE",
  PRODUCT = "PRODUCT",
}

/** An enumeration. */
export enum AttributeErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/** An enumeration. */
export enum AttributeInputTypeEnum {
  DROPDOWN = "DROPDOWN",
  MULTISELECT = "MULTISELECT",
  FILE = "FILE",
  REFERENCE = "REFERENCE",
  NUMERIC = "NUMERIC",
  RICH_TEXT = "RICH_TEXT",
  SWATCH = "SWATCH",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DATE_TIME = "DATE_TIME",
}

export enum AttributeSortFieldEnum {
  /** Sort attributes by name */
  NAME = "NAME",
  /** Sort attributes by slug */
  SLUG = "SLUG",
  /** Sort attributes by the value required flag */
  VALUE_REQUIRED = "VALUE_REQUIRED",
  /** Sort attributes by the variant only flag */
  IS_VARIANT_ONLY = "IS_VARIANT_ONLY",
  /** Sort attributes by visibility in the storefront */
  VISIBLE_IN_STOREFRONT = "VISIBLE_IN_STOREFRONT",
  /** Sort attributes by the filterable in storefront flag */
  FILTERABLE_IN_STOREFRONT = "FILTERABLE_IN_STOREFRONT",
  /** Sort attributes by the filterable in dashboard flag */
  FILTERABLE_IN_DASHBOARD = "FILTERABLE_IN_DASHBOARD",
  /** Sort attributes by their position in storefront */
  STOREFRONT_SEARCH_POSITION = "STOREFRONT_SEARCH_POSITION",
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  AVAILABLE_IN_GRID = "AVAILABLE_IN_GRID",
}

/** An enumeration. */
export enum AttributeTypeEnum {
  PRODUCT_TYPE = "PRODUCT_TYPE",
  PAGE_TYPE = "PAGE_TYPE",
}

export enum CategorySortFieldEnum {
  /** Sort categories by name. */
  NAME = "NAME",
  /** Sort categories by product count. */
  PRODUCT_COUNT = "PRODUCT_COUNT",
  /** Sort categories by subcategory count. */
  SUBCATEGORY_COUNT = "SUBCATEGORY_COUNT",
}

/** An enumeration. */
export enum ChannelErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  CHANNELS_CURRENCY_MUST_BE_THE_SAME = "CHANNELS_CURRENCY_MUST_BE_THE_SAME",
  CHANNEL_WITH_ORDERS = "CHANNEL_WITH_ORDERS",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
}

/** An enumeration. */
export enum CheckoutErrorCodeEnum {
  BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
  CHECKOUT_NOT_FULLY_PAID = "CHECKOUT_NOT_FULLY_PAID",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
  PRODUCT_UNAVAILABLE_FOR_PURCHASE = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
  INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
  INVALID = "INVALID",
  INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
  NOT_FOUND = "NOT_FOUND",
  PAYMENT_ERROR = "PAYMENT_ERROR",
  QUANTITY_GREATER_THAN_LIMIT = "QUANTITY_GREATER_THAN_LIMIT",
  REQUIRED = "REQUIRED",
  SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
  SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
  DELIVERY_METHOD_NOT_APPLICABLE = "DELIVERY_METHOD_NOT_APPLICABLE",
  SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
  SHIPPING_NOT_REQUIRED = "SHIPPING_NOT_REQUIRED",
  TAX_ERROR = "TAX_ERROR",
  UNIQUE = "UNIQUE",
  VOUCHER_NOT_APPLICABLE = "VOUCHER_NOT_APPLICABLE",
  GIFT_CARD_NOT_APPLICABLE = "GIFT_CARD_NOT_APPLICABLE",
  ZERO_QUANTITY = "ZERO_QUANTITY",
  MISSING_CHANNEL_SLUG = "MISSING_CHANNEL_SLUG",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
  UNAVAILABLE_VARIANT_IN_CHANNEL = "UNAVAILABLE_VARIANT_IN_CHANNEL",
  EMAIL_NOT_SET = "EMAIL_NOT_SET",
  NO_LINES = "NO_LINES",
}

export enum CheckoutSortFieldEnum {
  /** Sort checkouts by creation date. */
  CREATION_DATE = "CREATION_DATE",
  /** Sort checkouts by customer. */
  CUSTOMER = "CUSTOMER",
  /** Sort checkouts by payment. */
  PAYMENT = "PAYMENT",
}

/** An enumeration. */
export enum CollectionErrorCodeEnum {
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
}

export enum CollectionPublishedEnum {
  PUBLISHED = "PUBLISHED",
  HIDDEN = "HIDDEN",
}

export enum CollectionSortFieldEnum {
  /** Sort collections by name. */
  NAME = "NAME",
  /** Sort collections by availability. */
  AVAILABILITY = "AVAILABILITY",
  /** Sort collections by product count. */
  PRODUCT_COUNT = "PRODUCT_COUNT",
  /** Sort collections by publication date. */
  PUBLICATION_DATE = "PUBLICATION_DATE",
}

/** An enumeration. */
export enum ConfigurationTypeFieldEnum {
  STRING = "STRING",
  MULTILINE = "MULTILINE",
  BOOLEAN = "BOOLEAN",
  SECRET = "SECRET",
  PASSWORD = "PASSWORD",
  SECRETMULTILINE = "SECRETMULTILINE",
  OUTPUT = "OUTPUT",
}

/** An enumeration. */
export enum CountryCodeEnum {
  AF = "AF",
  AX = "AX",
  AL = "AL",
  DZ = "DZ",
  AS = "AS",
  AD = "AD",
  AO = "AO",
  AI = "AI",
  AQ = "AQ",
  AG = "AG",
  AR = "AR",
  AM = "AM",
  AW = "AW",
  AU = "AU",
  AT = "AT",
  AZ = "AZ",
  BS = "BS",
  BH = "BH",
  BD = "BD",
  BB = "BB",
  BY = "BY",
  BE = "BE",
  BZ = "BZ",
  BJ = "BJ",
  BM = "BM",
  BT = "BT",
  BO = "BO",
  BQ = "BQ",
  BA = "BA",
  BW = "BW",
  BV = "BV",
  BR = "BR",
  IO = "IO",
  BN = "BN",
  BG = "BG",
  BF = "BF",
  BI = "BI",
  CV = "CV",
  KH = "KH",
  CM = "CM",
  CA = "CA",
  KY = "KY",
  CF = "CF",
  TD = "TD",
  CL = "CL",
  CN = "CN",
  CX = "CX",
  CC = "CC",
  CO = "CO",
  KM = "KM",
  CG = "CG",
  CD = "CD",
  CK = "CK",
  CR = "CR",
  CI = "CI",
  HR = "HR",
  CU = "CU",
  CW = "CW",
  CY = "CY",
  CZ = "CZ",
  DK = "DK",
  DJ = "DJ",
  DM = "DM",
  DO = "DO",
  EC = "EC",
  EG = "EG",
  SV = "SV",
  GQ = "GQ",
  ER = "ER",
  EE = "EE",
  SZ = "SZ",
  ET = "ET",
  EU = "EU",
  FK = "FK",
  FO = "FO",
  FJ = "FJ",
  FI = "FI",
  FR = "FR",
  GF = "GF",
  PF = "PF",
  TF = "TF",
  GA = "GA",
  GM = "GM",
  GE = "GE",
  DE = "DE",
  GH = "GH",
  GI = "GI",
  GR = "GR",
  GL = "GL",
  GD = "GD",
  GP = "GP",
  GU = "GU",
  GT = "GT",
  GG = "GG",
  GN = "GN",
  GW = "GW",
  GY = "GY",
  HT = "HT",
  HM = "HM",
  VA = "VA",
  HN = "HN",
  HK = "HK",
  HU = "HU",
  IS = "IS",
  IN = "IN",
  ID = "ID",
  IR = "IR",
  IQ = "IQ",
  IE = "IE",
  IM = "IM",
  IL = "IL",
  IT = "IT",
  JM = "JM",
  JP = "JP",
  JE = "JE",
  JO = "JO",
  KZ = "KZ",
  KE = "KE",
  KI = "KI",
  KW = "KW",
  KG = "KG",
  LA = "LA",
  LV = "LV",
  LB = "LB",
  LS = "LS",
  LR = "LR",
  LY = "LY",
  LI = "LI",
  LT = "LT",
  LU = "LU",
  MO = "MO",
  MG = "MG",
  MW = "MW",
  MY = "MY",
  MV = "MV",
  ML = "ML",
  MT = "MT",
  MH = "MH",
  MQ = "MQ",
  MR = "MR",
  MU = "MU",
  YT = "YT",
  MX = "MX",
  FM = "FM",
  MD = "MD",
  MC = "MC",
  MN = "MN",
  ME = "ME",
  MS = "MS",
  MA = "MA",
  MZ = "MZ",
  MM = "MM",
  NA = "NA",
  NR = "NR",
  NP = "NP",
  NL = "NL",
  NC = "NC",
  NZ = "NZ",
  NI = "NI",
  NE = "NE",
  NG = "NG",
  NU = "NU",
  NF = "NF",
  KP = "KP",
  MK = "MK",
  MP = "MP",
  NO = "NO",
  OM = "OM",
  PK = "PK",
  PW = "PW",
  PS = "PS",
  PA = "PA",
  PG = "PG",
  PY = "PY",
  PE = "PE",
  PH = "PH",
  PN = "PN",
  PL = "PL",
  PT = "PT",
  PR = "PR",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RU = "RU",
  RW = "RW",
  BL = "BL",
  SH = "SH",
  KN = "KN",
  LC = "LC",
  MF = "MF",
  PM = "PM",
  VC = "VC",
  WS = "WS",
  SM = "SM",
  ST = "ST",
  SA = "SA",
  SN = "SN",
  RS = "RS",
  SC = "SC",
  SL = "SL",
  SG = "SG",
  SX = "SX",
  SK = "SK",
  SI = "SI",
  SB = "SB",
  SO = "SO",
  ZA = "ZA",
  GS = "GS",
  KR = "KR",
  SS = "SS",
  ES = "ES",
  LK = "LK",
  SD = "SD",
  SR = "SR",
  SJ = "SJ",
  SE = "SE",
  CH = "CH",
  SY = "SY",
  TW = "TW",
  TJ = "TJ",
  TZ = "TZ",
  TH = "TH",
  TL = "TL",
  TG = "TG",
  TK = "TK",
  TO = "TO",
  TT = "TT",
  TN = "TN",
  TR = "TR",
  TM = "TM",
  TC = "TC",
  TV = "TV",
  UG = "UG",
  UA = "UA",
  AE = "AE",
  GB = "GB",
  UM = "UM",
  US = "US",
  UY = "UY",
  UZ = "UZ",
  VU = "VU",
  VE = "VE",
  VN = "VN",
  VG = "VG",
  VI = "VI",
  WF = "WF",
  EH = "EH",
  YE = "YE",
  ZM = "ZM",
  ZW = "ZW",
}

/** An enumeration. */
export enum CustomerEventsEnum {
  ACCOUNT_CREATED = "ACCOUNT_CREATED",
  PASSWORD_RESET_LINK_SENT = "PASSWORD_RESET_LINK_SENT",
  PASSWORD_RESET = "PASSWORD_RESET",
  EMAIL_CHANGED_REQUEST = "EMAIL_CHANGED_REQUEST",
  PASSWORD_CHANGED = "PASSWORD_CHANGED",
  EMAIL_CHANGED = "EMAIL_CHANGED",
  PLACED_ORDER = "PLACED_ORDER",
  NOTE_ADDED_TO_ORDER = "NOTE_ADDED_TO_ORDER",
  DIGITAL_LINK_DOWNLOADED = "DIGITAL_LINK_DOWNLOADED",
  CUSTOMER_DELETED = "CUSTOMER_DELETED",
  NAME_ASSIGNED = "NAME_ASSIGNED",
  EMAIL_ASSIGNED = "EMAIL_ASSIGNED",
  NOTE_ADDED = "NOTE_ADDED",
}

/** An enumeration. */
export enum DiscountErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
}

export enum DiscountStatusEnum {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  SCHEDULED = "SCHEDULED",
}

export enum DiscountValueTypeEnum {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
}

/** An enumeration. */
export enum DistanceUnitsEnum {
  CM = "CM",
  M = "M",
  KM = "KM",
  FT = "FT",
  YD = "YD",
  INCH = "INCH",
}

export enum EventDeliveryAttemptSortFieldEnum {
  /** Sort event delivery attempts by created at. */
  CREATED_AT = "CREATED_AT",
}

export enum EventDeliverySortFieldEnum {
  /** Sort event deliveries by created at. */
  CREATED_AT = "CREATED_AT",
}

export enum EventDeliveryStatusEnum {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

/** An enumeration. */
export enum ExportErrorCodeEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
}

/** An enumeration. */
export enum ExportEventsEnum {
  EXPORT_PENDING = "EXPORT_PENDING",
  EXPORT_SUCCESS = "EXPORT_SUCCESS",
  EXPORT_FAILED = "EXPORT_FAILED",
  EXPORT_DELETED = "EXPORT_DELETED",
  EXPORTED_FILE_SENT = "EXPORTED_FILE_SENT",
  EXPORT_FAILED_INFO_SENT = "EXPORT_FAILED_INFO_SENT",
}

export enum ExportFileSortFieldEnum {
  STATUS = "STATUS",
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  LAST_MODIFIED_AT = "LAST_MODIFIED_AT",
}

export enum ExportScopeEnum {
  /** Export all products. */
  ALL = "ALL",
  /** Export products with given ids. */
  IDS = "IDS",
  /** Export the filtered products. */
  FILTER = "FILTER",
}

/** An enumeration. */
export enum ExternalNotificationErrorCodesEnum {
  REQUIRED = "REQUIRED",
  INVALID_MODEL_TYPE = "INVALID_MODEL_TYPE",
  NOT_FOUND = "NOT_FOUND",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
}

/** An enumeration. */
export enum FileTypesEnum {
  CSV = "CSV",
  XLSX = "XLSX",
}

/** An enumeration. */
export enum FulfillmentStatusEnum {
  FULFILLED = "FULFILLED",
  REFUNDED = "REFUNDED",
  RETURNED = "RETURNED",
  REPLACED = "REPLACED",
  REFUNDED_AND_RETURNED = "REFUNDED_AND_RETURNED",
  CANCELED = "CANCELED",
  WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL",
}

/** An enumeration. */
export enum GiftCardErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  EXPIRED_GIFT_CARD = "EXPIRED_GIFT_CARD",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
}

/** An enumeration. */
export enum GiftCardEventsEnum {
  ISSUED = "ISSUED",
  BOUGHT = "BOUGHT",
  UPDATED = "UPDATED",
  ACTIVATED = "ACTIVATED",
  DEACTIVATED = "DEACTIVATED",
  BALANCE_RESET = "BALANCE_RESET",
  EXPIRY_DATE_UPDATED = "EXPIRY_DATE_UPDATED",
  TAGS_UPDATED = "TAGS_UPDATED",
  SENT_TO_CUSTOMER = "SENT_TO_CUSTOMER",
  RESENT = "RESENT",
  NOTE_ADDED = "NOTE_ADDED",
  USED_IN_ORDER = "USED_IN_ORDER",
}

/** An enumeration. */
export enum GiftCardSettingsErrorCodeEnum {
  INVALID = "INVALID",
  REQUIRED = "REQUIRED",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
}

/** An enumeration. */
export enum GiftCardSettingsExpiryTypeEnum {
  NEVER_EXPIRE = "NEVER_EXPIRE",
  EXPIRY_PERIOD = "EXPIRY_PERIOD",
}

export enum GiftCardSortFieldEnum {
  /** Sort orders by product. */
  PRODUCT = "PRODUCT",
  /** Sort orders by used by. */
  USED_BY = "USED_BY",
  /** Sort orders by current balance. */
  CURRENT_BALANCE = "CURRENT_BALANCE",
}

/** An enumeration. */
export enum InvoiceErrorCodeEnum {
  REQUIRED = "REQUIRED",
  NOT_READY = "NOT_READY",
  URL_NOT_SET = "URL_NOT_SET",
  EMAIL_NOT_SET = "EMAIL_NOT_SET",
  NUMBER_NOT_SET = "NUMBER_NOT_SET",
  NOT_FOUND = "NOT_FOUND",
  INVALID_STATUS = "INVALID_STATUS",
  NO_INVOICE_PLUGIN = "NO_INVOICE_PLUGIN",
}

/** An enumeration. */
export enum JobStatusEnum {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  DELETED = "DELETED",
}

/** An enumeration. */
export enum LanguageCodeEnum {
  AF = "AF",
  AF_NA = "AF_NA",
  AF_ZA = "AF_ZA",
  AGQ = "AGQ",
  AGQ_CM = "AGQ_CM",
  AK = "AK",
  AK_GH = "AK_GH",
  AM = "AM",
  AM_ET = "AM_ET",
  AR = "AR",
  AR_AE = "AR_AE",
  AR_BH = "AR_BH",
  AR_DJ = "AR_DJ",
  AR_DZ = "AR_DZ",
  AR_EG = "AR_EG",
  AR_EH = "AR_EH",
  AR_ER = "AR_ER",
  AR_IL = "AR_IL",
  AR_IQ = "AR_IQ",
  AR_JO = "AR_JO",
  AR_KM = "AR_KM",
  AR_KW = "AR_KW",
  AR_LB = "AR_LB",
  AR_LY = "AR_LY",
  AR_MA = "AR_MA",
  AR_MR = "AR_MR",
  AR_OM = "AR_OM",
  AR_PS = "AR_PS",
  AR_QA = "AR_QA",
  AR_SA = "AR_SA",
  AR_SD = "AR_SD",
  AR_SO = "AR_SO",
  AR_SS = "AR_SS",
  AR_SY = "AR_SY",
  AR_TD = "AR_TD",
  AR_TN = "AR_TN",
  AR_YE = "AR_YE",
  AS = "AS",
  AS_IN = "AS_IN",
  ASA = "ASA",
  ASA_TZ = "ASA_TZ",
  AST = "AST",
  AST_ES = "AST_ES",
  AZ = "AZ",
  AZ_CYRL = "AZ_CYRL",
  AZ_CYRL_AZ = "AZ_CYRL_AZ",
  AZ_LATN = "AZ_LATN",
  AZ_LATN_AZ = "AZ_LATN_AZ",
  BAS = "BAS",
  BAS_CM = "BAS_CM",
  BE = "BE",
  BE_BY = "BE_BY",
  BEM = "BEM",
  BEM_ZM = "BEM_ZM",
  BEZ = "BEZ",
  BEZ_TZ = "BEZ_TZ",
  BG = "BG",
  BG_BG = "BG_BG",
  BM = "BM",
  BM_ML = "BM_ML",
  BN = "BN",
  BN_BD = "BN_BD",
  BN_IN = "BN_IN",
  BO = "BO",
  BO_CN = "BO_CN",
  BO_IN = "BO_IN",
  BR = "BR",
  BR_FR = "BR_FR",
  BRX = "BRX",
  BRX_IN = "BRX_IN",
  BS = "BS",
  BS_CYRL = "BS_CYRL",
  BS_CYRL_BA = "BS_CYRL_BA",
  BS_LATN = "BS_LATN",
  BS_LATN_BA = "BS_LATN_BA",
  CA = "CA",
  CA_AD = "CA_AD",
  CA_ES = "CA_ES",
  CA_ES_VALENCIA = "CA_ES_VALENCIA",
  CA_FR = "CA_FR",
  CA_IT = "CA_IT",
  CCP = "CCP",
  CCP_BD = "CCP_BD",
  CCP_IN = "CCP_IN",
  CE = "CE",
  CE_RU = "CE_RU",
  CEB = "CEB",
  CEB_PH = "CEB_PH",
  CGG = "CGG",
  CGG_UG = "CGG_UG",
  CHR = "CHR",
  CHR_US = "CHR_US",
  CKB = "CKB",
  CKB_IQ = "CKB_IQ",
  CKB_IR = "CKB_IR",
  CS = "CS",
  CS_CZ = "CS_CZ",
  CU = "CU",
  CU_RU = "CU_RU",
  CY = "CY",
  CY_GB = "CY_GB",
  DA = "DA",
  DA_DK = "DA_DK",
  DA_GL = "DA_GL",
  DAV = "DAV",
  DAV_KE = "DAV_KE",
  DE = "DE",
  DE_AT = "DE_AT",
  DE_BE = "DE_BE",
  DE_CH = "DE_CH",
  DE_DE = "DE_DE",
  DE_IT = "DE_IT",
  DE_LI = "DE_LI",
  DE_LU = "DE_LU",
  DJE = "DJE",
  DJE_NE = "DJE_NE",
  DSB = "DSB",
  DSB_DE = "DSB_DE",
  DUA = "DUA",
  DUA_CM = "DUA_CM",
  DYO = "DYO",
  DYO_SN = "DYO_SN",
  DZ = "DZ",
  DZ_BT = "DZ_BT",
  EBU = "EBU",
  EBU_KE = "EBU_KE",
  EE = "EE",
  EE_GH = "EE_GH",
  EE_TG = "EE_TG",
  EL = "EL",
  EL_CY = "EL_CY",
  EL_GR = "EL_GR",
  EN = "EN",
  EN_AE = "EN_AE",
  EN_AG = "EN_AG",
  EN_AI = "EN_AI",
  EN_AS = "EN_AS",
  EN_AT = "EN_AT",
  EN_AU = "EN_AU",
  EN_BB = "EN_BB",
  EN_BE = "EN_BE",
  EN_BI = "EN_BI",
  EN_BM = "EN_BM",
  EN_BS = "EN_BS",
  EN_BW = "EN_BW",
  EN_BZ = "EN_BZ",
  EN_CA = "EN_CA",
  EN_CC = "EN_CC",
  EN_CH = "EN_CH",
  EN_CK = "EN_CK",
  EN_CM = "EN_CM",
  EN_CX = "EN_CX",
  EN_CY = "EN_CY",
  EN_DE = "EN_DE",
  EN_DG = "EN_DG",
  EN_DK = "EN_DK",
  EN_DM = "EN_DM",
  EN_ER = "EN_ER",
  EN_FI = "EN_FI",
  EN_FJ = "EN_FJ",
  EN_FK = "EN_FK",
  EN_FM = "EN_FM",
  EN_GB = "EN_GB",
  EN_GD = "EN_GD",
  EN_GG = "EN_GG",
  EN_GH = "EN_GH",
  EN_GI = "EN_GI",
  EN_GM = "EN_GM",
  EN_GU = "EN_GU",
  EN_GY = "EN_GY",
  EN_HK = "EN_HK",
  EN_IE = "EN_IE",
  EN_IL = "EN_IL",
  EN_IM = "EN_IM",
  EN_IN = "EN_IN",
  EN_IO = "EN_IO",
  EN_JE = "EN_JE",
  EN_JM = "EN_JM",
  EN_KE = "EN_KE",
  EN_KI = "EN_KI",
  EN_KN = "EN_KN",
  EN_KY = "EN_KY",
  EN_LC = "EN_LC",
  EN_LR = "EN_LR",
  EN_LS = "EN_LS",
  EN_MG = "EN_MG",
  EN_MH = "EN_MH",
  EN_MO = "EN_MO",
  EN_MP = "EN_MP",
  EN_MS = "EN_MS",
  EN_MT = "EN_MT",
  EN_MU = "EN_MU",
  EN_MW = "EN_MW",
  EN_MY = "EN_MY",
  EN_NA = "EN_NA",
  EN_NF = "EN_NF",
  EN_NG = "EN_NG",
  EN_NL = "EN_NL",
  EN_NR = "EN_NR",
  EN_NU = "EN_NU",
  EN_NZ = "EN_NZ",
  EN_PG = "EN_PG",
  EN_PH = "EN_PH",
  EN_PK = "EN_PK",
  EN_PN = "EN_PN",
  EN_PR = "EN_PR",
  EN_PW = "EN_PW",
  EN_RW = "EN_RW",
  EN_SB = "EN_SB",
  EN_SC = "EN_SC",
  EN_SD = "EN_SD",
  EN_SE = "EN_SE",
  EN_SG = "EN_SG",
  EN_SH = "EN_SH",
  EN_SI = "EN_SI",
  EN_SL = "EN_SL",
  EN_SS = "EN_SS",
  EN_SX = "EN_SX",
  EN_SZ = "EN_SZ",
  EN_TC = "EN_TC",
  EN_TK = "EN_TK",
  EN_TO = "EN_TO",
  EN_TT = "EN_TT",
  EN_TV = "EN_TV",
  EN_TZ = "EN_TZ",
  EN_UG = "EN_UG",
  EN_UM = "EN_UM",
  EN_US = "EN_US",
  EN_VC = "EN_VC",
  EN_VG = "EN_VG",
  EN_VI = "EN_VI",
  EN_VU = "EN_VU",
  EN_WS = "EN_WS",
  EN_ZA = "EN_ZA",
  EN_ZM = "EN_ZM",
  EN_ZW = "EN_ZW",
  EO = "EO",
  ES = "ES",
  ES_AR = "ES_AR",
  ES_BO = "ES_BO",
  ES_BR = "ES_BR",
  ES_BZ = "ES_BZ",
  ES_CL = "ES_CL",
  ES_CO = "ES_CO",
  ES_CR = "ES_CR",
  ES_CU = "ES_CU",
  ES_DO = "ES_DO",
  ES_EA = "ES_EA",
  ES_EC = "ES_EC",
  ES_ES = "ES_ES",
  ES_GQ = "ES_GQ",
  ES_GT = "ES_GT",
  ES_HN = "ES_HN",
  ES_IC = "ES_IC",
  ES_MX = "ES_MX",
  ES_NI = "ES_NI",
  ES_PA = "ES_PA",
  ES_PE = "ES_PE",
  ES_PH = "ES_PH",
  ES_PR = "ES_PR",
  ES_PY = "ES_PY",
  ES_SV = "ES_SV",
  ES_US = "ES_US",
  ES_UY = "ES_UY",
  ES_VE = "ES_VE",
  ET = "ET",
  ET_EE = "ET_EE",
  EU = "EU",
  EU_ES = "EU_ES",
  EWO = "EWO",
  EWO_CM = "EWO_CM",
  FA = "FA",
  FA_AF = "FA_AF",
  FA_IR = "FA_IR",
  FF = "FF",
  FF_ADLM = "FF_ADLM",
  FF_ADLM_BF = "FF_ADLM_BF",
  FF_ADLM_CM = "FF_ADLM_CM",
  FF_ADLM_GH = "FF_ADLM_GH",
  FF_ADLM_GM = "FF_ADLM_GM",
  FF_ADLM_GN = "FF_ADLM_GN",
  FF_ADLM_GW = "FF_ADLM_GW",
  FF_ADLM_LR = "FF_ADLM_LR",
  FF_ADLM_MR = "FF_ADLM_MR",
  FF_ADLM_NE = "FF_ADLM_NE",
  FF_ADLM_NG = "FF_ADLM_NG",
  FF_ADLM_SL = "FF_ADLM_SL",
  FF_ADLM_SN = "FF_ADLM_SN",
  FF_LATN = "FF_LATN",
  FF_LATN_BF = "FF_LATN_BF",
  FF_LATN_CM = "FF_LATN_CM",
  FF_LATN_GH = "FF_LATN_GH",
  FF_LATN_GM = "FF_LATN_GM",
  FF_LATN_GN = "FF_LATN_GN",
  FF_LATN_GW = "FF_LATN_GW",
  FF_LATN_LR = "FF_LATN_LR",
  FF_LATN_MR = "FF_LATN_MR",
  FF_LATN_NE = "FF_LATN_NE",
  FF_LATN_NG = "FF_LATN_NG",
  FF_LATN_SL = "FF_LATN_SL",
  FF_LATN_SN = "FF_LATN_SN",
  FI = "FI",
  FI_FI = "FI_FI",
  FIL = "FIL",
  FIL_PH = "FIL_PH",
  FO = "FO",
  FO_DK = "FO_DK",
  FO_FO = "FO_FO",
  FR = "FR",
  FR_BE = "FR_BE",
  FR_BF = "FR_BF",
  FR_BI = "FR_BI",
  FR_BJ = "FR_BJ",
  FR_BL = "FR_BL",
  FR_CA = "FR_CA",
  FR_CD = "FR_CD",
  FR_CF = "FR_CF",
  FR_CG = "FR_CG",
  FR_CH = "FR_CH",
  FR_CI = "FR_CI",
  FR_CM = "FR_CM",
  FR_DJ = "FR_DJ",
  FR_DZ = "FR_DZ",
  FR_FR = "FR_FR",
  FR_GA = "FR_GA",
  FR_GF = "FR_GF",
  FR_GN = "FR_GN",
  FR_GP = "FR_GP",
  FR_GQ = "FR_GQ",
  FR_HT = "FR_HT",
  FR_KM = "FR_KM",
  FR_LU = "FR_LU",
  FR_MA = "FR_MA",
  FR_MC = "FR_MC",
  FR_MF = "FR_MF",
  FR_MG = "FR_MG",
  FR_ML = "FR_ML",
  FR_MQ = "FR_MQ",
  FR_MR = "FR_MR",
  FR_MU = "FR_MU",
  FR_NC = "FR_NC",
  FR_NE = "FR_NE",
  FR_PF = "FR_PF",
  FR_PM = "FR_PM",
  FR_RE = "FR_RE",
  FR_RW = "FR_RW",
  FR_SC = "FR_SC",
  FR_SN = "FR_SN",
  FR_SY = "FR_SY",
  FR_TD = "FR_TD",
  FR_TG = "FR_TG",
  FR_TN = "FR_TN",
  FR_VU = "FR_VU",
  FR_WF = "FR_WF",
  FR_YT = "FR_YT",
  FUR = "FUR",
  FUR_IT = "FUR_IT",
  FY = "FY",
  FY_NL = "FY_NL",
  GA = "GA",
  GA_GB = "GA_GB",
  GA_IE = "GA_IE",
  GD = "GD",
  GD_GB = "GD_GB",
  GL = "GL",
  GL_ES = "GL_ES",
  GSW = "GSW",
  GSW_CH = "GSW_CH",
  GSW_FR = "GSW_FR",
  GSW_LI = "GSW_LI",
  GU = "GU",
  GU_IN = "GU_IN",
  GUZ = "GUZ",
  GUZ_KE = "GUZ_KE",
  GV = "GV",
  GV_IM = "GV_IM",
  HA = "HA",
  HA_GH = "HA_GH",
  HA_NE = "HA_NE",
  HA_NG = "HA_NG",
  HAW = "HAW",
  HAW_US = "HAW_US",
  HE = "HE",
  HE_IL = "HE_IL",
  HI = "HI",
  HI_IN = "HI_IN",
  HR = "HR",
  HR_BA = "HR_BA",
  HR_HR = "HR_HR",
  HSB = "HSB",
  HSB_DE = "HSB_DE",
  HU = "HU",
  HU_HU = "HU_HU",
  HY = "HY",
  HY_AM = "HY_AM",
  IA = "IA",
  ID = "ID",
  ID_ID = "ID_ID",
  IG = "IG",
  IG_NG = "IG_NG",
  II = "II",
  II_CN = "II_CN",
  IS = "IS",
  IS_IS = "IS_IS",
  IT = "IT",
  IT_CH = "IT_CH",
  IT_IT = "IT_IT",
  IT_SM = "IT_SM",
  IT_VA = "IT_VA",
  JA = "JA",
  JA_JP = "JA_JP",
  JGO = "JGO",
  JGO_CM = "JGO_CM",
  JMC = "JMC",
  JMC_TZ = "JMC_TZ",
  JV = "JV",
  JV_ID = "JV_ID",
  KA = "KA",
  KA_GE = "KA_GE",
  KAB = "KAB",
  KAB_DZ = "KAB_DZ",
  KAM = "KAM",
  KAM_KE = "KAM_KE",
  KDE = "KDE",
  KDE_TZ = "KDE_TZ",
  KEA = "KEA",
  KEA_CV = "KEA_CV",
  KHQ = "KHQ",
  KHQ_ML = "KHQ_ML",
  KI = "KI",
  KI_KE = "KI_KE",
  KK = "KK",
  KK_KZ = "KK_KZ",
  KKJ = "KKJ",
  KKJ_CM = "KKJ_CM",
  KL = "KL",
  KL_GL = "KL_GL",
  KLN = "KLN",
  KLN_KE = "KLN_KE",
  KM = "KM",
  KM_KH = "KM_KH",
  KN = "KN",
  KN_IN = "KN_IN",
  KO = "KO",
  KO_KP = "KO_KP",
  KO_KR = "KO_KR",
  KOK = "KOK",
  KOK_IN = "KOK_IN",
  KS = "KS",
  KS_ARAB = "KS_ARAB",
  KS_ARAB_IN = "KS_ARAB_IN",
  KSB = "KSB",
  KSB_TZ = "KSB_TZ",
  KSF = "KSF",
  KSF_CM = "KSF_CM",
  KSH = "KSH",
  KSH_DE = "KSH_DE",
  KU = "KU",
  KU_TR = "KU_TR",
  KW = "KW",
  KW_GB = "KW_GB",
  KY = "KY",
  KY_KG = "KY_KG",
  LAG = "LAG",
  LAG_TZ = "LAG_TZ",
  LB = "LB",
  LB_LU = "LB_LU",
  LG = "LG",
  LG_UG = "LG_UG",
  LKT = "LKT",
  LKT_US = "LKT_US",
  LN = "LN",
  LN_AO = "LN_AO",
  LN_CD = "LN_CD",
  LN_CF = "LN_CF",
  LN_CG = "LN_CG",
  LO = "LO",
  LO_LA = "LO_LA",
  LRC = "LRC",
  LRC_IQ = "LRC_IQ",
  LRC_IR = "LRC_IR",
  LT = "LT",
  LT_LT = "LT_LT",
  LU = "LU",
  LU_CD = "LU_CD",
  LUO = "LUO",
  LUO_KE = "LUO_KE",
  LUY = "LUY",
  LUY_KE = "LUY_KE",
  LV = "LV",
  LV_LV = "LV_LV",
  MAI = "MAI",
  MAI_IN = "MAI_IN",
  MAS = "MAS",
  MAS_KE = "MAS_KE",
  MAS_TZ = "MAS_TZ",
  MER = "MER",
  MER_KE = "MER_KE",
  MFE = "MFE",
  MFE_MU = "MFE_MU",
  MG = "MG",
  MG_MG = "MG_MG",
  MGH = "MGH",
  MGH_MZ = "MGH_MZ",
  MGO = "MGO",
  MGO_CM = "MGO_CM",
  MI = "MI",
  MI_NZ = "MI_NZ",
  MK = "MK",
  MK_MK = "MK_MK",
  ML = "ML",
  ML_IN = "ML_IN",
  MN = "MN",
  MN_MN = "MN_MN",
  MNI = "MNI",
  MNI_BENG = "MNI_BENG",
  MNI_BENG_IN = "MNI_BENG_IN",
  MR = "MR",
  MR_IN = "MR_IN",
  MS = "MS",
  MS_BN = "MS_BN",
  MS_ID = "MS_ID",
  MS_MY = "MS_MY",
  MS_SG = "MS_SG",
  MT = "MT",
  MT_MT = "MT_MT",
  MUA = "MUA",
  MUA_CM = "MUA_CM",
  MY = "MY",
  MY_MM = "MY_MM",
  MZN = "MZN",
  MZN_IR = "MZN_IR",
  NAQ = "NAQ",
  NAQ_NA = "NAQ_NA",
  NB = "NB",
  NB_NO = "NB_NO",
  NB_SJ = "NB_SJ",
  ND = "ND",
  ND_ZW = "ND_ZW",
  NDS = "NDS",
  NDS_DE = "NDS_DE",
  NDS_NL = "NDS_NL",
  NE = "NE",
  NE_IN = "NE_IN",
  NE_NP = "NE_NP",
  NL = "NL",
  NL_AW = "NL_AW",
  NL_BE = "NL_BE",
  NL_BQ = "NL_BQ",
  NL_CW = "NL_CW",
  NL_NL = "NL_NL",
  NL_SR = "NL_SR",
  NL_SX = "NL_SX",
  NMG = "NMG",
  NMG_CM = "NMG_CM",
  NN = "NN",
  NN_NO = "NN_NO",
  NNH = "NNH",
  NNH_CM = "NNH_CM",
  NUS = "NUS",
  NUS_SS = "NUS_SS",
  NYN = "NYN",
  NYN_UG = "NYN_UG",
  OM = "OM",
  OM_ET = "OM_ET",
  OM_KE = "OM_KE",
  OR = "OR",
  OR_IN = "OR_IN",
  OS = "OS",
  OS_GE = "OS_GE",
  OS_RU = "OS_RU",
  PA = "PA",
  PA_ARAB = "PA_ARAB",
  PA_ARAB_PK = "PA_ARAB_PK",
  PA_GURU = "PA_GURU",
  PA_GURU_IN = "PA_GURU_IN",
  PCM = "PCM",
  PCM_NG = "PCM_NG",
  PL = "PL",
  PL_PL = "PL_PL",
  PRG = "PRG",
  PS = "PS",
  PS_AF = "PS_AF",
  PS_PK = "PS_PK",
  PT = "PT",
  PT_AO = "PT_AO",
  PT_BR = "PT_BR",
  PT_CH = "PT_CH",
  PT_CV = "PT_CV",
  PT_GQ = "PT_GQ",
  PT_GW = "PT_GW",
  PT_LU = "PT_LU",
  PT_MO = "PT_MO",
  PT_MZ = "PT_MZ",
  PT_PT = "PT_PT",
  PT_ST = "PT_ST",
  PT_TL = "PT_TL",
  QU = "QU",
  QU_BO = "QU_BO",
  QU_EC = "QU_EC",
  QU_PE = "QU_PE",
  RM = "RM",
  RM_CH = "RM_CH",
  RN = "RN",
  RN_BI = "RN_BI",
  RO = "RO",
  RO_MD = "RO_MD",
  RO_RO = "RO_RO",
  ROF = "ROF",
  ROF_TZ = "ROF_TZ",
  RU = "RU",
  RU_BY = "RU_BY",
  RU_KG = "RU_KG",
  RU_KZ = "RU_KZ",
  RU_MD = "RU_MD",
  RU_RU = "RU_RU",
  RU_UA = "RU_UA",
  RW = "RW",
  RW_RW = "RW_RW",
  RWK = "RWK",
  RWK_TZ = "RWK_TZ",
  SAH = "SAH",
  SAH_RU = "SAH_RU",
  SAQ = "SAQ",
  SAQ_KE = "SAQ_KE",
  SAT = "SAT",
  SAT_OLCK = "SAT_OLCK",
  SAT_OLCK_IN = "SAT_OLCK_IN",
  SBP = "SBP",
  SBP_TZ = "SBP_TZ",
  SD = "SD",
  SD_ARAB = "SD_ARAB",
  SD_ARAB_PK = "SD_ARAB_PK",
  SD_DEVA = "SD_DEVA",
  SD_DEVA_IN = "SD_DEVA_IN",
  SE = "SE",
  SE_FI = "SE_FI",
  SE_NO = "SE_NO",
  SE_SE = "SE_SE",
  SEH = "SEH",
  SEH_MZ = "SEH_MZ",
  SES = "SES",
  SES_ML = "SES_ML",
  SG = "SG",
  SG_CF = "SG_CF",
  SHI = "SHI",
  SHI_LATN = "SHI_LATN",
  SHI_LATN_MA = "SHI_LATN_MA",
  SHI_TFNG = "SHI_TFNG",
  SHI_TFNG_MA = "SHI_TFNG_MA",
  SI = "SI",
  SI_LK = "SI_LK",
  SK = "SK",
  SK_SK = "SK_SK",
  SL = "SL",
  SL_SI = "SL_SI",
  SMN = "SMN",
  SMN_FI = "SMN_FI",
  SN = "SN",
  SN_ZW = "SN_ZW",
  SO = "SO",
  SO_DJ = "SO_DJ",
  SO_ET = "SO_ET",
  SO_KE = "SO_KE",
  SO_SO = "SO_SO",
  SQ = "SQ",
  SQ_AL = "SQ_AL",
  SQ_MK = "SQ_MK",
  SQ_XK = "SQ_XK",
  SR = "SR",
  SR_CYRL = "SR_CYRL",
  SR_CYRL_BA = "SR_CYRL_BA",
  SR_CYRL_ME = "SR_CYRL_ME",
  SR_CYRL_RS = "SR_CYRL_RS",
  SR_CYRL_XK = "SR_CYRL_XK",
  SR_LATN = "SR_LATN",
  SR_LATN_BA = "SR_LATN_BA",
  SR_LATN_ME = "SR_LATN_ME",
  SR_LATN_RS = "SR_LATN_RS",
  SR_LATN_XK = "SR_LATN_XK",
  SU = "SU",
  SU_LATN = "SU_LATN",
  SU_LATN_ID = "SU_LATN_ID",
  SV = "SV",
  SV_AX = "SV_AX",
  SV_FI = "SV_FI",
  SV_SE = "SV_SE",
  SW = "SW",
  SW_CD = "SW_CD",
  SW_KE = "SW_KE",
  SW_TZ = "SW_TZ",
  SW_UG = "SW_UG",
  TA = "TA",
  TA_IN = "TA_IN",
  TA_LK = "TA_LK",
  TA_MY = "TA_MY",
  TA_SG = "TA_SG",
  TE = "TE",
  TE_IN = "TE_IN",
  TEO = "TEO",
  TEO_KE = "TEO_KE",
  TEO_UG = "TEO_UG",
  TG = "TG",
  TG_TJ = "TG_TJ",
  TH = "TH",
  TH_TH = "TH_TH",
  TI = "TI",
  TI_ER = "TI_ER",
  TI_ET = "TI_ET",
  TK = "TK",
  TK_TM = "TK_TM",
  TO = "TO",
  TO_TO = "TO_TO",
  TR = "TR",
  TR_CY = "TR_CY",
  TR_TR = "TR_TR",
  TT = "TT",
  TT_RU = "TT_RU",
  TWQ = "TWQ",
  TWQ_NE = "TWQ_NE",
  TZM = "TZM",
  TZM_MA = "TZM_MA",
  UG = "UG",
  UG_CN = "UG_CN",
  UK = "UK",
  UK_UA = "UK_UA",
  UR = "UR",
  UR_IN = "UR_IN",
  UR_PK = "UR_PK",
  UZ = "UZ",
  UZ_ARAB = "UZ_ARAB",
  UZ_ARAB_AF = "UZ_ARAB_AF",
  UZ_CYRL = "UZ_CYRL",
  UZ_CYRL_UZ = "UZ_CYRL_UZ",
  UZ_LATN = "UZ_LATN",
  UZ_LATN_UZ = "UZ_LATN_UZ",
  VAI = "VAI",
  VAI_LATN = "VAI_LATN",
  VAI_LATN_LR = "VAI_LATN_LR",
  VAI_VAII = "VAI_VAII",
  VAI_VAII_LR = "VAI_VAII_LR",
  VI = "VI",
  VI_VN = "VI_VN",
  VO = "VO",
  VUN = "VUN",
  VUN_TZ = "VUN_TZ",
  WAE = "WAE",
  WAE_CH = "WAE_CH",
  WO = "WO",
  WO_SN = "WO_SN",
  XH = "XH",
  XH_ZA = "XH_ZA",
  XOG = "XOG",
  XOG_UG = "XOG_UG",
  YAV = "YAV",
  YAV_CM = "YAV_CM",
  YI = "YI",
  YO = "YO",
  YO_BJ = "YO_BJ",
  YO_NG = "YO_NG",
  YUE = "YUE",
  YUE_HANS = "YUE_HANS",
  YUE_HANS_CN = "YUE_HANS_CN",
  YUE_HANT = "YUE_HANT",
  YUE_HANT_HK = "YUE_HANT_HK",
  ZGH = "ZGH",
  ZGH_MA = "ZGH_MA",
  ZH = "ZH",
  ZH_HANS = "ZH_HANS",
  ZH_HANS_CN = "ZH_HANS_CN",
  ZH_HANS_HK = "ZH_HANS_HK",
  ZH_HANS_MO = "ZH_HANS_MO",
  ZH_HANS_SG = "ZH_HANS_SG",
  ZH_HANT = "ZH_HANT",
  ZH_HANT_HK = "ZH_HANT_HK",
  ZH_HANT_MO = "ZH_HANT_MO",
  ZH_HANT_TW = "ZH_HANT_TW",
  ZU = "ZU",
  ZU_ZA = "ZU_ZA",
}

/** An enumeration. */
export enum MeasurementUnitsEnum {
  CM = "CM",
  M = "M",
  KM = "KM",
  FT = "FT",
  YD = "YD",
  INCH = "INCH",
  SQ_CM = "SQ_CM",
  SQ_M = "SQ_M",
  SQ_KM = "SQ_KM",
  SQ_FT = "SQ_FT",
  SQ_YD = "SQ_YD",
  SQ_INCH = "SQ_INCH",
  CUBIC_MILLIMETER = "CUBIC_MILLIMETER",
  CUBIC_CENTIMETER = "CUBIC_CENTIMETER",
  CUBIC_DECIMETER = "CUBIC_DECIMETER",
  CUBIC_METER = "CUBIC_METER",
  LITER = "LITER",
  CUBIC_FOOT = "CUBIC_FOOT",
  CUBIC_INCH = "CUBIC_INCH",
  CUBIC_YARD = "CUBIC_YARD",
  QT = "QT",
  PINT = "PINT",
  FL_OZ = "FL_OZ",
  ACRE_IN = "ACRE_IN",
  ACRE_FT = "ACRE_FT",
  G = "G",
  LB = "LB",
  OZ = "OZ",
  KG = "KG",
  TONNE = "TONNE",
}

/** An enumeration. */
export enum MenuErrorCodeEnum {
  CANNOT_ASSIGN_NODE = "CANNOT_ASSIGN_NODE",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_MENU_ITEM = "INVALID_MENU_ITEM",
  NO_MENU_ITEM_PROVIDED = "NO_MENU_ITEM_PROVIDED",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  TOO_MANY_MENU_ITEMS = "TOO_MANY_MENU_ITEMS",
  UNIQUE = "UNIQUE",
}

export enum MenuItemsSortFieldEnum {
  /** Sort menu items by name. */
  NAME = "NAME",
}

export enum MenuSortFieldEnum {
  /** Sort menus by name. */
  NAME = "NAME",
  /** Sort menus by items count. */
  ITEMS_COUNT = "ITEMS_COUNT",
}

/** An enumeration. */
export enum MetadataErrorCodeEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  NOT_UPDATED = "NOT_UPDATED",
}

export enum NavigationTypeEnum {
  /** Main storefront navigation. */
  MAIN = "MAIN",
  /** Secondary storefront navigation. */
  SECONDARY = "SECONDARY",
}

export enum OrderActionEnum {
  /** Represents the capture action. */
  CAPTURE = "CAPTURE",
  /** Represents a mark-as-paid action. */
  MARK_AS_PAID = "MARK_AS_PAID",
  /** Represents a refund action. */
  REFUND = "REFUND",
  /** Represents a void action. */
  VOID = "VOID",
}

/** An enumeration. */
export enum OrderCreateFromCheckoutErrorCodeEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  NOT_FOUND = "NOT_FOUND",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
  INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
  VOUCHER_NOT_APPLICABLE = "VOUCHER_NOT_APPLICABLE",
  GIFT_CARD_NOT_APPLICABLE = "GIFT_CARD_NOT_APPLICABLE",
  TAX_ERROR = "TAX_ERROR",
  SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
  BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
  SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
  INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
  NO_LINES = "NO_LINES",
  EMAIL_NOT_SET = "EMAIL_NOT_SET",
  UNAVAILABLE_VARIANT_IN_CHANNEL = "UNAVAILABLE_VARIANT_IN_CHANNEL",
}

export enum OrderDirectionEnum {
  /** Specifies an ascending sort order. */
  ASC = "ASC",
  /** Specifies a descending sort order. */
  DESC = "DESC",
}

/** An enumeration. */
export enum OrderDiscountTypeEnum {
  VOUCHER = "VOUCHER",
  MANUAL = "MANUAL",
}

/** An enumeration. */
export enum OrderErrorCodeEnum {
  BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
  CANNOT_CANCEL_FULFILLMENT = "CANNOT_CANCEL_FULFILLMENT",
  CANNOT_CANCEL_ORDER = "CANNOT_CANCEL_ORDER",
  CANNOT_DELETE = "CANNOT_DELETE",
  CANNOT_DISCOUNT = "CANNOT_DISCOUNT",
  CANNOT_REFUND = "CANNOT_REFUND",
  CANNOT_FULFILL_UNPAID_ORDER = "CANNOT_FULFILL_UNPAID_ORDER",
  CAPTURE_INACTIVE_PAYMENT = "CAPTURE_INACTIVE_PAYMENT",
  GIFT_CARD_LINE = "GIFT_CARD_LINE",
  NOT_EDITABLE = "NOT_EDITABLE",
  FULFILL_ORDER_LINE = "FULFILL_ORDER_LINE",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
  PRODUCT_UNAVAILABLE_FOR_PURCHASE = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
  NOT_FOUND = "NOT_FOUND",
  ORDER_NO_SHIPPING_ADDRESS = "ORDER_NO_SHIPPING_ADDRESS",
  PAYMENT_ERROR = "PAYMENT_ERROR",
  PAYMENT_MISSING = "PAYMENT_MISSING",
  REQUIRED = "REQUIRED",
  SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
  SHIPPING_METHOD_REQUIRED = "SHIPPING_METHOD_REQUIRED",
  TAX_ERROR = "TAX_ERROR",
  UNIQUE = "UNIQUE",
  VOID_INACTIVE_PAYMENT = "VOID_INACTIVE_PAYMENT",
  ZERO_QUANTITY = "ZERO_QUANTITY",
  INVALID_QUANTITY = "INVALID_QUANTITY",
  INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  NOT_AVAILABLE_IN_CHANNEL = "NOT_AVAILABLE_IN_CHANNEL",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
}

/** An enumeration. */
export enum OrderEventsEmailsEnum {
  PAYMENT_CONFIRMATION = "PAYMENT_CONFIRMATION",
  CONFIRMED = "CONFIRMED",
  SHIPPING_CONFIRMATION = "SHIPPING_CONFIRMATION",
  TRACKING_UPDATED = "TRACKING_UPDATED",
  ORDER_CONFIRMATION = "ORDER_CONFIRMATION",
  ORDER_CANCEL = "ORDER_CANCEL",
  ORDER_REFUND = "ORDER_REFUND",
  FULFILLMENT_CONFIRMATION = "FULFILLMENT_CONFIRMATION",
  DIGITAL_LINKS = "DIGITAL_LINKS",
}

/** An enumeration. */
export enum OrderEventsEnum {
  DRAFT_CREATED = "DRAFT_CREATED",
  DRAFT_CREATED_FROM_REPLACE = "DRAFT_CREATED_FROM_REPLACE",
  ADDED_PRODUCTS = "ADDED_PRODUCTS",
  REMOVED_PRODUCTS = "REMOVED_PRODUCTS",
  PLACED = "PLACED",
  PLACED_FROM_DRAFT = "PLACED_FROM_DRAFT",
  OVERSOLD_ITEMS = "OVERSOLD_ITEMS",
  CANCELED = "CANCELED",
  ORDER_MARKED_AS_PAID = "ORDER_MARKED_AS_PAID",
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  ORDER_REPLACEMENT_CREATED = "ORDER_REPLACEMENT_CREATED",
  ORDER_DISCOUNT_ADDED = "ORDER_DISCOUNT_ADDED",
  ORDER_DISCOUNT_AUTOMATICALLY_UPDATED = "ORDER_DISCOUNT_AUTOMATICALLY_UPDATED",
  ORDER_DISCOUNT_UPDATED = "ORDER_DISCOUNT_UPDATED",
  ORDER_DISCOUNT_DELETED = "ORDER_DISCOUNT_DELETED",
  ORDER_LINE_DISCOUNT_UPDATED = "ORDER_LINE_DISCOUNT_UPDATED",
  ORDER_LINE_DISCOUNT_REMOVED = "ORDER_LINE_DISCOUNT_REMOVED",
  ORDER_LINE_PRODUCT_DELETED = "ORDER_LINE_PRODUCT_DELETED",
  ORDER_LINE_VARIANT_DELETED = "ORDER_LINE_VARIANT_DELETED",
  UPDATED_ADDRESS = "UPDATED_ADDRESS",
  EMAIL_SENT = "EMAIL_SENT",
  CONFIRMED = "CONFIRMED",
  PAYMENT_AUTHORIZED = "PAYMENT_AUTHORIZED",
  PAYMENT_CAPTURED = "PAYMENT_CAPTURED",
  EXTERNAL_SERVICE_NOTIFICATION = "EXTERNAL_SERVICE_NOTIFICATION",
  PAYMENT_REFUNDED = "PAYMENT_REFUNDED",
  PAYMENT_VOIDED = "PAYMENT_VOIDED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  INVOICE_GENERATED = "INVOICE_GENERATED",
  INVOICE_UPDATED = "INVOICE_UPDATED",
  INVOICE_SENT = "INVOICE_SENT",
  FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
  FULFILLMENT_RESTOCKED_ITEMS = "FULFILLMENT_RESTOCKED_ITEMS",
  FULFILLMENT_FULFILLED_ITEMS = "FULFILLMENT_FULFILLED_ITEMS",
  FULFILLMENT_REFUNDED = "FULFILLMENT_REFUNDED",
  FULFILLMENT_RETURNED = "FULFILLMENT_RETURNED",
  FULFILLMENT_REPLACED = "FULFILLMENT_REPLACED",
  FULFILLMENT_AWAITS_APPROVAL = "FULFILLMENT_AWAITS_APPROVAL",
  TRACKING_UPDATED = "TRACKING_UPDATED",
  NOTE_ADDED = "NOTE_ADDED",
  OTHER = "OTHER",
}

/** An enumeration. */
export enum OrderOriginEnum {
  CHECKOUT = "CHECKOUT",
  DRAFT = "DRAFT",
  REISSUE = "REISSUE",
}

/** An enumeration. */
export enum OrderSettingsErrorCodeEnum {
  INVALID = "INVALID",
}

export enum OrderSortFieldEnum {
  /** Sort orders by number. */
  NUMBER = "NUMBER",
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CREATION_DATE = "CREATION_DATE",
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  CREATED_AT = "CREATED_AT",
  /** Sort orders by last modified at. */
  LAST_MODIFIED_AT = "LAST_MODIFIED_AT",
  /** Sort orders by customer. */
  CUSTOMER = "CUSTOMER",
  /** Sort orders by payment. */
  PAYMENT = "PAYMENT",
  /** Sort orders by fulfillment status. */
  FULFILLMENT_STATUS = "FULFILLMENT_STATUS",
}

/** An enumeration. */
export enum OrderStatusEnum {
  DRAFT = "DRAFT",
  UNCONFIRMED = "UNCONFIRMED",
  UNFULFILLED = "UNFULFILLED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  PARTIALLY_RETURNED = "PARTIALLY_RETURNED",
  RETURNED = "RETURNED",
  FULFILLED = "FULFILLED",
  CANCELED = "CANCELED",
}

export enum OrderStatusFilterEnum {
  READY_TO_FULFILL = "READY_TO_FULFILL",
  READY_TO_CAPTURE = "READY_TO_CAPTURE",
  UNFULFILLED = "UNFULFILLED",
  UNCONFIRMED = "UNCONFIRMED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  FULFILLED = "FULFILLED",
  CANCELED = "CANCELED",
}

/** An enumeration. */
export enum PageErrorCodeEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  ATTRIBUTE_ALREADY_ASSIGNED = "ATTRIBUTE_ALREADY_ASSIGNED",
}

export enum PageSortFieldEnum {
  /** Sort pages by title. */
  TITLE = "TITLE",
  /** Sort pages by slug. */
  SLUG = "SLUG",
  /** Sort pages by visibility. */
  VISIBILITY = "VISIBILITY",
  /** Sort pages by creation date. */
  CREATION_DATE = "CREATION_DATE",
  /** Sort pages by publication date. */
  PUBLICATION_DATE = "PUBLICATION_DATE",
}

export enum PageTypeSortFieldEnum {
  /** Sort page types by name. */
  NAME = "NAME",
  /** Sort page types by slug. */
  SLUG = "SLUG",
}

/** An enumeration. */
export enum PaymentChargeStatusEnum {
  NOT_CHARGED = "NOT_CHARGED",
  PENDING = "PENDING",
  PARTIALLY_CHARGED = "PARTIALLY_CHARGED",
  FULLY_CHARGED = "FULLY_CHARGED",
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
  FULLY_REFUNDED = "FULLY_REFUNDED",
  REFUSED = "REFUSED",
  CANCELLED = "CANCELLED",
}

/** An enumeration. */
export enum PaymentErrorCodeEnum {
  BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  PARTIAL_PAYMENT_NOT_ALLOWED = "PARTIAL_PAYMENT_NOT_ALLOWED",
  SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
  INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
  SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
  PAYMENT_ERROR = "PAYMENT_ERROR",
  NOT_SUPPORTED_GATEWAY = "NOT_SUPPORTED_GATEWAY",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
  BALANCE_CHECK_ERROR = "BALANCE_CHECK_ERROR",
  CHECKOUT_EMAIL_NOT_SET = "CHECKOUT_EMAIL_NOT_SET",
  UNAVAILABLE_VARIANT_IN_CHANNEL = "UNAVAILABLE_VARIANT_IN_CHANNEL",
  NO_CHECKOUT_LINES = "NO_CHECKOUT_LINES",
}

/** An enumeration. */
export enum PermissionEnum {
  MANAGE_USERS = "MANAGE_USERS",
  MANAGE_STAFF = "MANAGE_STAFF",
  IMPERSONATE_USER = "IMPERSONATE_USER",
  MANAGE_APPS = "MANAGE_APPS",
  MANAGE_CHANNELS = "MANAGE_CHANNELS",
  MANAGE_DISCOUNTS = "MANAGE_DISCOUNTS",
  MANAGE_PLUGINS = "MANAGE_PLUGINS",
  MANAGE_GIFT_CARD = "MANAGE_GIFT_CARD",
  MANAGE_MENUS = "MANAGE_MENUS",
  MANAGE_ORDERS = "MANAGE_ORDERS",
  MANAGE_PAGES = "MANAGE_PAGES",
  MANAGE_PAGE_TYPES_AND_ATTRIBUTES = "MANAGE_PAGE_TYPES_AND_ATTRIBUTES",
  HANDLE_PAYMENTS = "HANDLE_PAYMENTS",
  MANAGE_PRODUCTS = "MANAGE_PRODUCTS",
  MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES = "MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES",
  MANAGE_SHIPPING = "MANAGE_SHIPPING",
  MANAGE_SETTINGS = "MANAGE_SETTINGS",
  MANAGE_TRANSLATIONS = "MANAGE_TRANSLATIONS",
  MANAGE_CHECKOUTS = "MANAGE_CHECKOUTS",
  HANDLE_CHECKOUTS = "HANDLE_CHECKOUTS",
}

/** An enumeration. */
export enum PermissionGroupErrorCodeEnum {
  ASSIGN_NON_STAFF_MEMBER = "ASSIGN_NON_STAFF_MEMBER",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  CANNOT_REMOVE_FROM_LAST_GROUP = "CANNOT_REMOVE_FROM_LAST_GROUP",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PermissionGroupSortFieldEnum {
  /** Sort permission group accounts by name. */
  NAME = "NAME",
}

export enum PluginConfigurationTypeEnum {
  PER_CHANNEL = "PER_CHANNEL",
  GLOBAL = "GLOBAL",
}

/** An enumeration. */
export enum PluginErrorCodEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  PLUGIN_MISCONFIGURED = "PLUGIN_MISCONFIGURED",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PluginSortFieldEnum {
  NAME = "NAME",
  IS_ACTIVE = "IS_ACTIVE",
}

/** An enumeration. */
export enum PostalCodeRuleInclusionTypeEnum {
  INCLUDE = "INCLUDE",
  EXCLUDE = "EXCLUDE",
}

export enum ProductAttributeTypeEnum {
  PRODUCT = "PRODUCT",
  VARIANT = "VARIANT",
}

/** An enumeration. */
export enum ProductErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  ATTRIBUTE_ALREADY_ASSIGNED = "ATTRIBUTE_ALREADY_ASSIGNED",
  ATTRIBUTE_CANNOT_BE_ASSIGNED = "ATTRIBUTE_CANNOT_BE_ASSIGNED",
  ATTRIBUTE_VARIANTS_DISABLED = "ATTRIBUTE_VARIANTS_DISABLED",
  MEDIA_ALREADY_ASSIGNED = "MEDIA_ALREADY_ASSIGNED",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  PRODUCT_WITHOUT_CATEGORY = "PRODUCT_WITHOUT_CATEGORY",
  NOT_PRODUCTS_IMAGE = "NOT_PRODUCTS_IMAGE",
  NOT_PRODUCTS_VARIANT = "NOT_PRODUCTS_VARIANT",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  VARIANT_NO_DIGITAL_CONTENT = "VARIANT_NO_DIGITAL_CONTENT",
  CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
  PRODUCT_NOT_ASSIGNED_TO_CHANNEL = "PRODUCT_NOT_ASSIGNED_TO_CHANNEL",
  UNSUPPORTED_MEDIA_PROVIDER = "UNSUPPORTED_MEDIA_PROVIDER",
  PREORDER_VARIANT_CANNOT_BE_DEACTIVATED = "PREORDER_VARIANT_CANNOT_BE_DEACTIVATED",
}

export enum ProductFieldEnum {
  NAME = "NAME",
  DESCRIPTION = "DESCRIPTION",
  PRODUCT_TYPE = "PRODUCT_TYPE",
  CATEGORY = "CATEGORY",
  PRODUCT_WEIGHT = "PRODUCT_WEIGHT",
  COLLECTIONS = "COLLECTIONS",
  CHARGE_TAXES = "CHARGE_TAXES",
  PRODUCT_MEDIA = "PRODUCT_MEDIA",
  VARIANT_ID = "VARIANT_ID",
  VARIANT_SKU = "VARIANT_SKU",
  VARIANT_WEIGHT = "VARIANT_WEIGHT",
  VARIANT_MEDIA = "VARIANT_MEDIA",
}

/** An enumeration. */
export enum ProductMediaTypeEnum {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export enum ProductOrderFieldEnum {
  /** Sort products by name. */
  NAME = "NAME",
  /** Sort products by name. */
  RANK = "RANK",
  /** Sort products by price. */
  PRICE = "PRICE",
  /** Sort products by a minimal price of a product's variant. */
  MINIMAL_PRICE = "MINIMAL_PRICE",
  /** Sort products by update date. */
  LAST_MODIFIED = "LAST_MODIFIED",
  /** Sort products by update date. */
  DATE = "DATE",
  /** Sort products by type. */
  TYPE = "TYPE",
  /** Sort products by publication status. */
  PUBLISHED = "PUBLISHED",
  /** Sort products by publication date. */
  PUBLICATION_DATE = "PUBLICATION_DATE",
  /** Sort products by publication date. */
  PUBLISHED_AT = "PUBLISHED_AT",
  /** Sort products by update date. */
  LAST_MODIFIED_AT = "LAST_MODIFIED_AT",
  /** Sort products by collection. Note: This option is available only for the `Collection.products` query. */
  COLLECTION = "COLLECTION",
  /** Sort products by rating. */
  RATING = "RATING",
}

export enum ProductTypeConfigurableEnum {
  CONFIGURABLE = "CONFIGURABLE",
  SIMPLE = "SIMPLE",
}

export enum ProductTypeEnum {
  DIGITAL = "DIGITAL",
  SHIPPABLE = "SHIPPABLE",
}

/** An enumeration. */
export enum ProductTypeKindEnum {
  NORMAL = "NORMAL",
  GIFT_CARD = "GIFT_CARD",
}

export enum ProductTypeSortFieldEnum {
  /** Sort products by name. */
  NAME = "NAME",
  /** Sort products by type. */
  DIGITAL = "DIGITAL",
  /** Sort products by shipping. */
  SHIPPING_REQUIRED = "SHIPPING_REQUIRED",
}

export enum ProductVariantSortFieldEnum {
  /** Sort products variants by last modified at. */
  LAST_MODIFIED_AT = "LAST_MODIFIED_AT",
}

export enum ReportingPeriodEnum {
  TODAY = "TODAY",
  THIS_MONTH = "THIS_MONTH",
}

export enum SaleSortFieldEnum {
  /** Sort sales by name. */
  NAME = "NAME",
  /** Sort sales by start date. */
  START_DATE = "START_DATE",
  /** Sort sales by end date. */
  END_DATE = "END_DATE",
  /** Sort sales by value. */
  VALUE = "VALUE",
  /** Sort sales by type. */
  TYPE = "TYPE",
  /** Sort sales by created at. */
  CREATED_AT = "CREATED_AT",
  /** Sort sales by last modified at. */
  LAST_MODIFIED_AT = "LAST_MODIFIED_AT",
}

export enum SaleTypeEnum {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
}

/** An enumeration. */
export enum ShippingErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  MAX_LESS_THAN_MIN = "MAX_LESS_THAN_MIN",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
}

/** An enumeration. */
export enum ShippingMethodTypeEnum {
  PRICE = "PRICE",
  WEIGHT = "WEIGHT",
}

/** An enumeration. */
export enum ShopErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  CANNOT_FETCH_TAX_RATES = "CANNOT_FETCH_TAX_RATES",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum StaffMemberStatusEnum {
  /** User account has been activated. */
  ACTIVE = "ACTIVE",
  /** User account has not been activated yet. */
  DEACTIVATED = "DEACTIVATED",
}

export enum StockAvailabilityEnum {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

/** An enumeration. */
export enum StockErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/** Enum representing the type of a payment storage in a gateway. */
export enum StorePaymentMethodEnum {
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  ON_SESSION = "ON_SESSION",
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  OFF_SESSION = "OFF_SESSION",
  /** Storage is disabled. The payment is not stored. */
  NONE = "NONE",
}

/** An enumeration. */
export enum TimePeriodTypeEnum {
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

/** An enumeration. */
export enum TransactionKindEnum {
  EXTERNAL = "EXTERNAL",
  AUTH = "AUTH",
  PENDING = "PENDING",
  ACTION_TO_CONFIRM = "ACTION_TO_CONFIRM",
  REFUND = "REFUND",
  REFUND_ONGOING = "REFUND_ONGOING",
  CAPTURE = "CAPTURE",
  VOID = "VOID",
  CONFIRM = "CONFIRM",
  CANCEL = "CANCEL",
}

export enum TranslatableKindsEnum {
  ATTRIBUTE = "ATTRIBUTE",
  ATTRIBUTE_VALUE = "ATTRIBUTE_VALUE",
  CATEGORY = "CATEGORY",
  COLLECTION = "COLLECTION",
  MENU_ITEM = "MENU_ITEM",
  PAGE = "PAGE",
  PRODUCT = "PRODUCT",
  SALE = "SALE",
  SHIPPING_METHOD = "SHIPPING_METHOD",
  VARIANT = "VARIANT",
  VOUCHER = "VOUCHER",
}

/** An enumeration. */
export enum TranslationErrorCodeEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
}

/** An enumeration. */
export enum UploadErrorCodeEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
}

export enum UserSortFieldEnum {
  /** Sort users by first name. */
  FIRST_NAME = "FIRST_NAME",
  /** Sort users by last name. */
  LAST_NAME = "LAST_NAME",
  /** Sort users by email. */
  EMAIL = "EMAIL",
  /** Sort users by order count. */
  ORDER_COUNT = "ORDER_COUNT",
  /** Sort users by created at. */
  CREATED_AT = "CREATED_AT",
  /** Sort users by last modified at. */
  LAST_MODIFIED_AT = "LAST_MODIFIED_AT",
}

export enum VariantAttributeScopeEnum {
  ALL = "ALL",
  VARIANT_SELECTION = "VARIANT_SELECTION",
  NOT_VARIANT_SELECTION = "NOT_VARIANT_SELECTION",
}

/** An enumeration. */
export enum VolumeUnitsEnum {
  CUBIC_MILLIMETER = "CUBIC_MILLIMETER",
  CUBIC_CENTIMETER = "CUBIC_CENTIMETER",
  CUBIC_DECIMETER = "CUBIC_DECIMETER",
  CUBIC_METER = "CUBIC_METER",
  LITER = "LITER",
  CUBIC_FOOT = "CUBIC_FOOT",
  CUBIC_INCH = "CUBIC_INCH",
  CUBIC_YARD = "CUBIC_YARD",
  QT = "QT",
  PINT = "PINT",
  FL_OZ = "FL_OZ",
  ACRE_IN = "ACRE_IN",
  ACRE_FT = "ACRE_FT",
}

export enum VoucherDiscountTypeEnum {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
  SHIPPING = "SHIPPING",
}

export enum VoucherSortFieldEnum {
  /** Sort vouchers by code. */
  CODE = "CODE",
  /** Sort vouchers by start date. */
  START_DATE = "START_DATE",
  /** Sort vouchers by end date. */
  END_DATE = "END_DATE",
  /** Sort vouchers by value. */
  VALUE = "VALUE",
  /** Sort vouchers by type. */
  TYPE = "TYPE",
  /** Sort vouchers by usage limit. */
  USAGE_LIMIT = "USAGE_LIMIT",
  /** Sort vouchers by minimum spent amount. */
  MINIMUM_SPENT_AMOUNT = "MINIMUM_SPENT_AMOUNT",
}

export enum VoucherTypeEnum {
  SHIPPING = "SHIPPING",
  ENTIRE_ORDER = "ENTIRE_ORDER",
  SPECIFIC_PRODUCT = "SPECIFIC_PRODUCT",
}

/** An enumeration. */
export enum WarehouseClickAndCollectOptionEnum {
  DISABLED = "DISABLED",
  LOCAL = "LOCAL",
  ALL = "ALL",
}

/** An enumeration. */
export enum WarehouseErrorCodeEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum WarehouseSortFieldEnum {
  /** Sort warehouses by name. */
  NAME = "NAME",
}

/** An enumeration. */
export enum WebhookErrorCodeEnum {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeAsyncEnum {
  /** All the events. */
  ANY_EVENTS = "ANY_EVENTS",
  /** A new category created. */
  CATEGORY_CREATED = "CATEGORY_CREATED",
  /** A category is updated. */
  CATEGORY_UPDATED = "CATEGORY_UPDATED",
  /** A category is deleted. */
  CATEGORY_DELETED = "CATEGORY_DELETED",
  /** A new order is placed. */
  ORDER_CREATED = "ORDER_CREATED",
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  ORDER_CONFIRMED = "ORDER_CONFIRMED",
  /** Payment is made and an order is fully paid. */
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  ORDER_UPDATED = "ORDER_UPDATED",
  /** An order is cancelled. */
  ORDER_CANCELLED = "ORDER_CANCELLED",
  /** An order is fulfilled. */
  ORDER_FULFILLED = "ORDER_FULFILLED",
  DRAFT_ORDER_CREATED = "DRAFT_ORDER_CREATED",
  DRAFT_ORDER_UPDATED = "DRAFT_ORDER_UPDATED",
  DRAFT_ORDER_DELETED = "DRAFT_ORDER_DELETED",
  SALE_CREATED = "SALE_CREATED",
  SALE_UPDATED = "SALE_UPDATED",
  SALE_DELETED = "SALE_DELETED",
  /** An invoice for order requested. */
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  /** An invoice is deleted. */
  INVOICE_DELETED = "INVOICE_DELETED",
  /** Invoice has been sent. */
  INVOICE_SENT = "INVOICE_SENT",
  /** A new customer account is created. */
  CUSTOMER_CREATED = "CUSTOMER_CREATED",
  /** A customer account is updated. */
  CUSTOMER_UPDATED = "CUSTOMER_UPDATED",
  /** A new collection is created. */
  COLLECTION_CREATED = "COLLECTION_CREATED",
  /** A collection is updated. */
  COLLECTION_UPDATED = "COLLECTION_UPDATED",
  /** A collection is deleted. */
  COLLECTION_DELETED = "COLLECTION_DELETED",
  /** A new product is created. */
  PRODUCT_CREATED = "PRODUCT_CREATED",
  /** A product is updated. */
  PRODUCT_UPDATED = "PRODUCT_UPDATED",
  /** A product is deleted. */
  PRODUCT_DELETED = "PRODUCT_DELETED",
  /** A new product variant is created. */
  PRODUCT_VARIANT_CREATED = "PRODUCT_VARIANT_CREATED",
  /** A product variant is updated. */
  PRODUCT_VARIANT_UPDATED = "PRODUCT_VARIANT_UPDATED",
  /** A product variant is deleted. */
  PRODUCT_VARIANT_DELETED = "PRODUCT_VARIANT_DELETED",
  PRODUCT_VARIANT_OUT_OF_STOCK = "PRODUCT_VARIANT_OUT_OF_STOCK",
  PRODUCT_VARIANT_BACK_IN_STOCK = "PRODUCT_VARIANT_BACK_IN_STOCK",
  /** A new checkout is created. */
  CHECKOUT_CREATED = "CHECKOUT_CREATED",
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
  /** A new fulfillment is created. */
  FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
  /** A fulfillment is cancelled. */
  FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
  /** User notification triggered. */
  NOTIFY_USER = "NOTIFY_USER",
  /** A new page is created. */
  PAGE_CREATED = "PAGE_CREATED",
  /** A page is updated. */
  PAGE_UPDATED = "PAGE_UPDATED",
  /** A page is deleted. */
  PAGE_DELETED = "PAGE_DELETED",
  TRANSLATION_CREATED = "TRANSLATION_CREATED",
  TRANSLATION_UPDATED = "TRANSLATION_UPDATED",
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeEnum {
  /** All the events. */
  ANY_EVENTS = "ANY_EVENTS",
  /** A new category created. */
  CATEGORY_CREATED = "CATEGORY_CREATED",
  /** A category is updated. */
  CATEGORY_UPDATED = "CATEGORY_UPDATED",
  /** A category is deleted. */
  CATEGORY_DELETED = "CATEGORY_DELETED",
  /** A new order is placed. */
  ORDER_CREATED = "ORDER_CREATED",
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  ORDER_CONFIRMED = "ORDER_CONFIRMED",
  /** Payment is made and an order is fully paid. */
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  ORDER_UPDATED = "ORDER_UPDATED",
  /** An order is cancelled. */
  ORDER_CANCELLED = "ORDER_CANCELLED",
  /** An order is fulfilled. */
  ORDER_FULFILLED = "ORDER_FULFILLED",
  DRAFT_ORDER_CREATED = "DRAFT_ORDER_CREATED",
  DRAFT_ORDER_UPDATED = "DRAFT_ORDER_UPDATED",
  DRAFT_ORDER_DELETED = "DRAFT_ORDER_DELETED",
  SALE_CREATED = "SALE_CREATED",
  SALE_UPDATED = "SALE_UPDATED",
  SALE_DELETED = "SALE_DELETED",
  /** An invoice for order requested. */
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  /** An invoice is deleted. */
  INVOICE_DELETED = "INVOICE_DELETED",
  /** Invoice has been sent. */
  INVOICE_SENT = "INVOICE_SENT",
  /** A new customer account is created. */
  CUSTOMER_CREATED = "CUSTOMER_CREATED",
  /** A customer account is updated. */
  CUSTOMER_UPDATED = "CUSTOMER_UPDATED",
  /** A new collection is created. */
  COLLECTION_CREATED = "COLLECTION_CREATED",
  /** A collection is updated. */
  COLLECTION_UPDATED = "COLLECTION_UPDATED",
  /** A collection is deleted. */
  COLLECTION_DELETED = "COLLECTION_DELETED",
  /** A new product is created. */
  PRODUCT_CREATED = "PRODUCT_CREATED",
  /** A product is updated. */
  PRODUCT_UPDATED = "PRODUCT_UPDATED",
  /** A product is deleted. */
  PRODUCT_DELETED = "PRODUCT_DELETED",
  /** A new product variant is created. */
  PRODUCT_VARIANT_CREATED = "PRODUCT_VARIANT_CREATED",
  /** A product variant is updated. */
  PRODUCT_VARIANT_UPDATED = "PRODUCT_VARIANT_UPDATED",
  /** A product variant is deleted. */
  PRODUCT_VARIANT_DELETED = "PRODUCT_VARIANT_DELETED",
  PRODUCT_VARIANT_OUT_OF_STOCK = "PRODUCT_VARIANT_OUT_OF_STOCK",
  PRODUCT_VARIANT_BACK_IN_STOCK = "PRODUCT_VARIANT_BACK_IN_STOCK",
  /** A new checkout is created. */
  CHECKOUT_CREATED = "CHECKOUT_CREATED",
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
  /** A new fulfillment is created. */
  FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
  /** A fulfillment is cancelled. */
  FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
  /** User notification triggered. */
  NOTIFY_USER = "NOTIFY_USER",
  /** A new page is created. */
  PAGE_CREATED = "PAGE_CREATED",
  /** A page is updated. */
  PAGE_UPDATED = "PAGE_UPDATED",
  /** A page is deleted. */
  PAGE_DELETED = "PAGE_DELETED",
  TRANSLATION_CREATED = "TRANSLATION_CREATED",
  TRANSLATION_UPDATED = "TRANSLATION_UPDATED",
  PAYMENT_AUTHORIZE = "PAYMENT_AUTHORIZE",
  PAYMENT_CAPTURE = "PAYMENT_CAPTURE",
  PAYMENT_CONFIRM = "PAYMENT_CONFIRM",
  PAYMENT_LIST_GATEWAYS = "PAYMENT_LIST_GATEWAYS",
  PAYMENT_PROCESS = "PAYMENT_PROCESS",
  PAYMENT_REFUND = "PAYMENT_REFUND",
  PAYMENT_VOID = "PAYMENT_VOID",
  SHIPPING_LIST_METHODS_FOR_CHECKOUT = "SHIPPING_LIST_METHODS_FOR_CHECKOUT",
  ORDER_FILTER_SHIPPING_METHODS = "ORDER_FILTER_SHIPPING_METHODS",
  CHECKOUT_FILTER_SHIPPING_METHODS = "CHECKOUT_FILTER_SHIPPING_METHODS",
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeSyncEnum {
  PAYMENT_AUTHORIZE = "PAYMENT_AUTHORIZE",
  PAYMENT_CAPTURE = "PAYMENT_CAPTURE",
  PAYMENT_CONFIRM = "PAYMENT_CONFIRM",
  PAYMENT_LIST_GATEWAYS = "PAYMENT_LIST_GATEWAYS",
  PAYMENT_PROCESS = "PAYMENT_PROCESS",
  PAYMENT_REFUND = "PAYMENT_REFUND",
  PAYMENT_VOID = "PAYMENT_VOID",
  SHIPPING_LIST_METHODS_FOR_CHECKOUT = "SHIPPING_LIST_METHODS_FOR_CHECKOUT",
  ORDER_FILTER_SHIPPING_METHODS = "ORDER_FILTER_SHIPPING_METHODS",
  CHECKOUT_FILTER_SHIPPING_METHODS = "CHECKOUT_FILTER_SHIPPING_METHODS",
}

/** An enumeration. */
export enum WebhookSampleEventTypeEnum {
  CATEGORY_CREATED = "CATEGORY_CREATED",
  CATEGORY_UPDATED = "CATEGORY_UPDATED",
  CATEGORY_DELETED = "CATEGORY_DELETED",
  ORDER_CREATED = "ORDER_CREATED",
  ORDER_CONFIRMED = "ORDER_CONFIRMED",
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  ORDER_UPDATED = "ORDER_UPDATED",
  ORDER_CANCELLED = "ORDER_CANCELLED",
  ORDER_FULFILLED = "ORDER_FULFILLED",
  DRAFT_ORDER_CREATED = "DRAFT_ORDER_CREATED",
  DRAFT_ORDER_UPDATED = "DRAFT_ORDER_UPDATED",
  DRAFT_ORDER_DELETED = "DRAFT_ORDER_DELETED",
  SALE_CREATED = "SALE_CREATED",
  SALE_UPDATED = "SALE_UPDATED",
  SALE_DELETED = "SALE_DELETED",
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  INVOICE_DELETED = "INVOICE_DELETED",
  INVOICE_SENT = "INVOICE_SENT",
  CUSTOMER_CREATED = "CUSTOMER_CREATED",
  CUSTOMER_UPDATED = "CUSTOMER_UPDATED",
  COLLECTION_CREATED = "COLLECTION_CREATED",
  COLLECTION_UPDATED = "COLLECTION_UPDATED",
  COLLECTION_DELETED = "COLLECTION_DELETED",
  PRODUCT_CREATED = "PRODUCT_CREATED",
  PRODUCT_UPDATED = "PRODUCT_UPDATED",
  PRODUCT_DELETED = "PRODUCT_DELETED",
  PRODUCT_VARIANT_CREATED = "PRODUCT_VARIANT_CREATED",
  PRODUCT_VARIANT_UPDATED = "PRODUCT_VARIANT_UPDATED",
  PRODUCT_VARIANT_DELETED = "PRODUCT_VARIANT_DELETED",
  PRODUCT_VARIANT_OUT_OF_STOCK = "PRODUCT_VARIANT_OUT_OF_STOCK",
  PRODUCT_VARIANT_BACK_IN_STOCK = "PRODUCT_VARIANT_BACK_IN_STOCK",
  CHECKOUT_CREATED = "CHECKOUT_CREATED",
  CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
  FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
  FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
  NOTIFY_USER = "NOTIFY_USER",
  PAGE_CREATED = "PAGE_CREATED",
  PAGE_UPDATED = "PAGE_UPDATED",
  PAGE_DELETED = "PAGE_DELETED",
  TRANSLATION_CREATED = "TRANSLATION_CREATED",
  TRANSLATION_UPDATED = "TRANSLATION_UPDATED",
}

/** An enumeration. */
export enum WeightUnitsEnum {
  G = "G",
  LB = "LB",
  OZ = "OZ",
  KG = "KG",
  TONNE = "TONNE",
}
