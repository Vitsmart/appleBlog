import mysql from "mysql"
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Odogwu635#",
    database:"appleblog"

})