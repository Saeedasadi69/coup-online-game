const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  players: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      username: { type: String },
      role: { type: String },
      coins: { type: Number, default: 2 },
      cards: [{ type: String }],
    },
  ],
  status: { type: String, default: 'waiting' },
  createdAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
  result: { type: String },
});

module.exports = mongoose.model('Game', gameSchema);