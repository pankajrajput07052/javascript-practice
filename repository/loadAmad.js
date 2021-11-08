import connection from "../config/connection.js";

function loadAmad(reader) {
  const table = reader.getTable("Amad");

  const data = table.getData();

  data.forEach((row) => {
    console.log("-------------------------------");
    console.log(row.AMADNO);
    console.log(row.DATE);
    console.log(row.PARTY);
    console.log(row.VILL);
    console.log(row.PKT3);
    console.log(row.KISM);
    console.log(row.DATE);
    console.log(row.MARK1);
  });

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

export default loadAmad;
