import * as dotenv from "dotenv"
import * as http from "node:http"

import getUsers from "./modules/users.js"


dotenv.config()

const { HOSTNAME, PORT } = process.env

/**
 * Написать обработчик запроса:
 * - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
 * - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
 * - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
 * - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
 * - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
 */

function doReturnUsersJSON(response) {
  response.setHeader("Content-Type", "application/json; charset=utf-8")
  response.statusCode = 200
  response.write(getUsers())
  response.end()
}

function doError(response) {
  response.statusCode = 500
  response.end()
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${HOSTNAME}:${PORT}`)

  if (url.searchParams.has("users"))
    doReturnUsersJSON(response)
  else
    doError(response)
})

server.listen(PORT, () => {
  console.log(`Well done! Server has been started. Link: http://${HOSTNAME}:${PORT}`)
  console.log()
  console.log(`You can use http://${HOSTNAME}:${PORT}?users (just param w/o a value).`)
  console.log()
})
