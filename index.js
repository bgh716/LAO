const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Mushroom:TEMPO@lao.zskci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("LAO").collection("maris");
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
  res.send(collection);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
