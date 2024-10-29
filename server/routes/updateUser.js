import {Router} from 'express';
import User from '../models/User.js';

const router = Router();

router.put('/:id', async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
        res.status(200).json(updatedUser);
    } catch(error) {
        console.log(error);
        res.status(404).send('User Not Updated');
    }
});

export default router;