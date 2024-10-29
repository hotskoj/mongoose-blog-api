import {Router} from 'express';
import User from '../models/User.js';

const router = Router();

router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch {
        res.status(404).send('Not found');
    }
});

export default router;