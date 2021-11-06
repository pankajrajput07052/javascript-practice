import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
import mysql from "mysql";

//connection
//const mysql = require("mysql2");
const connDetail = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "mysqldb",
};
const conn = mysql.createConnection(connDetail);
conn.connect((err, result) => {
  if (err) {
    return console.error("Error:=> connecting to mysql Database");
  }
  console.log("connected!!!!");
});

//

const buffer = readFileSync("lodhirajcs.2021.1.mdb");
const reader = new MDBReader(buffer);

reader.getTableNames();

const table = reader.getTable("Amad");
table.getColumnNames();
const data = table.getData();

data.forEach((row) => {
  console.log("-------------------------------");
  console.log(row.AMADNO);
  console.log(row.PARTY);
  console.log(row.VILL);
  console.log(row.MARK1);
  conn.query(
    `INSERT INTO AMAD(COLD_ID,AMADNO,ENTRY,PARTY,VILL,PACKETS,KISM,YEAR,MARK) VALUES (1,${row.AMADNO},${row.ENTRY},${row.PARTY},${row.VILL},${row.PACKETS},${row.KISM},${row.YEAR},${row.MARK})`
  );
});
