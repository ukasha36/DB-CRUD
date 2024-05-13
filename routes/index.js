import { Router } from 'express';
import postuser from './users/post.js';
import getUser from './users/get.js';
import deleteUser from './users/delete.js';
import updateUser from './users/update.js';
import loginUser from './users/login.js';

import tokenVerification from '../config/tokenverification.js';

const router = Router();

router.post('/login', loginUser);
router.post('/postuser', postuser);
router.get('/getuser', tokenVerification ,  getUser);
router.delete('/deleteuser/:id', deleteUser);
router.put('/updateuser/:id', updateUser);

export default router;