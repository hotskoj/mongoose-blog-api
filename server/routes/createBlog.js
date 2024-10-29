import {Router} from 'express';
import Blog from '../models/Blog.js';
import User from '../models/User.js'

const router = Router();

router.post('/', async (req, res) => {
    try{
        const user = await User.findById(req.body.authorId);
        const newBlog = await Blog.create(req.body);

        newBlog.author = user._id;
        user.blogs.push(newBlog);

        res.status(200).json(newBlog);
    } catch(error) {
        console.log(error);
        res.status(404).send('Blog Not Created');
    }
});

export default router;