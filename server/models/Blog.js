import mongoose, {Schema} from "mongoose";

// Creates a new Mongoose Schema for Blogs
const BlogSchema = new Schema({
    title: { type: String, required: true }, 
    article: { type: String, required: true },
    published: { type: Date, required: true },
    featured: { type: Boolean, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Blog', BlogSchema);