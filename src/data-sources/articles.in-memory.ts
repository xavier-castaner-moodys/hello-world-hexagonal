import { injectable } from "tsyringe";
import Articles from "../core/entitites/articles";
import ArticleRepository from "../core/repositories/article.repository";

@injectable()
class ArticleInMemory implements ArticleRepository {
  public getArticleById(id: string): Articles {
    return {
      id: "id",
      title: "this is the title",
      text: "This should be the body of the article",
      tags: ["tag1", "tag2"],
    };
  }
}

export default ArticleInMemory;
