export const vaultedToBoolean = async(rows) => {
    const relics = rows.map(relic => ({
        ...relic,
        vaulted: Boolean(relic.vaulted)
    }));

    return relics;
};