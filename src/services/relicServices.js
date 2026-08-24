import pool from "../config/db.js";


export const findAllRelics = async() => {

    const [rows] = await pool.query(
        "SELECT * FROM relics"
    );
    
    return rows;
};

export const findRelicsByType = async(id) => {

    const [rows] = await pool.query(
        `SELECT * FROM relics
        WHERE Type_ID = ?`, [id]
    );

    return rows;
};

export const findRelicsByName = async(name) => {
    const [rows] = await pool.query(
        ` SELECT * FROM relics
        WHERE Relic_Name = ?`,[name]
    );

    return rows;
};