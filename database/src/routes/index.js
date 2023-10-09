const {Router} = require('express');
const store = require('../database');
const {validateModel} = require('../middlewares')

const router = Router();

router.get('/:model', validateModel, async (req, res) => {
    const {model} = req.params
    const response = await store[model].list();
    res.status(200).json(response);
});

router.get('/:model/:id', validateModel, async (req, res) => {
    const {model, id} = req.params
    const response = await store[model].getById(id);
    res.status(200).json(response);
})

// router.get('/characters', async (req, res) => {
//     const response = await Character.list();
//     res.status(200).json(response)
// })

// router.get('/films', async (req, res) => {
//     const response = await Film.list();
//     res.status(200).json(response)
// })

// router.get('/planets', async (req, res) => {
//     const response = await Planet.list();
//     res.status(200).json(response)
// })

// router.get('/characters/:id', async (req, res) => {
//     const id = req.params.id
//     const response = await Character.getById(id);
//     res.status(200).json(response)
// })

// router.get('/films/:id', async (req, res) => {
//     const id = req.params.id
//     const response = await Film.getById(id);
//     res.status(200).json(response)
// })

// router.get('/planets/:id', async (req, res) => {
//     const id = req.params.id
//     const response = await Planet.getById(id);
//     res.status(200).json(response)
// })

module.exports = router