// Auth Controller
const express = require('express');
const router = express.Router();
const { authenticate } = require('../service/authService');

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login de usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (authenticate(username, password)) {
    res.status(200).json({ message: 'Login realizado com sucesso!' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas!' });
  }
});

module.exports = router;
