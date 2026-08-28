import{
    
} from "../services/contentServices.js";


export const getRelics = async (req, res, next) => {
    try {
        const relics = await findAllRelics();

        res.status(200).json(relics);

    } catch (error) {
        next(error);
    }
};

