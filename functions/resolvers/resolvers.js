// Connect to firebase database
const admin = require("../database/database");

const resolvers = {
  Query: {
    products: () =>
      admin
        .database()
        .ref("products")
        .once("value")
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key])),
    categories: () =>
      admin
        .database()
        .ref("categories")
        .once("value")
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key])),
  },
  Mutation: {
    addProduct: (id, title, description, cost, price, image, category_id) =>
      admin.database().ref("products").push({
        id: id,
        title: title,
        description: description,
        cost: cost,
        price: price,
        image: image,
        category_id: category_id,
      }).key,
    addCategory: (holder, { id, name }) => {
      return admin.database().ref("categories").push({
        id: id,
        name: name,
      }).key;
    },
  },
};
module.exports = resolvers;
