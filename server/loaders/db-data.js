const config = require("../config");

const url =
  "https://png.pngtree.com/png-clipart/20190516/original/pngtree-premium-white-t-shirt--mockup-png-image_3635949.jpg";
//hva er sku?? satt id til sku for nå
const PRODUCTS = [
  {
    id: 111,
    name: "Dårllig teve",
    price: 200,
    stockStatus: 0,
    imageUrl: url,
    description: "Fet greie",
    shortDescription: '"Litt lengre tekst om en fet greie',
  },
  {
    id: 122,
    name: "Grei tskjorte",
    price: 250,
    stockStatus: 5,
    imageUrl: url,
    description: "Veldig fet greie",
    shortDescription: '"Litt lengre tekst om en veldig fet greie',
  },
  {
    id: 321,
    name: "Ok tskjorte",
    price: 2499,
    stockStatus: 2,
    imageUrl: url,
    description: "Ok greie, funker til det meste",
    shortDescription: '"Litt lengre tekst om en ok  greie',
  },
];

const ORDERS = [
  {
    orderId: "#123",
    firstName: "Hans",
    lastName: "emann",
    userId: 110,
    status: "COMPLETED",
    amount: 2500,
    date: Date.now(),
  },
  {
    orderId: "#321",
    firstName: "Brian",
    lastName: "Mann",
    userId: 111,
    status: "CANCELLED",
    amount: 1500,
    date: Date.now(),
  },
  {
    orderId: "#322",
    firstName: "Per",
    lastName: "Spellemann",
    userId: 111,
    status: "CANCELLED",
    amount: 1500,
    date: Date.now(),
  },
];

const ADMINS = [
  {
    email: config.adminEmail,
    password: config.adminPassword,
    firstName: "Admin",
    lastName: "Adminsen",
    userType: "ADMIN",
  },
];

module.exports = { PRODUCTS, ADMINS, ORDERS };