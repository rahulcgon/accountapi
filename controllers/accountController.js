const bcrypt = require('bcryptjs');
const { Account } = require('../models');
const emailService = require('../services/emailService');

exports.createAccount = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const account = await Account.create({ email, password: hashedPassword, name });
    emailService.sendAccountCreationEmail(email);
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ error: 'Error creating account' });
  }
};

exports.getAccounts = async (req, res) => {
  const { limit } = req.query;

  try {
    const accounts = await Account.findAll({ limit: parseInt(limit, 10) || 10 });
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching accounts' });
  }
};

exports.getAccount = async (req, res) => {
  const { id } = req.params;

  try {
    const account = await Account.findByPk(id);
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching account' });
  }
};

exports.updateAccount = async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  try {
    const account = await Account.findByPk(id);
    if (account) {
      account.email = email || account.email;
      account.name = name || account.name;
      await account.save();
      res.status(200).json(account);
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating account' });
  }
};

exports.deleteAccount = async (req, res) => {
  const { id } = req.params;

  try {
    const account = await Account.findByPk(id);
    if (account) {
      await account.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting account' });
  }
};
