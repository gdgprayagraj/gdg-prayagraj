// This file defines the schema for Code of Conduct submissions
// Even though we're using the native MongoDB driver directly in our server action,
// having this model file helps document the structure of our data

/**
 * Code of Conduct Submission Structure
 *
 * {
 *   name: string,         // User's full name
 *   email: string,        // User's email address
 *   acceptedAt: Date,     // When the user accepted the terms
 *   createdAt: Date       // When the record was created
 * }
 *
 * MongoDB Collection Name: codeOfConductSubmissions
 */

import mongoose, { Schema } from 'mongoose';

export const CodeOfConductSubmissionSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	acceptedAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

// Create the User model
const CodeOfConductSubmission =
	mongoose.models.CodeOfConductSubmission ||
	mongoose.model(
		'CodeOfConductSubmission',
		CodeOfConductSubmissionSchema
	);

export default CodeOfConductSubmission;

// This is just a reference schema for documentation purposes
// We're using the native MongoDB driver directly in our server action
