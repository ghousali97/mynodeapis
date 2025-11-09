
const apiController =   (req, res) => {
      const message ={
    host: req.hostname,
    // Use originalUrl to get full path
    //Using path would give only the route path i.e. /myapi instead of /public/myapi
    path: req.originalUrl, 
    message: 'Welcome, this is the my public API!'
 };
    res.status(200).json(message);
}

const defaultController = (req, res) => {
const message ={
    host: req.hostname,
    path: req.originalUrl,
    message: 'This is the default public route'
 };
    res.status(404).json(message);

}

module.exports = {
    apiController,
    defaultController
};