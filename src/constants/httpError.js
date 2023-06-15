export class HttpError extends Error {
  status;
  message;

  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

export class BadRequestError extends HttpError {
  constructor(message) {
    super(400, message);
  }
}

export class NotFoundError extends HttpError {
  constructor(message) {
    super(404, message);
  }
}

export class InternetSeverError extends HttpError {
  constructor(message) {
    super(500, message);
  }
}
