const { error } = require('console');

const getHomepage = async (req, res) => {
    return res.render('home.ejs')
}


module.exports = {
    getHomepage
}