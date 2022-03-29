import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import Joi from "joi";
import { getArticleById } from "../controllers/articles.controller";

const initServer = async () => {
  const server: Server = new Server({
    port: 8080,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/articles/{article_id}",
    handler: getArticleById,
    options: {
      validate: {
        params: Joi.object({
          article_id: Joi.string(),
        }),
        query: Joi.object({
          page: Joi.number(),
          size: Joi.number(),
        }),
      },
    },
  });

  await server.start();
  console.log(`Hapi server is running on ${server.info.uri}`);
};

export default initServer;
