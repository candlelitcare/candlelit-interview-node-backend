import express from 'express';
import { actionAddNewCoachHandler, actionGetAllCoaches, actionGetCoachById } from './CoachesController';

const router = express.Router();
router.get('/', actionGetAllCoaches);
router.get('/:id', actionGetCoachById);
router.post('/', actionAddNewCoachHandler);

export default router;
