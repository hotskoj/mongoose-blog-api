import {Router} from 'express';
import User from '../models/User.js';

const router = Router();

router.delete('/:id', async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send('User deleted');
    } catch(error) {
        console.log(error);
        res.status(404).send('User Not Deleted');
    }
});

export default router;