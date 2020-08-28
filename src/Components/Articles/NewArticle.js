import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticleModel from '../../models/article';

class NewArticle extends React.Component {
  state = {
    title: '',
    author: this.props.currentUser.username,
    authorID: this.props.currentUser.id,
    articleBody: '',
  };

  handleChage = (event) => {
    console.log(this.props.currentUser.id)
    if (event.target.value === 'on') {
      event.target.value = true;
    }

    this.setState({
        [event.target.name]: event.target.value,
    })    
};

handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({[event.input.name]: event.input.value, author: this.props.currentUser.username})
    ArticleModel.createArticle(this.state)
    .then((result) => {
        console.log(this.state);
    });
    this.props.history.push('/dashboard');
    }
    
    render() {
    return (
        <div id='dash-container' className='articleContainer articleForm'>
            <div className='addForm'>
                <form  onSubmit={this.handleSubmit}>
                <h2>Add A New Article</h2>
                <div>
                    <input onInput={this.handleChage} id='articleTitle' className='inputField' type="text" name="title" placeholder='Title of your article'/>
                </div>
                <div>
                    <textarea onInput={this.handleChage} id='articleBody' className='inputField' type="text-area" name="articleBody" placeholder='Your article'/>
                </div>
                    <button onClick={this.handleSubmit} className='articleSubmit' type="submit">Add New</button>
                </form>
            </div>
        </div>
    );
}
    
}

export default withRouter(NewArticle);