import {Router} from 'express';
import Blog from '../models/Blog.js';

const router = Router();

router.get('/', async (req, res) => {
    try{
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch {
        res.status(404).send('Not found');
    }
});

export default router;