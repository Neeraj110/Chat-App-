import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected to MongoDB" , con.connection.host );
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
