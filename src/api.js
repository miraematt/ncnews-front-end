import axios from "axios";

const request = axios.create({
  baseURL: "https://mattsncnewsproject.herokuapp.com/api/"
  // baseURL: "http://localhost:9090/api/" use this for local testing
});

export const getArticles = (topic, user, sortBy, orderBy) => {
  return request
    .get("/articles", {
      params: { topic: topic, author: user, sort_by: sortBy, order: orderBy }
    }) // author is the key for username on the articles API endpoint - this took ages to figure out!!!
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
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

export const postCommentByArticleId = ({ newComment }, article_id) => {
  return request
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentByCommentId = comment_id => {
  return request.delete(`/comments/${comment_id}`);
};

export const patchArticleVote = (article_id, increment) => {
  return request
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data.article;
    });
};
