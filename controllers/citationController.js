import * as citationModel from '../models/citationModel.js';

export const getCitationAleatoire = async (req, res) => {
    try {
        const auteur = req.query.auteur;
        
        const citation = await citationModel.getCitationAleatoire(auteur);
        
        if (!citation) {
            return res.status(404).json({
                erreur: "Aucune citation trouvée pour cet auteur"
            });
        }
        
        res.status(200).json(citation);
    } catch (error) {
        console.error('Erreur SQL:', error.code, '-', error.message);
        res.status(500).json({
            erreur: "Erreur lors de la récupération de la citation"
        });
    }
};

export const updateCitation = async (req, res) => {
    try {
        const id = req.params.id;
        const { texte, auteur } = req.body;
        
        // Validation des champs requis
        if (!texte || !auteur) {
            return res.status(400).json({
                erreur: "Les champs texte et auteur sont requis"
            });
        }
        
        // Vérifier si la citation existe
        const citationExiste = await citationModel.getCitationById(id);
        
        if (!citationExiste) {
            return res.status(404).json({
                erreur: "Citation non trouvée"
            });
        }
        
        // Mettre à jour la citation
        await citationModel.updateCitation(id, texte, auteur);
        
        res.status(200).json({
            message: "Citation modifiée avec succès"
        });
    } catch (error) {
        console.error('Erreur SQL:', error.code, '-', error.message);
        res.status(500).json({
            erreur: "Erreur lors de la modification de la citation"
        });
    }
};
