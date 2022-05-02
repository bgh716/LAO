const express = require('express')
const path = require('path')
const app = express()
assert = require('assert');
const port = process.env.PORT || 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Mushroom:TEMPO@lao.zskci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
/*
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
app.get('/', (req, res) => {
  client.connect(err => {
    const collection = client.db("LAO").collection("maris");
    // perform actions on the collection object
    collection.findOne({id:"TEMPO"}, function(err, doc) {
          console.log(err);
          console.log(doc);
          res.send(doc);
    });
    //client.close();
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
