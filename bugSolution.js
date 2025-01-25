```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017"; // Replace with your connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Correct update operation using $inc operator within $set
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: { $inc: 1 } } });
    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```