const express = require('express');
const accountController = require('../controllers/accountController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/accounts', validate, accountController.createAccount);
router.get('/accounts', auth, accountController.getAccounts);
router.get('/accounts/:id', auth, accountController.getAccount);
router.put('/accounts/:id', auth, accountController.updateAccount);
router.delete('/accounts/:id', auth, accountController.deleteAccount);

module.exports = router;
