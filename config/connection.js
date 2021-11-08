import mysql from "mysql2";

//function getConnection() {
const connDetail = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "mysqldb",
};

const connection = mysql.createConnection(connDetail);
connection.connect((err, result) => {
  if (err) {
    return console.error("Error:=> connecting to mysql Database");
  }
  console.log("connection created!!!!");
});
export default connection;
