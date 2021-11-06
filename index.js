const odbc = require('node-odbc');
 
async function queryAccess() {
const connection = await odbc.connect(`DSN=C:/Users/pankaj/Desktop/cold data/2021/acc.mdb`);
const data = await connection.query('SELECT * from  amad');
console.log(data);
}
 
queryAccess();