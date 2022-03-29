import Article from "../entitites/articles";

interface ArticleRepository {
  getArticleById(id: string): Article;
}

export default ArticleRepository;
