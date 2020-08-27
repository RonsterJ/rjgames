import React from 'react';
import UserModel from '../../models/user';


export default class OneUser extends React.Component {
    state = {
        user: {}
    }
    
    componentDidMount() {
        console.log(this.author)
        UserModel.getUser(this.props.match.params.username)
          .then((result) => {
            console.log(result);
            this.setState({user: result});
          })
          .catch((err) => console.log(err))
    }
    
    render() {
        console.log(this.state)
        return (
        // <div id='articleContainer'  className={'articleContainer'} key={this.state.user._id}>
        //     <h2 className='articlesHeader'>{this.state.user}</h2>
        //     <article className='oneArticle show' key={this.state.user._id}>
        //         <div className='userMeta' key={this.state.user._id}>
        //             <h3>{this.state.user.username}</h3>
        //         </div>      
        //     </article>
        // </div>
        <div>profile</div>
    )}
}