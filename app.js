const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()
const cors = require('cors')

const app = express()

// middlewares
app.use(express.static('./public')) //serving frontend static files
app.use(express.json())
app.use(cors())

// routes

// app.get('/hello', (req, res) => {
//   res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get("/api/v1/tasks")          - get all the tasks
// app.post("/api/v1/tasks")         - create a new task
// app.get("/api/v1/tasks/:id")      - get a single task
// app.patch("/api/v1/tasks/:id")    - update task
// app.delete("/api/v1/tasks/:id")   - delete task

const PORT = process.env.PORT || 5000
// IN CLI use (PORT=6000 node app.js), to run app in port 6000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`DB connected and Server listening on PORT ${PORT}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

// Starting the server
start()
