export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
  }
  
  export enum SuccessMessage {
    USER_REGISTERED = 'User registered successfully',
    LOGIN_SUCCESS = 'User logged in successfully',
  }
  
  export enum ErrorMessage {
    USER_ALREADY_EXIST = "User already exist",
    LOGIN_FAILURE = "Invalid email or password",
    USER_NOT_FOUND = "Invalid email or password",
  }
  