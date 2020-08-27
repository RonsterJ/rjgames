import React from 'react';
import ArticleModel from '../../models/article'
import { Link } from 'react-router-dom'
// import UserModel from '../../models/user'


export default class OneArticle extends React.Component {
    state = {
        article: {}
    }
    
    componentDidMount() {
        ArticleModel.getArticleById(this.props.match.params.id)
          .then((result) => {
              this.setState({article: result});
            })
            .catch((err) => console.log(err))
        }

    handleDelete = () => {        
        ArticleModel.deleteArticle(this.state.article._id)
            .then(() => this.props.history.push('/dashboard'))
            .then(console.log(this.state.article))
            .catch((err) => console.log(err));
    };
         
    render() {console.log(this.state.article._id);
        return (
        <div id='articleContainer'  className={'articleContainer'} key={this.state.article._id}>
            <h2 className='articlesHeader'>Recent articles!</h2>
            <article className='oneArticle show' key={this.state.article._id}>
                <div className='articleMeta' key={this.state.article._id}>
                    <h3>{this.state.article.title}</h3>
                    <p>by: {this.state.article.author}</p>
                </div>
                <p>{this.state.article.articleBody}</p>
                <Link to={`/article/${this.state.article._id}/edit`}><button>Edit</button></Link>
                <button className='delete' onClick={this.handleDelete}>Delete</button>           
            </article>
        </div>
    )}
}
