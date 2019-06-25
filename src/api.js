import axios from "axios";

const request = axios.create({
  baseURL: "https://mattsncnewsproject.herokuapp.com/api/"
});

export const getArticles = () => {
  return request.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
