function getConnection() {
      const mysql = require("mysql2");
      const connDetail = {
            host: "localhost",
            user: "root",
            password: "password",
            database: "mysqldb"
      }
      const conn = mysql.createConnection(connDetail)
      conn.connect((err, result) => {
            if (err) {
                  return console.error("Error:=> connecting to mysql Database");
            }
            console.log("connected!!!!");
      })
      return conn;
}

function getColdInfo() {
      var coldInfo;
      connection.query("select * from cold_info", (err, data) => {
            if (err) {
                  return console.error("Error in fetching data from cold_info table");
            }
            coldInfo = data;
      })
      return coldInfo;
}

function getGrp() {
      connection.query("select * from grp", (err, data) => {
            if (err) {
                  return console.error("Error in fetching data from grp table");
            }
            return data;
      })
}

function getWholeData(tableName){
      connection.query(`select * from ${tableName}`, (err,data) => {
            if(err){
                  return console.error(`Error while getting table ${tableName} `);
            }
            console.log(`getting data from table ${tableName}`);
            console.log(data);
      })
}

//make connection to mysql database!!
const connection = getConnection();

// get cold_info
//const coldInfo = getColdInfo();

// get data from GRP table
//getGrp();

// get data from whole tableName
getWholeData("cold_info");
//getWholeData("grp");
