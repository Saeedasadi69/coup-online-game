import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Game routes are working!');
});

export default router;