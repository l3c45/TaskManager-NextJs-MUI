import mongoose from "mongoose";

const mongooConnection = {
  statusConnection: 0,
};

export const connectDB = async () => {
  if (mongooConnection.statusConnection) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.statusConnection = mongoose.connections[0].readyState;

    if (mongooConnection.statusConnection === 1) {
      console.log("Usando conection anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_ATLAS as string);
  mongooConnection.statusConnection = 1;
  console.log("Conectado");
};

export const disconnectDB = async () => {

if(process.env.NODE_ENV==="development")return


  if (mongooConnection.statusConnection === 0) return;

  await mongoose.disconnect();
  console.log("desconectado");
};
