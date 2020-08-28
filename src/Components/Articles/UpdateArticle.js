import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticleModel from '../../models/article';


class UpdateArticle extends React.Component {
  state = {
  };
  componentDidMount() {
    ArticleModel.getArticleById(this.props.match.params.id)
      .then((result) => this.setState(result))
      .then(console.log(this.state))
      .catch((err) => console.log(err));
  }
  handleChage = (event) => {
    console.log(this.props.currentUser.id)
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    this.setState({[event.target.name]: event.target.value,})    
};

handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({[event.input.name]: event.input.value, author: this.props.currentUser.username})
    ArticleModel.updateArticle(this.state, this.props.match.params.id)
    .then((result) => {
        console.log(this.state);
    });
    this.props.history.push(`/article/${this.props.match.params.id}`);
    }
    
    render() {console.log(this.state)
    return (
      <div id='dash-container' className='articleContainer articleForm'>
        <form onSubmit={this.handleSubmit}>
          <h2>Edit Article</h2>
          <div>
            <input onInput={this.handleChage} className='inputField' type="text" name="title" value={this.state.title}/>
          </div>
          <div>
            <textarea onInput={this.handleChage} className='textArea' type="text" name="articleBody" value={this.state.articleBody}/>
          </div>
          <button onClick={this.handleSubmit} className='articleSubmit' type="submit">Update</button>
        </form>
      </div>
    );
}
    
}


export default withRouter(UpdateArticle);