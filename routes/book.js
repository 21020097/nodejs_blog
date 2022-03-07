var express = require('express')
var router = express.Router()
router.get('/', async (req, res) => {
    let books = [
        {
            id: 1,
            title: "Educated: A Memoir",
            author: "Tara Westover"
        }, {
            id: 2,
            title: "The Great Alone",
            author: "Kristin Hannah"
        }, {
            id: 3,
            title: "The Feather Thief",
            author: "Kirk Wallace Johnson"
        }, {
            id: 4,
            title: "The Woman in the Window",
            author: "A.J. Finn"
        }]
    res.json(books)
})
module.exports = router