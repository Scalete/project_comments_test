"use client"

import Comment from '@/components/comment/Comment';
import { FC, useEffect } from 'react'
import styles from './home.module.scss';
import AddComment from '@/components/add-comment/AddComment';
import { IComment, IReply } from '@/interfaces/interfaces';
import { useSelector } from 'react-redux';
import { useComments } from '@/redux/comments/selectors';
import { useAppDispatch } from '@/redux/store';
import { fetchComments } from '@/redux/comments/asyncAction';
import { fetchUser } from '@/redux/user/asyncAction';

const Home: FC = () => {

  const {comments, statusAddComment, statusDeleteComment} = useSelector(useComments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(fetchUser());
  }, [statusAddComment, statusDeleteComment])

  const renderComments = () => {
    return comments.map((comment: IComment, i: number) => (
      <div key={i} className={`${styles.comment}`}>
        <Comment comment={comment}/>
        <div className={styles.replies}>
          {
            comment.replies?.map((reply: IReply, i: number) => <Comment key={i} reply={reply}/>)
          }
        </div>

      </div>
    ))
  }

  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
          {renderComments()}
        </div>
        <AddComment isReply={false} setIsReply={undefined}/>
    </div>
    
    
  )
}

export default Home;