import React from 'react';
import Articles from '../../Components/Articles/Articles';
import ArticleModel from '../../models/article';

import './Article.css'

class ArticlesContainer extends React.Component {
    state = {
        articles: []
    };
    
    componentDidMount() {        
        ArticleModel.getAllArticles()
        .then((result) => {
            this.setState({articles: result});
            console.log(result)
        })
        .catch((err) => console.log(err))
    }
    render() {
        return <Articles articles={this.state.articles} currentUser={this.currentUser}/>;
    }
}

export default ArticlesContainer;

// import React from 'react'

// export default class Articles extends Component {
//     render() {
//         return (
//             <div id='articleContainer' className={'articleContainer ' + props.articlesExpand}>
//             <button id="expand-button" onClick={props.toggle}>exp</button>
//         </div>
//         )
//     }
// }


// export default function Articles(props) {
//     return (
//         <div id='articleContainer' className={'articleContainer ' + props.articlesExpand}>
//             <button id="expand-button" onClick={props.toggle}>exp</button>
//         </div>
//     )
// }