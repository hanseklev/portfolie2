const swaggerAutogen = require("swagger-autogen")();
const apiEndpoints = ['./api/routes/auth.js', './api/routes/product.js', './api/routes/order.js', './api/routes/user.js' ]
const outputFile = "./swagger_out.json"

const doc = {
  info: {
    version: "1.0.0",
    title: "My API",
    description:
      "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "localhost:8080",
  basePath: "/api",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Endpoints",
    },
  ],
  definitions: {
    User: {
      email: "mail@example.com",
      firstName: "Jhon",
      lastName: "Doh",
      UserType: "USER",
    },
    Customer: {
      email: "mail@example.com",
      firstName: "Jhon",
      lastName: "Doh",
      UserType: "USER",
      address: "The Road 123",
      postcode: "1234",
      city: "Paradise City",
      Orders: [""],
    },
    Product: {
      name: "Cool t-shirt",
      price: 250.0,
      lastName: "Doh",
      description: "Very very cool thing",
      shortDescription: "Cool thing",
      imageUrl: "www.image.com/cool-shirt",
      stockQuantity: 4,
    },
    Order: {
      createdAt: "2004-12-12",
      orderStatus: "AWAITNG PAYMENT",
      customer: "CustomerRef",
      total: 1250.0,
      products: ["products"],
    },
  },
};

swaggerAutogen(outputFile, apiEndpoints, doc);
