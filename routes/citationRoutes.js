import express from 'express';
import * as citationController from '../controllers/citationController.js';
import { verifierAutorisation } from '../middlewares/authorization.js';

const router = express.Router();

// Route GET pour obtenir une citation aléatoire
router.get('/aleatoire', citationController.getCitationAleatoire);

// Route PUT pour modifier une citation (protégée par l'intergiciel d'autorisation)
router.put('/:id', verifierAutorisation, citationController.updateCitation);

export default router;
