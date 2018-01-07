const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const country = require('../models/countries');
const pad = require('../models/padModel');
const travel = require('../models/travelModel');
const user = require('../models/user');
const ObjectId  = require('mongoose').Types.ObjectId;

mongoose.connect('mongodb://localhost/notetravel');
const countries = [
     "Spain",
     "Germany",
     "Frace",
     "Japan",
     "Chine",
     "Australia",
     "Mexico",
     "Russia",
     "Italy",
     "Perú",
     "Kenya"
];

const pads = [
{
     title: "Heidelberg",
     description: "My amazing journey to Heidelberg",
    //  location: [8.672434,49.398750],
     country:"Germany",
     pic_name:"001.jpg",
     pic_path:"/uploads/001",
     visible: true,
     travelId  : ObjectId('591434a7b3f2f3440f1628d5')
},
  {
     title: "Berlin",
     description: "My amazing journey to Berlin",
    //  location: [13.404954,52.520008],
     country:"Germany",
     pic_name:"005.jpg",
     pic_path:"/uploads/005",
     visible: false,
     travelId  : ObjectId('591434a7b3f2f3440f1628d5')
}
];

const travels = [
{
     title: "India",
     description: "2 weeks in this amazing country. I really don't know what to expect!",
     travelDate:"2017-07-11 00:00:00.000Z",
     countries:"India",
     _userId  : ObjectId("000000000000000000000001")
},
{
     title: "Berlin",
     description: "My amazing journey to Berlin",
    //  location: [13.404954,52.520008],
     country:"Germany",
     pic_name:"005.jpg",
     pic_path:"/uploads/005",
     visible: false,
     travelId  : ObjectId('591434a7b3f2f3440f1628d5')
}
];

user.create(users, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((user) => {
    console.log(user.username);
  });

});

travel.create(travels, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((travel) => {
    console.log(travel.title);
  });
});

pad.create(pads, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((pad) => {
    console.log(pad.title);
  });
});
mongoose.connection.close();
