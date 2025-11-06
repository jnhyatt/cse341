import express from 'express';
import professionalController from '../controllers/professionalController.js';

export const router = express.Router();

router.get('/', professionalController)

export default router;
