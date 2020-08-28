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

    handleDelete = (props) => {        
        ArticleModel.deleteArticle(this.state.article._id)
            .then(() => {
                console.log(this.props)
            })
            .catch((err) => console.log(err));
            this.props.history.push('/dashboard')
        };
         
    render() {console.log(this.state.article._id);
        return (
        <div id='dash-container' className='articleContainer' key={this.state.article._id}>
            <h2 className='articlesHeader'>{this.state.article.title}</h2>
                    <p className='articlesHeader'>by: {this.state.article.author}</p>
            <article id='articleShow' className='oneArticle' key={this.state.article._id}>
                <p>{this.state.article.articleBody}</p>
                <div id='showButtons'>
                    <Link to={`/article/${this.state.article._id}/edit`}><button className='articleSubmit'>Edit</button></Link>
                    <button className='delete' onClick={this.handleDelete}>Delete</button>
                </div>           
            </article>
        </div>
    )}
}
