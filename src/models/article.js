const url = 'http://localhost:4000/api/v1/articles'
const token = localStorage.getItem('token');

class ArticleModel {
  static getAllArticles = () => {
    return fetch(`${url}/index`)
      .then((response) => response.json())
  }

  static getArticleById = (articleID) => {
    return fetch(`${url}/${articleID}`)
      .then((response) => response.json())
  }

  static createArticle = (article) => {
    return fetch(`${url}/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(article)
    })
      .then((response) => response.json())
  }

  static updateArticle = (article, id) => {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify(article)
    })
      .then((response) => response.json())
  }
  
  static deleteArticle = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
  }
}




export default ArticleModel;