import bodyParser from 'body-parser';

module.exports = (req, res, next) => {
    res.status(200).json({ message: 'posted music!' });
}