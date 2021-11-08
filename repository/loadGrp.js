function loadGrp(reader) {
  const table = reader.getTable("grp");
  const data = table.getData();

  data.forEach((row) => {
    console.log("-------------------------------");
    console.log(row.descrip);
    console.log(row.add1);
    console.log(row.under);
    console.log(row.open);
    console.log(row.dr);
    console.log(row.close);
    console.log(row.balance);
    console.log(row.Nature);
    console.log(row.openOTHER);
    console.log(row.AccName);
  });
}
export default loadGrp;
