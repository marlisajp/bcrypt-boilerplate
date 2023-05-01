const jwt = require('jsonwebtoken');
const User = require('../../db/models/User');

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res
        .status(401)
        .json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(400).json({ error: 'Invalid token.' });
    }

    if (!user.isAdmin) {
      return res
        .status(403)
        .json({ error: 'Access denied. User is not an admin.' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

module.exports = adminAuth;
