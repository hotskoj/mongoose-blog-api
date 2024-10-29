import {Router} from 'express';
import Blog from '../models/Blog.js';

const router = Router();

router.get('/:id', async (req, res) => {
    try{
        const blog = await Blog.findById(req.params.id);
        res.status(200).json(blog);
    } catch {
        res.status(404).send('Not found');
    }
});

export default router;