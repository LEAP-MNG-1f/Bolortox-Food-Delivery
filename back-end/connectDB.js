import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://bolortogosboujee:YKQJCyO8XUM1rnmN@bolortox.i93uz.mongodb.net/";

const connectDb = async () => {
  const client = new MongoClient(connectionString);

  let connection;
  try {
    connection = await client.connect();
  } catch (e) {
    console.log("failed to connect db");
  }

  const db = connection.db("sample_mflix");
  return db;
};
export default connectDb;