import getMdbReader from "../util/mdbReader.js";
import loadGrp from "../repository/loadGrp.js";
import loadAmad from "../repository/loadAmad.js";

function processFile(filePath) {
  const reader = getMdbReader(filePath);

  //load grp
  loadGrp(reader);

  //load Amad
  loadAmad(reader);
}
export default processFile;
