import pool from "../config/db.js";


export const findAllRelics = async() => {

    const [rows] = await pool.query(
        `
        SELECT
            r.Relic_ID as ID,
            r.Relic_Name as Name,
            r.Relic_Status as Vaulted,
            rt.Type_Name as Type
        FROM relics r
        JOIN relicType rt
            ON r.Type_ID = rt.Type_ID
        `
    );
    
    return rows;
};

export const findRelicsByType = async(type) => {

    const [rows] = await pool.query(
        `
        SELECT
            r.Relic_ID as ID,
            r.Relic_Name as Name,
            r.Relic_Status as Vaulted,
            rt.Type_Name as Type
        FROM relics r
        JOIN relicType rt
            ON r.Type_ID = rt.Type_ID
        WHERE rt.Type_Name = ?
        `, [type]
    );

    return rows;
};

export const findRelicsByName = async(name) => {

    const [rows] = await pool.query(
        `
        SELECT
            r.Relic_ID as ID,
            r.Relic_Name as Name,
            r.Relic_Status as Vaulted,
            rt.Type_Name as Type
        FROM relics r
        JOIN relicType rt
            ON r.Type_ID = rt.Type_ID
        WHERE Relic_Name = ?
        `,[name]
    );

    return rows;
};

export const insertRelics = async(name, type) => {

    const [result] = await pool.query(
        `
        INSERT INTO relics
            (Relic_Name, Type_ID)
        SELECT
            r.Relic_Name,
            rt.Type_ID
        FROM (
            SELECT
                ? AS Relic_Name,
                ? AS Type_Name
        ) r
        JOIN relicType rt ON rt.Type_Name = r.Type_Name
        `, [name, type]
    );

    return result.insertId;
};

export const updateRelicsVaulted = async(name, type) => {

    const [result] = await pool.query(
        `
        UPDATE relics
            (Relic_Name, Type_ID)
        SELECT
            r.Relic_Name,
            rt.Type_ID
        FROM (
            SELECT
                ? AS Relic_Name,
                ? AS Type_Name
        ) r
        JOIN relicType rt ON rt.Type_Name = r.Type_Name
        `, [name, type]
    );

    return result.insertId;
};