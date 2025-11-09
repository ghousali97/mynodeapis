
const apiController =   (req, res) => {
      const message ={
    host: req.hostname,
    path: req.originalUrl,
    message: 'Welcome, this is the my private API!'
 };
    res.status(200).json(message);
}

const defaultController = (req, res) => {
const message ={
    host: req.hostname,
    path: req.originalUrl,
    message: 'This is the default private route'
 };
    res.status(404).json(message);

}

module.exports = {
    apiController,
    defaultController
};