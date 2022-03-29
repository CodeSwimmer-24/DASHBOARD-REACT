// @flow

export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

function captureError(errorResponse: any): ?any {
  const {
    response: { status, statusText },
  } = errorResponse;
  if (statusText) throw new HttpError(status, statusText);
  throw new Error(errorResponse);
}

export default captureError;
