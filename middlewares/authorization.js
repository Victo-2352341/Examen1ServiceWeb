export const verifierAutorisation = (req, res, next) => {
    const authorization = req.headers.authorization;
    
    // Vérifier si l'entête Authorization existe et a le bon format
    if (!authorization || !authorization.startsWith('cle_api ')) {
        return res.status(401).json({
            erreur: "Autorisation nécessaire pour accéder à cette route"
        });
    }
    
    // Si tout est bon, passer au middleware suivant
    next();
};
