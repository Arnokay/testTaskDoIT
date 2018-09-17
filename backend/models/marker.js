import mongoose from 'mongoose'

const MarkerSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },

  lat: {
    type: Number,
    required: true,
    trim: true
  },

  lng: {
    type: Number,
    required: true,
    trim: true
  }

});

export default mongoose.model('Marker', MarkerSchema);

