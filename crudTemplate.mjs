// routes/crudTemplate.mjs - CRUD sablon
import express from 'express';
import pool from '../db/pool.mjs';

// table:   a tábla neve
// idField: az elsődleges kulcs oszlopának neve
// columns: a módosítható oszlopok nevei
//
// FIGYELEM: az oszlopneveket nem lehet '?' helyőrzővel átadni, azok szövegként kerülnek
// az SQL utasításba. Ezért a kérés törzséből csak az itt felsorolt (megengedett) mezőket
// használjuk fel, különben a kliens tetszőleges SQL-t tudna beszúrni (SQL injection).
const createRouter = (table, idField, columns) => {
    const router = express.Router();

    // A kérés törzséből csak a megengedett oszlopokat tartjuk meg
    const pickAllowed = (body) =>
        Object.fromEntries(
            Object.entries(body ?? {}).filter(([key]) => columns.includes(key))
        );

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
            const data = pickAllowed(req.body);
            const fields = Object.keys(data);
            const values = Object.values(data);
            if (fields.length === 0) return res.status(400).json({ error: 'Nincs menthető adat' });
            const [result] = await pool.query(
                `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${fields.map(() => '?').join(', ')})`,
                values
            );
            res.status(201).json({ [idField]: result.insertId, ...data });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.put('/:id', async (req, res) => {
        try {
            const data = pickAllowed(req.body);
            const fields = Object.keys(data);
            const values = Object.values(data);
            if (fields.length === 0) return res.status(400).json({ error: 'Nincs menthető adat' });
            const [result] = await pool.query(
                `UPDATE ${table} SET ${fields.map(f => `${f} = ?`).join(', ')} WHERE ${idField} = ?`,
                [...values, req.params.id]
            );
            if (result.affectedRows === 0) return res.status(404).json({ error: 'Nem található' });
            res.json({ [idField]: req.params.id, ...data });
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

// Használat egy másik fájlban (pl. routes/index.mjs) – az oszlopnevek az adatbázis
// tábláinak megfelelően adandók meg:
//
// import createRouter from './crudTemplate.mjs';
//
// export const artistRoutes = createRouter('artists', 'artistId', ['name', 'country']);
// export const albumRoutes = createRouter('albums', 'albumId', ['title', 'artistId', 'year']);
// export const userRoutes = createRouter('users', 'userId', ['name', 'email']);
