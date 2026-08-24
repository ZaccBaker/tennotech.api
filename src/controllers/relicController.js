import{
    findAllRelics,
    findRelicsByType,

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
        const relics = await findRelicsByType(req.params.id);

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