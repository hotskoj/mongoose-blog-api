import mongoose, {Schema} from "mongoose";

// Creates a new Mongoose Schema for Users
const UserSchema = new Schema({
    firstName: { type: String, required: true}, 
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
    social: {
        facebook: { type: String, required: false },
        twitter: { type: String, required: false },
        linkedIn: { type: String, required: false }
    }
});

export default mongoose.model('User', UserSchema);