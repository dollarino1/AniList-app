import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../App';

const CommentsSection = ({ animeId }) => {
  const { user } = useContext(Context);
  const db = firebase.firestore();
  const commentsRef = db
    .collection('animeComments')
    .doc(animeId.toString())
    .collection('comments')
    .orderBy('createdAt', 'asc');

  const [comments] = useCollectionData(commentsRef);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    db.collection('animeComments')
      .doc(animeId.toString())
      .collection('comments')
      .add({
        userId: user.uid,
        userName: user.displayName || user.email,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setValue('');
  };

  return (
    <div className='comments'>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit} className='comment__form'>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Add a comment...'
        />
        <button type='submit'>Post</button>
      </form>
      <div className='comments__list'>
        {comments &&
          comments.map((comment, index) => (
            <div className='comment' key={index}>
              <p className='comment__user'>{comment.userName}</p>
              <p className='comment__text'>{comment.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentsSection;
