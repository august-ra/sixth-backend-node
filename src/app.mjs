import * as dotenv from "dotenv"
import * as http from "node:http"


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

function doError(response) {
  response.statusCode = 500
  response.end()
}

const server = http.createServer((request, response) => {
  doError(response)
})

server.listen(PORT, () => {
  console.log(`Well done! Server has been started. Link: http://${HOSTNAME}:${PORT}`)
  console.log()
})
