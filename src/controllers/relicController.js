import{
    findAllRelics,
    findRelicsByType,
    findRelicsByName,
    insertRelics

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
            type
        } = req.body;

        const id = await insertRelics(
            name,
            type
        );

        res.status(201).json({
            id,
            name,
            type
        });

    } catch (error) {
        next(error);
    }
};