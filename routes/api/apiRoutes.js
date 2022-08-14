const router = require('express').Router();
const { application } = require('express');
let store = require('../../db/db.json');
const { writeFile } = require('fs');

router.get('/notes', (req, res) => res.json(store));

router.post('/notes', ({body}, res) => {
    console.log('body: ', body)
    store.push(body);
    console.log(JSON.stringify(store));

    writeFile('./db/db.json', JSON.stringify(store), err => {
        if(err) throw err;
        res.json(store);
    });
});

module.exports = router;

