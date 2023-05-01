const router = require('express').Router();
const User = require('../db/models/User');
const { requireAuth } = require('./authentication/authMiddleware');
const adminAuth = require('./authentication/adminAuth');

router.get('/all', adminAuth, async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (error) {
    console.error('error getting users');
    next(error);
  }
});

router.get('/:id', requireAuth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (req.user.id !== user.id) {
      return res.status(403).json({ error: 'Access denied. Not your data.' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error getting user data', error);
    next(error);
  }
});

module.exports = router;
