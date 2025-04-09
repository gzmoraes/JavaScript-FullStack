import { z } from "zod" 

const mySchema = z.string()

console.log(mySchema.parse("Moraes"))
alert("olá,mundo!")
