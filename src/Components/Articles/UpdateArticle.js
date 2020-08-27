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
          <div>
          <form onSubmit={this.handleSubmit}>
          <h2>Add A New Article</h2>
          <div>
            <label htmlFor="">Title</label>
            <input onInput={this.handleChage} type="text" name="title" />
          </div>
          <div>
            <label htmlFor="">Article</label>
            <input onInput={this.handleChage} type="text" name="articleBody" />
          </div>
          <div>
            <p>{this.props.currentUser.username}</p>
          </div>
          <button onClick={this.handleSubmit} type="submit">Add New</button>
        </form>
      </div>
    );
}
    
}

export default withRouter(UpdateArticle);