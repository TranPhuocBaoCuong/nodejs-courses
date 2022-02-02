class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home')
    }

    // [GET] /contact
    contact(req, res) {
        res.send('CONTACT PAGE')
    }

    // [GET] /search
    search(req, res) {
        res.send('SEARCH PAGE')
    }
}

module.exports = new SiteController()
