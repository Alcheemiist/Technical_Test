const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require("multer");
const PORT = process.env.PORT || 3001;
const app = express();

let CandidatNumber = 0;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./candidates'));
app.use(express.static('./uploads'));

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `candidate${CandidatNumber}-${file.originalname}`);
    },
});
const multerFilter = (req, file, cb) => {
if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
} else {
    cb(new Error("Not a PDF File!!"), false);
}
};
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

app.post("/api", (req, res) => {

    console.log("--- Recieved Application ! ---\n" );
    console.log(JSON.stringify(req.body))
    console.log("\n--- Application Submited! ---\n" );
    
    saveCandidatToPublicFolder((req), function(err) {
      if (err) {
        res.status(404).send('Application not submited!');
        return;
      }
    });
    res.send('Application submited!');
});

function saveCandidatToPublicFolder(person, callback) {
  var string = JSON.stringify(person.body);
  fs.writeFile('./candidates/candidate'+ CandidatNumber + '.json', string, callback);
  CandidatNumber++;
}

app.post("/upload", upload.any('file.pdf') , async (req, res) => {
    console.log("--- Recieved File ! ---\n" );
    console.log((req.files))
    console.log("\n--- File Recieved! ---\n" );
    res.send('File submited!');
});

app.get("/candidate", (req, res) => {
    // console.log("display candidate")
  // number of candidate
  // all candidates data as json
  var candidats = [];

  for (var i = 0; i < CandidatNumber; i++) {
    candidats[i] += fs.readFileSync('./candidates/candidate'+ i + '.json', 'utf8');
    
  }
  const dataUser = {
    number: CandidatNumber,
    candidats: candidats,
  }
  res.send(dataUser);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



