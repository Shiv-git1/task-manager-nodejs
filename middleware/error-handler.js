const { CustomAPIError } = require('../errors/custom-error')

// 1. Define error-handling middleware functions in the same way as other middleware
// functions, except error-handling functions have four arguments instead of three:
// (err, req, res, next).
// 2. You define error-handling middleware last, after other app.use() and routes calls.

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  //   console.log('Controller', err)
  //   return res.status(500).json({ msg: err })
  // Can also provide custom message for error
  return res
    .status(500)
    .json({ msg: 'Something went wrong. Please try again later.', err })
}

module.exports = errorHandlerMiddleware
