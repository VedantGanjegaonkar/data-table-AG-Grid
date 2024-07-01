const ERROR_MSG = {
    NOT_FOUND: (entity: string) => `${entity} not found!!`,
    ALREADY_EXIST: (entity: string) => `${entity} already exist!!`,
    INVALID_PASSWORD: "Password Invalid!!",
    NAME_TAKEN: (entity: string) => `${entity} is not available. Try different name.`,
    FORBIDDEN:"You donot have this right!!",
    REVOKED:"Token revoked!!",
    UNAUTHORIZED:"Unauthorized User!!"
};
 
const SUCCESS_MSG = {
    DELETE: (entity: string) => `${entity} deleted successfully!!`,
    LOGOUT:"Logout successful"
}

const STATUS_CODES={
    "OK":200,
    "CREATED":201,
    "BAD_REQUEST":400,
    "UNAUTHORIZED":401,
    "FORBIDDEN":403,
    "NOT_FOUND":404,
    "INTERNAL_SERVER_ERROR":500

}

export {ERROR_MSG,SUCCESS_MSG,STATUS_CODES}
 