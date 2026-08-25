import pool from "../config/db.js";

import{
    vaultedToBoolean
} from "../util/boolConverter.js";


export const findAllRelics = async() => {

    const [rows] = await pool.query(
        `
        SELECT
            r.relic_id as id,
            r.relic_name as name,
            r.relic_vaulted as vaulted,
            rt.type_name as type
        FROM relics r
        JOIN relicType rt
            ON r.type_id = rt.type_id
        ORDER BY
            REGEXP_REPLACE(Relic_Name, '[0-9]+$', ''),
            CAST(REGEXP_SUBSTR(Relic_Name, '[0-9]+$') AS UNSIGNED)
        `
    );
    
    const relics = vaultedToBoolean(rows);

    return relics;
};

export const findRelicsByType = async(type) => {

    const [rows] = await pool.query(
        `
        SELECT
            r.relic_id as id,
            r.relic_name as name,
            r.relic_vaulted as vaulted,
            rt.type_name as type
        FROM relics r
        JOIN relicType rt
            ON r.type_id = rt.type_id
        WHERE rt.type_name = ?
        ORDER BY
            REGEXP_REPLACE(Relic_Name, '[0-9]+$', ''),
            CAST(REGEXP_SUBSTR(Relic_Name, '[0-9]+$') AS UNSIGNED)
        `, [type]
    );

    const relics = vaultedToBoolean(rows);

    return relics;
};

export const findRelicsByName = async(name) => {

    const [rows] = await pool.query(
        `
        SELECT
            r.relic_id as id,
            r.relic_name as name,
            r.relic_vaulted as vaulted,
            rt.type_name as type
        FROM relics r
        JOIN relicType rt
            ON r.type_id = rt.type_id
        WHERE relic_name = ?
        `,[name]
    );

    const relics = vaultedToBoolean(rows);

    return relics;
};

export const insertRelics = async(name, vaulted, type) => {

    const [result] = await pool.query(
        `
        INSERT INTO relics
            (relic_name, relic_vaulted, type_id)
        SELECT
            r.relic_name,
            r.relic_vaulted,
            rt.type_id
        FROM (
            SELECT
                ? AS relic_name,
                ? AS relic_vaulted,
                ? AS type_name
        ) r
        JOIN relicType rt ON rt.type_name = r.type_name
        `, [name, vaulted, type]
    );

    return result.insertId;
};

export const updateRelicsVaulted = async(name, type) => {

    const [result] = await pool.query(
        `
        UPDATE relics
            (relic_name, type_id)
        SELECT
            r.relic_name,
            rt.type_id
        FROM (
            SELECT
                ? AS relic_name,
                ? AS type_name
        ) r
        JOIN relicType rt ON rt.type_name = r.type_name
        `, [name, type]
    );

    return result.insertId;
};