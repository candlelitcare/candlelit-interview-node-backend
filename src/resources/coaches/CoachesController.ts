import { RequestHandler } from 'express';
import CoachesService from './CoachesService';

const coachService = new CoachesService();

/*
@route: POST /v1/coaches
@desc: Add a new coach
Check if coach with email already exists
should use CoachService.createCoach
 */
const actionAddNewCoachHandler: RequestHandler = async (_req, res, _next) =>
  res.status(200).json({
    error: false,
    message: 'Add new coach',
  });

/*
@route: GET /v1/coaches
@desc: Gets all coaches
should use CoachService.getAllCoaches 
 */
const actionGetAllCoaches: RequestHandler = async (_req, res, _next) => {
  try {
    const coaches = await coachService.getAllCoaches();

    return res.status(200).json({
      data: coaches,
      error: false,
    });
  } catch (error) {
    _next(error);
  }
};

/*
@route: GET /v1/coaches/:id
@desc: Gets coach by ID
should use CoachService.getCoachById
 */
const actionGetCoachById: RequestHandler = async (_req, res, _next) =>
  res.status(200).json({
    error: false,
    message: 'Get coach by ID',
  });

export { actionGetAllCoaches, actionAddNewCoachHandler, actionGetCoachById };
