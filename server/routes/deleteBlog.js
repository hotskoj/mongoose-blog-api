import {Router} from 'express';
import Blog from '../models/Blog.js';

const router = Router();

router.delete('/:id', async (req, res) => {
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).send('Blog deleted');
    } catch(error) {
        console.log(error);
        res.status(404).send('Blog Not Deleted');
    }
});

export default router;