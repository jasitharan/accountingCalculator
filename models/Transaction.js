const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Please select Date']
  },
  type: {
    type: String,
    required: [true, 'Please select transaction type']
  },
  units: {
    type: Number,
    required: [true, 'Please add a a number']
  },
  uprice: {
    type: Number
  },
  value: {
    type: Number
  },
  wacunits: {
    type: Number
  },
  wacuprice: {
    type: Number
  },
  wacvalue: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);