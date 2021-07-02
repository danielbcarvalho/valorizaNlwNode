import express from 'express'

const app = express()

app.get('/test', (request, response) => {
  // Request => entrando
  // Response => saindo
  return response.send("Hello World GET");
})

app.post("/test-post", (request, response) => {
  return response.send("Hello World POST")
})

app.listen(3000, () => console.log('Server is running'))