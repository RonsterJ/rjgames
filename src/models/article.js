const url = 'http://localhost:4000/api/v1/articles/index'
const token = localStorage.getItem('token');

class ArticleModel {
  static getAllArticles = () => {
    return fetch(url)
      .then((response) => response.json())
  }

  static getArticleById = (articleID) => {
    return fetch(`${url}/${articleID}`)
      .then((response) => response.json())
  }

  static createArticle = (article) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(article)
    })
      .then((response) => response.json())
  }
}



export default ArticleModel;