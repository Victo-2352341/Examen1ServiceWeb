import express from 'express';
import dotenv from 'dotenv';
import citationRoutes from './routes/citationRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/citations', citationRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});



