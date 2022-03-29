import { inject, injectable } from "tsyringe";
import ArticleRepository from "../repositories/article.repository";

@injectable()
class ArticlesInteractor {
  constructor(
    @inject("ArticleRepository")
    private readonly articleRepository: ArticleRepository
  ) {}

  public getArticleById(id: string) {
    return this.articleRepository.getArticleById(id);
  }
}

export default ArticlesInteractor;
