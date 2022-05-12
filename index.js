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
/* MONGODB CONNECTION
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Mushroom:TEMPO@lao.zskci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("LAO").collection("maris");
  // perform actions on the collection object
  collection.findOne({id:"TEMPO"}, function(err, doc) {
        console.log(err);
        console.log(doc);
  });
  //client.close();
});
*/

var maris = mongoose.Schema({
  "id" : String,
  "crystal" : Number,
  "Destruction Stone Fragment" : Number,
  "Guardian Stone Fragment" : Number,
  "Destruction Stone" : Number,
  "Guardian Stone" : Number,
  "Guardian Stone Crystal" : Number,
  "Destruction Stone Crystal" : Number,
  "Simple Oreha Fusion Material" : Number,
  "Harmony Shard Pouch (S)" : Number,
  "Life Shard Pouch (S)" : Number,
  "Honor Shard Pouch (S)" : Number,
  "Solar Grace" : Number,
  "Caldarr Fusion Material" : Number,
  "Basic Oreha Fusion Material" : Number,
  "Harmony Leapstone" : Number,
  "Harmony Shard Pouch (M)" : Number,
  "Life Leapstone" : Number,
  "Life Shard Pouch (M)" : Number,
  "Honor Leapstone" : Number,
  "Honor Shard Pouch (M)" : Number,
  "Great Honor Leapstone" : Number,
  "Solar Blessing" : Number,
  "Star's Breath" : Number,
  "Harmony Shard Pouch (L)" : Number,
  "Moon's Breath" : Number,
  "Life Shard Pouch (L)" : Number,
  "Honor Shard Pouch (L)" : Number,
  "Solar Protection" : Number
  });
const Maris = mongoose.model('Maris', maris);

app.get('/', (req, res) => {
  Maris.find({id:"TEMPO"}, function (err, docs) {
    console.log(err);
    docs = docs[0];
    console.log(docs["Moon's Breath"]);
    res.send(docs);
  });
})

app.get('/shop', (req, res) => {
  Maris.find({id:"TEMPO"}, function (err, docs) {
    console.log(err);
    docs = docs[0];
    console.log(docs["Moon's Breath"]);
    res.render("shop", docs);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
