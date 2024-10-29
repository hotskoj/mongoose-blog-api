import {Router} from 'express';
import User from '../models/User.js';

const router = Router();

router.post('/', async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch(error) {
        console.log(error);
        res.status(404).send('User Not Created');
    }
});

export default router;