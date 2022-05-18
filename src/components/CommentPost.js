import { onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { auth, db } from '../utils/firebase.config';

const CommentPost = ({ post }) => {
    const [user, setUser] = useState(null);
    const answerContent = useRef();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleComment = (e) => {
        e.preventDefault();

        let data = [];

        if (post.comments === null) {
            data = [
                {
                    commentAuthor: user.displayName,
                    text: answerContent.current.value,
                },
            ];
        } else {
            data = [
                ...post.comments, 
                {
                    commentAuthor: user.displayName,
                    text: answerContent.current.value,
                }
            ]
        }
        
        updateDoc(doc(db, "posts", post.id), { comments: data });
        answerContent.current.value = "";
    };

    return (
        <div className='comment-container'>
            <h5 className="comment-title">Commentaires</h5>

        {
            user ? (
                <form onSubmit={(e) => handleComment(e)}>
                    <textarea placeholder='Ecrire un commentaire' ref={answerContent}></textarea>
                    <input type="submit" value="Envoyer" />
                </form>
            ) : (
                <p>Vous devez être connecté pour poster un commentaire</p>
            )
        }

        </div>
    );
};

export default CommentPost;