import axios from "axios";

const request = axios.create({
  baseURL: "https://mattsncnewsproject.herokuapp.com/api/"
});

export const getArticles = (topic, user) => {
  return request
    .get("/articles", { params: { topic: topic, author: user } }) // author is the key for username on the articles API endpoint - this took ages to figure out!!!
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getUsers = () => {
  return request.get("/users").then(({ data }) => {
    return data.users;
  });
};
