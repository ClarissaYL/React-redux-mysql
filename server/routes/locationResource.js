import express from 'express';
import File from "../models/file";

let router = express.Router();

router.get('/', (req, res) => {
    File.forge().fetchAll().then(resource => {
        res.json({resources: resource});
    }).catch(err => res.status(500).json({errors: {global: "something went wrong"}}));
});

router.get('/:id', (req, res) => {
    File.forge()
        .where('id', '=', req.params.id)
        .fetch().then(resource => res.json({resource: resource}))
        .catch(err => res.status(500).json({errors: {global: "something went wrong"}}));
});

router.use((req, res) => {
    res.status(404).json({
        errors: {
            global: "Still working on it, Please try again later than when we implement it "
        }
    })
});


export default router;