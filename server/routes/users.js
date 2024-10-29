import {Router} from 'express';
import User from '../models/User.js';

const router = Router();

router.get('/', async (req, res) => {
    try{
        let users = await User.find();
        res.status(200).json(users);
    } catch {
        res.status(404).send('Not found');
    }
});

export default router;
