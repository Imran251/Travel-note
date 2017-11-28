const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const COUNTRIES = require('./countries');

const PadSchema = new Schema({
  title:        {type:String, required:true},
  description:  String,
  location:     { type: { type: String, default: "Point" }, coordinates: [Number] },
  country:      { type: String, enum: COUNTRIES, required: true },
  pic_name:     String,
  pic_path:     String,
  visible:      Boolean,
  _travelId     : { type: Schema.Types.ObjectId, ref: 'TravelModel', required: true },
});

const PadModel= mongoose.model('pad', PadSchema);
module.exports = PadModel;
