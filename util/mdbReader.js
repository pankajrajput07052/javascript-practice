import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

function getMdbReader(mdbFilePath) {
  const buffer = readFileSync(mdbFilePath);
  return new MDBReader(buffer);
}

export default getMdbReader;
