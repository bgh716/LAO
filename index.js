const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs');
const ejs = require('ejs');
const assert = require('assert');
const port = process.env.PORT || 3000
app.set("view engine", "ejs");
app.set("views", "./views");

//MONGOOSE CONNECTION
const mongoose = require('mongoose')
const dbcode = fs.readFileSync("temp/jsdb.txt", "utf8")
mongoose.connect(
  "mongodb+srv://Mushroom:TEMPO@lao.zskci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "LAO",
  }
);
const db = mongoose.connection;
const handleOpen = () => {
    console.log(`✅ Connected to DB`);
};
const handleError = (error) => {
    console.log(`❌ Error on DB connection: ${error}`);
};
db.once("open", handleOpen);
db.on("error", handleError);

var maris = mongoose.Schema({
    "id" : String,
    "crystal" : Number,
    "i1" : {
        "name" : String,
        "price" : Number
    },
    "i2" : {
        "name" : String,
        "price" : Number
    },
    "i3" : {
        "name" : String,
        "price" : Number
    },
    "i4" : {
        "name" : String,
        "price" : Number
    },
    "i5" : {
        "name" : String,
        "price" : Number
    },
    "i6" : {
        "name" : String,
        "price" : Number
    },
    "i7" : {
        "name" : String,
        "price" : Number
    },
    "i8" : {
        "name" : String,
        "price" : Number
    },
    "i9" : {
        "name" : String,
        "price" : Number
    },
    "i10" : {
        "name" : String,
        "price" : Number
    },
    "i11" : {
        "name" : String,
        "price" : Number
    },
    "i12" : {
        "name" : String,
        "price" : Number
    },
    "i13" : {
        "name" : String,
        "price" : Number
    },
    "i14" : {
        "name" : String,
        "price" : Number
    },
    "i15" : {
        "name" : String,
        "price" : Number
    },
    "i16" : {
        "name" : String,
        "price" : Number
    },
    "i17" : {
        "name" : String,
        "price" : Number
    },
    "i18" : {
        "name" : String,
        "price" : Number
    },
    "i19" : {
        "name" : String,
        "price" : Number
    },
    "i20" : {
        "name" : String,
        "price" : Number
    },
    "i21" : {
        "name" : String,
        "price" : Number
    },
    "i22" : {
        "name" : String,
        "price" : Number
    },
    "i23" : {
        "name" : String,
        "price" : Number
    },
    "i24" : {
        "name" : String,
        "price" : Number
    },
    "i25" : {
        "name" : String,
        "price" : Number
    },
    "i26" : {
        "name" : String,
        "price" : Number
    },
    "i27" : {
        "name" : String,
        "price" : Number
    }
});
const Maris = mongoose.model('Maris', maris);

function ratio(crystalP, itemGP, itemCP){
  rate = (itemCP*crystalP)/itemGP;
  return rate;
}

const infoFile = fs.readFileSync('temp/iteminfo.json', 'utf8');
const infoObj = JSON.parse(infoFile);

app.get('/', (req, res) => {
  Maris.find({id:"TEMPO"}, function (err, docs) {
    docs = docs[0];
    res.send(docs);
  });
})

app.get('/shop', (req, res) => {
  Maris.find({id:"TEMPO"}, function (err, docs) {
    if (err){
      console.log(err);
    }
    const tmpObj = docs[0];
    res.render("shop", {data: tmpObj, calFunc: ratio, info: infoObj});
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
