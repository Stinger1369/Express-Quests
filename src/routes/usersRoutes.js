const express = require('express');
const router = express.Router();
const database = require('../../config/database'); // Assurez-vous que le chemin est correct

// Route GET /api/users - Renvoie tous les utilisateurs
router.get('/api/users', async (req, res) => {
  try {
    const [users] = await database.query('SELECT * FROM users');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

// Route GET /api/users/:id - Renvoie un utilisateur spécifique
router.get('/api/users/:id', async (req, res) => {
  try {
    const [users] = await database.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    if (users.length === 0) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    res.json(users[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
