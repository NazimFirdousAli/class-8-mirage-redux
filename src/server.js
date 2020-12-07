import {Server} from "miragejs"
import books from "./books.json";

export function makeServer() {
  let server = new Server({
    
    routes() {
      this.namespace = "api"

      this.get("/books", (schema) => {
        return [books]
      })
    },
  })

  return server
}