// routes/crudTemplate.mjs - CRUD sablon
import express from 'express';
import pool from '../db/pool.mjs';

const createRouter = (table, idField) => {
    const router = express.Router();

    router.get('/', async (req, res) => {
        try {
            const [rows] = await pool.query(`SELECT * FROM ${table}`);
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const [rows] = await pool.query(`SELECT * FROM ${table} WHERE ${idField} = ?`, [req.params.id]);
            if (rows.length === 0) return res.status(404).json({ error: 'Nem található' });
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.post('/', async (req, res) => {
        try {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);
            const [result] = await pool.query(
                `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${fields.map(() => '?').join(', ')})`,
                values
            );
            res.json({ [idField]: result.insertId, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.put('/:id', async (req, res) => {
        try {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);
            const [result] = await pool.query(
                `UPDATE ${table} SET ${fields.map(f => `${f} = ?`).join(', ')} WHERE ${idField} = ?`,
                [...values, req.params.id]
            );
            if (result.affectedRows === 0) return res.status(404).json({ error: 'Nem található' });
            res.json({ [idField]: req.params.id, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            const [result] = await pool.query(`DELETE FROM ${table} WHERE ${idField} = ?`, [req.params.id]);
            if (result.affectedRows === 0) return res.status(404).json({ error: 'Nem található' });
            res.json({ message: 'Törölve' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
};

export default createRouter;

// routes fájlok generálása CRUD sablonnal
import createRouter from './crudTemplate.mjs';

export const artistRoutes = createRouter('artists', 'artistId');
export const albumRoutes = createRouter('albums', 'albumId');
export const genreRoutes = createRouter('genres', 'genreId');
export const instrumentRoutes = createRouter('instruments', 'instrumentId');
export const playlistRoutes = createRouter('playlists', 'plId');
export const songRoutes = createRouter('songs', 'songId');
export const userRoutes = createRouter('users', 'userId');
