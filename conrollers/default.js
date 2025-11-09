

const defaultController = (req,res) => {
    const message ={
    host: req.hostname,
    path: req.originalUrl,
    message: 'This is the default application route'
 };
    res.status(404).json(message);
};

module.exports = defaultController;