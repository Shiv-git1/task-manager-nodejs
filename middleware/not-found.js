const notFound = (req, res) =>
  res.status(404).send('Route does not exist!, Try "/tasks" as home route.')

module.exports = notFound
