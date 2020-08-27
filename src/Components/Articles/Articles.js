import React from 'react';
import { Link } from 'react-router-dom';

export default function Articles(props) {
    const articles = props.articles.reverse().map((articleObj) => {   
        return (
    <article className='oneArticle' key={articleObj._id}>
        <div className='articleMeta' key={articleObj._id}>
            <Link to={`/article/${articleObj._id}`} key={articleObj._id} article={articleObj}><h3>{articleObj.title}</h3></Link>
            <Link to={`/profile/${articleObj._id}`}><p>by: {articleObj.author}</p></Link>
        </div>
        <p>{articleObj.articleBody}</p>            
    </article>)
    });
    
    return (
        <div id='articleContainer'  className={'articleContainer'} key={'key'}>
            <h2 className='articlesHeader'>Recent articles!</h2>
            <Link to={`/article/new`}><button id='addButt'>new</button></Link>
            {articles}
        </div>
        
    )
}