import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';
import userRouter from './routes/user.js';
import createUser from './routes/createUser.js';
import updateUser from './routes/updateUser.js'
import deleteUser from './routes/deleteUser.js';
import blogs from './routes/blogs.js';
import featuredBlogs from './routes/featuredBlogs.js';
import blog from './routes/blog.js';
import createBlog from './routes/createBlog.js';
import updateBlog from './routes/updateBlog.js';

await mongoose.connect('mongodb://localhost:27017/my-blog');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', usersRouter);
app.use('/api/users', userRouter);
app.use('/api/users', createUser);
app.use('/api/users',  updateUser);
app.use('/api/users', deleteUser);
app.use('/api/blogs', blogs);
app.use('/api/blogs/featured', featuredBlogs);
app.use('/api/blogs', blog);
app.use('/api/blogs', createBlog);
app.use('/api/blogs', updateBlog);

app.get("/", (req, res) => {
    res.status(200).send();
});

export default app;