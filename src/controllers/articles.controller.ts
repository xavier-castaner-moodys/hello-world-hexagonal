import { container } from "tsyringe";
import { Request, ResponseToolkit } from "@hapi/hapi";
import ArticlesInteractor from "../core/interactors/articles.interactor";
import Article from "../core/entitites/articles";
import ArticleInMemory from "../data-sources/articles.in-memory";
import ArticleRepository from "../core/repositories/article.repository";

container.register<ArticleRepository>("ArticleRepository", {
  useClass: ArticleInMemory,
});

export const getArticleById = async (
  request: Request,
  h: ResponseToolkit
): Promise<Article | undefined> => {
  try {
    const articleInteractorInstance = container.resolve(ArticlesInteractor);
    const { article_id } = request.params;

    const article = articleInteractorInstance.getArticleById(article_id);

    return article;
  } catch (e) {
    console.log(e);
  }
};
