import React from 'react';

export default function Articles(props) {
    const articles = props.articles.map((articleObj) => {
    //   return <Article key={articleObj._id} article={articleObj} list={true} />

        return (
        <article className='oneArticle' key={articleObj._id}>
            <div className='articleMeta' key={articleObj._id}>
                <h3>{articleObj.title}</h3>
                <p>by: {articleObj.author}</p>
            </div>
            <p>{articleObj.articleBody}</p>
            
        </article>)
    });

    return (
        <div id='articleContainer'  className={'articleContainer ' + props.articlesExpand}>
            <button id="expand-button" onClick={props.toggle}>exp</button>

                <h2 className='articlesHeader'>Recent articles!</h2>

            {articles}
        </div>
    )

// export default function Articles(props) {
}
