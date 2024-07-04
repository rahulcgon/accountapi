const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Account } = require('../models');
const firebaseService = require('../services/firebaseService');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const account = await Account.findOne({ where: { email } });
    if (account && await bcrypt.compare(password, account.password)) {
      const token = jwt.sign({ id: account.id, email: account.email }, 'secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

exports.firebaseAuth = async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = await firebaseService.verifyToken(token);
    const account = await Account.findOne({ where: { email: decodedToken.email } });
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error verifying token' });
  }
};
