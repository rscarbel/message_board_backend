const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const containsBadWords = require('../scripts/containsBadWords')

router.get('/messages', async (req, res) => {
  try {
      const messages = await Message.find({},['username','message','createdAt']);
      res.json(messages);
  } catch (error) {
      res.status(500).json({error: 'Your request could not be completed'});
  }
});

router.post('/message', async (req, res) => {
    if(containsBadWords(req.body)) {
        res.status(403).json({success : false})
    } else {
        try {
            await Message.create({...req.body, IP:  req.headers['x-forwarded-for'] || req.connection.remoteAddress});
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