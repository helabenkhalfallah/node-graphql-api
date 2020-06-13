import mongoose from 'mongoose';

//promise
mongoose.Promise = global.Promise;

//connect
const DBConnect = async () => {
  const dbHost = process.env.MONGOOSE_DB_HOST;
  const dbPort = process.env.MONGOOSE_DB_PORT;
  const dbName = process.env.MONGOOSE_DB_NAME;
  const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;
  try {
    await mongoose.connect(dbUrl, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('🚀 Connected to mongo!!!');
  }
  catch (err) {
    console.log('Could not connect to MongoDB');
  }
}

export default DBConnect;
