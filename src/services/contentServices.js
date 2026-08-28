import pool from "../config/db.js";


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
