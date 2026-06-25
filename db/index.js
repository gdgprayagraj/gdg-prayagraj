import mongoose from 'mongoose';

const connection = {};

export default async function connectToDB() {
	// Check if we have a connection to the database or if it's currently connecting
	if (connection.isConnected) {
		if (process.env.NODE_ENV === 'development') {
			console.log('Using cached database connection...');
		}
		return;
	}

	if (!process.env.MONGODB_URI) {
		throw new Error('MONGODB_URI environment variable is not defined');
	}

	try {
		// Attempt to connect to the database
		const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

		// Store the connection state
		connection.isConnected = db.connections[0].readyState;
		console.log('Database connected successfully');
	} catch (error) {
		console.error('Database connection failed:', error);

		// Throw the error instead of crashing the process
		throw error;
	}
}
