import mongoose from "mongoose";

const mongoConnection = {
  statusConnection: 0,
};

export const connectDB = async () => {
  if (mongoConnection.statusConnection) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.statusConnection = mongoose.connections[0].readyState;

    if (mongoConnection.statusConnection === 1) {
      console.log("Usando coneccion anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_ATLAS as string);
  mongoose.set('strictQuery', false)
  mongoConnection.statusConnection = 1;
  console.log("Conectado");
};

export const disconnectDB = async () => {

if(process.env.NODE_ENV==="development")return


  if (mongoConnection.statusConnection === 0) return;

  await mongoose.disconnect();
  mongoConnection.statusConnection = 0;
  console.log("desconectado");
};

