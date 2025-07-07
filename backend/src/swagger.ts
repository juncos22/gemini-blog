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
  components: {
    schemas: {
      User: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
          id: {
            type: "integer",
            description: "The auto-generated id of the user.",
          },
          name: {
            type: "string",
            description: "The name of the user.",
          },
          email: {
            type: "string",
            description: "The email of the user.",
          },
          password: {
            type: "string",
            description: "The password of the user.",
          },
        },
        example: {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password123",
        },
      },
      Login: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
            description: "The email of the user.",
          },
          password: {
            type: "string",
            description: "The password of the user.",
          },
        },
        example: {
          email: "john.doe@example.com",
          password: "password123",
        },
      },
      Post: {
        type: "object",
        required: ["title", "content", "author", "createdAt"],
        properties: {
          id: {
            type: "integer",
            description: "The auto-generated id of the post.",
          },
          title: {
            type: "string",
            description: "The title of your post.",
          },
          content: {
            type: "string",
            description: "The content of your post.",
          },
          author: {
            $ref: "#/components/schemas/User",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "The creation date of the post.",
          },
        },
        example: {
          id: 1,
          title: "My First Post",
          content: "This is the content of my first post.",
          author: {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
          },
          createdAt: "2023-01-01T12:00:00Z",
        },
      },
      Profile: {
        type: "object",
        required: ["bio", "userId"],
        properties: {
          id: {
            type: "integer",
            description: "The auto-generated id of the profile.",
          },
          bio: {
            type: "string",
            description: "The biography of the user.",
          },
          userId: {
            type: "integer",
            description: "The ID of the user associated with this profile.",
          },
        },
        example: {
          id: 1,
          bio: "A short biography of the user.",
          userId: 1,
        },
      },
      ProfileInput: {
        type: "object",
        required: ["bio"],
        properties: {
          bio: {
            type: "string",
            description: "The biography of the user.",
          },
        },
        example: {
          bio: "A short biography of the user.",
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
