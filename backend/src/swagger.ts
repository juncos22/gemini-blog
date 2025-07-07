import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Blog API",
    version: "1.0.0",
    description: "A simple blog API",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
