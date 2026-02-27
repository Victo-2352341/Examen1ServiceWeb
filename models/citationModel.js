import pool from '../database.js';

export const getCitationAleatoire = async (auteur = null) => {
    try {
        let query = 'SELECT * FROM citations';
        let params = [];
        
        if (auteur) {
            query += ' WHERE auteur = ?';
            params.push(auteur);
        }
        
        query += ' ORDER BY RAND() LIMIT 1';
        
        const [rows] = await pool.query(query, params);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

export const updateCitation = async (id, texte, auteur) => {
    try {
        const [result] = await pool.query(
            'UPDATE citations SET texte = ?, auteur = ? WHERE id = ?',
            [texte, auteur, id]
        );
        return result;
    } catch (error) {
        throw error;
    }
};

export const getCitationById = async (id) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM citations WHERE id = ?',
            [id]
        );
        return rows[0];
    } catch (error) {
        throw error;
    }
};
