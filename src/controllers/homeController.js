const { error } = require('console');
const db = require("../models/index")
const getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log("-----------------------");
        console.log(data)
        return res.render('home.ejs', {
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e)
    }

}


module.exports = {
    getHomepage
}