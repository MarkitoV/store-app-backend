import mongoose, { connect } from 'mongoose';

export async function startConnection() {
  await connect('mongodb://localhost/store-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('Database is connected');
}

