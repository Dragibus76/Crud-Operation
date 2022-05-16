import React from 'react';

const Post = ({ post, user }) => {
    const dateFormater = (date) => {
        let days = Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24));

        if (days === 0) {
            return "aujourd'hui";
        } else if (days === 1) {
            return "il y a 1 jour";
        } else {
            return "il y a " + days + " jours";
        }
    }
    return (
        <div className='post'>
            <div className='post-header'>
                <div className='left-part'>
                    <div className='title'>
                        <span>{post.author[0]}</span>
                        <h2>{post.author}</h2>
                    </div>
                    <h5>Posté {dateFormater(post.date)}</h5>
                </div>
                {post.authorId === user?.uid && (
                    <div className='right-part'>
                    <span><i className='fa-solid fa-pen-to-square'></i></span>
                    <span>DELETE</span>
                </div>
                )}
                
            </div>
            <p>{post.message}</p>
        </div>
    );
};

export default Post;