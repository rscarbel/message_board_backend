const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/messages', async (req, res) => {
  try {
      const messages = await Message.find({});
      res.json(messages);
  } catch (error) {
      console.log(error);
      res.status(500).json('Your request could not be completed');
  }
});

router.get('*', (req,res) => {
    res.status(500).json('Please make a valid request.')
})

module.exports = router;