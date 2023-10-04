const mongoose = require('mongoose')

// const connectionString = 'mongodb://localhost:27017'

const deprecationWarningOptions = {
  dbName: '03-Task-Manager',
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}

// If using V6 of MongoDB, no need to pass deprecation warning options
const connectDB = (url) => {
  return mongoose.connect(url, deprecationWarningOptions)
}

// mongoose
//   .connect(connectionString, deprecationWarningOptions, DB_OPTIONS)
//   .then(() => console.log('CONNECTED TO THE DB...'))
//   .catch((err) => console.log('MongoDB Connection Error', err))

module.exports = connectDB
