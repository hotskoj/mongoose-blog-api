import {Router} from 'express';
import Blog from '../models/Blog.js';

const router = Router();

router.put('/:id', async (req, res) => {
    try{
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
        res.status(200).json(updatedBlog);
    } catch(error) {
        console.log(error);
        res.status(404).send('Blog Not Updated');
    }
});

export default router;