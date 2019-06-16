const express = require('express');
const router = express.Router();
const Hubs = require('./hubs-model.js');

router.get('/', async (req, res) => {
    
  });
  
  router.get('/:id/messages', async (req, res) => {
    Hubs.findHubMessages(req.params.id)
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(err => {
            res.status(500).json(err);
        });
  });
  
  router.post('/', async (req, res) => {
    
  });
  
  router.delete('/:id', async (req, res) => {
 
  });
  
  router.put('/:id', async (req, res) => {

  });

  module.exports = router;