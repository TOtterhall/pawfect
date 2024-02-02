const errorHandler = (error, req, res, next) => {
  console.error(req.method, req.path, error);
  if (res.writableEnded) {
    return console.error("Du har fått respons fastän det uppstod problem...");
  }

  //Mongose validation error
  if (error instanceof MongoServerError.StrictModeError) {
    return res.status(400).json(error.message);
  }

  if (error instanceof MongoServerError.ValidationError) {
    return res.status(400).json(error.message);
  }

  //Error Mongose server
  if (error instanceof MongoServerError.MongoServerError) {
    return res.status(400).json(error.message);
  }

  //Error HTTP
  if (error instanceof HttpError) {
    return res.status(error.status).json(error.message);
  }

  //Eror EXPRESS or myown
  if (error instanceof Error) {
    let status = error.status || error.statusCode || 500;
    return res.status(status).json(error.message);
  }

  //Error UNKNOWN

  return res.status(500).json("Oklart -> serverfel!");
};

//ERROR UNKKNOWN
class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = { errorHandler, HttpError };
