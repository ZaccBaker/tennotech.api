import{
    findAllRelics,
    findRelicsByType,
    findRelicsByName,
    insertRelics,
    updateRelicsVaulted,
    deleteRelic
} from "../services/relicServices.js";


export const getRelics = async (req, res, next) => {
    try {
        const relics = await findAllRelics();

        res.status(200).json(relics);

    } catch (error) {
        next(error);
    }
};

export const getRelicsByType = async (req, res, next) => {
    try {
        const relics = await findRelicsByType(req.params.type);

        if (!relics) {
            return res.status(404).json({
                error: "Relics not found"
            });
        }

        res.status(200).json(relics);

    } catch (error) {
        next(error);
    }
};

export const getRelicsByName = async(req, res, next) => {
    try {
        const relics = await findRelicsByName(req.params.name);

        if (!relics) {
            return res.status(404).json({
                error: "Relics not found"
            });
        }

        res.status(200).json(relics);

    } catch (error) {
        next(error);
    }
}

export const addRelics = async(req, res, next) => {
    try {
        
        const {
            name,
            vaulted,
            type
        } = req.body;

        const id = await insertRelics(
            name,
            vaulted,
            type
        );

        res.status(201).json({
            id,
            name,
            vaulted,
            type
        });

    } catch (error) {
        next(error);
    }
};

export const updateRelic = async(req, res, next) => {
    try {

        const { name } = req.params;
        
        const {
            vaulted
        } = req.body;

        const updated = await updateRelicsVaulted(
            name,
            vaulted
        );

        if (!updated) {
            return res.status(404).json({
                error: "Relic not found"
            });
        }

        res.status(200).json({
            name,
            vaulted
        });

    } catch (error) {
        next(error);
    }
};

export const removeRelic = async(req, res, next) => {
    try {

        const { name } = req.params;

        const affectedRows = await deleteRelic(
            name
        );

        if (affectedRows === 0) {
            return res.status(404).json({
                error: "Relic not found"
            });
        }

        res.status(200).json({
            message: "Relic deleted successfully",
            name
        });

    } catch (error) {
        next(error);
    }
}