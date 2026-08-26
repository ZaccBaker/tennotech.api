const adminCheck = (req, res, next) => {
    
    const apiKey = req.headers["admin-key"];

    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    next();
};

export default adminCheck;