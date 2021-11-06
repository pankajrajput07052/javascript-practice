//const mysql = require("mysql2");
import mysql from "mysql2";

function getConnection() {
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
  return conn;
}

function getColdInfo() {
  var coldInfo;
  connection.query("select * from cold_info", (err, data) => {
    if (err) {
      return console.error("Error in fetching data from cold_info table");
    }
    coldInfo = data;
  });
  return coldInfo;
}

function getGrp() {
  connection.query("select * from grp", (err, data) => {
    if (err) {
      return console.error("Error in fetching data from grp table");
    }
    return data;
  });
}

function getWholeData(tableName) {
  connection.query(`select * from ${tableName}`, (err, data) => {
    if (err) {
      return console.error(`Error while getting table ${tableName} `);
    }
    console.log(`getting data from table ${tableName}`);
    console.log(data);
  });
}

function loadColdInfo() {
  connection.query(
    "insert into COLD_INFO(COLD_ID,COLD_SUBMITTER,COLD_NAME,OWNER,CONTACT,ADDRESS,FACEBOOK_URL) values(3,'niniramcs','Ninnu Ram ice & cold storage pvt. ltd','Rajendra Prashad Lodhi','+91-9927083090','mainpuri road aron','https://www.facebook.com/baapucold');"
  );
  console.log("data inserted");
}

function loadColdInfo() {
  connection.query(
    "insert into COLD_INFO(COLD_ID,COLD_SUBMITTER,COLD_NAME,OWNER,CONTACT,ADDRESS,FACEBOOK_URL) values(3,'niniramcs','Ninnu Ram ice & cold storage pvt. ltd','Rajendra Prashad Lodhi','+91-9927083090','mainpuri road aron','https://www.facebook.com/baapucold');"
  );
  console.log("data inserted");
}

function loadAmad() {
  const row = {
    AMADNO: 12345,
    ENTRY: "2007-02-11",
    PARTY: "Remya",
    VILL: "Parsippany",
    PACKETS: "1234",
    KISM: "kishm",
    YEAR: "2021",
    MARK: "9999/123",
  };
  let sql = `INSERT INTO AMAD(COLD_ID,AMADNO,ENTRY,PARTY,VILL,PACKETS,KISM,YEAR,MARK) VALUES (1,${row.AMADNO},${row.ENTRY},${row.PARTY},${row.VILL},${row.PACKETS},${row.KISM},${row.YEAR},${row.MARK})`;
  connection.query(sql);
  console.log("data inserted into amad");
}

//make connection to mysql database!!
const connection = getConnection();

// get cold_info
//const coldInfo = getColdInfo();

// get data from GRP table
//getGrp();

// get data from whole tableName
//getWholeData("cold_info");
//getWholeData("grp");

//loadColdInfo();
loadAmad();
