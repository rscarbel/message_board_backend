const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const BadWords = require('../scripts/BadWords')

router.get('/messages', async (req, res) => {
  try {
      const messages = await Message.find({});
      res.json(messages);
  } catch (error) {
      res.status(500).json({error: 'Your request could not be completed'});
  }
});

router.post('/message', async (req, res) => {
    if(req.body.username.match(BadWords) || req.body.message.match(BadWords)) {
        res.status(403).json({success : false})
    } else {
        try {
            await Message.create(req.body);
            res.json({ success: true });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    }
});

router.get('*', (req,res) => {
    res.status(500).json('Please make a valid request.')
})

module.exports = router;