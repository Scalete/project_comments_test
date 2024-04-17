"use client"

import { FC, useState } from 'react'
import styles from './addComment.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useUser } from '@/redux/user/selectors';
import { useAppDispatch } from '@/redux/store';
import { addComment } from '@/redux/comments/asyncAction';
import { setStatusAddComment } from '@/redux/comments/slice';
import { Status } from '@/redux/types';

const AddComment: FC<{isReply: boolean, setIsReply: any}> = ({isReply, setIsReply}) => {

  const {user} = useSelector(useUser);
  const dispatch = useAppDispatch();

  const [commentText, setCommentText] = useState<string>(''); 

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!isReply) {
      dispatch(addComment({
        content: commentText,
        date_comment: '1 sec ago',
        score: 0,
        user: {
          image: {
            png: user?.image.png as string,
            webp: user?.image.webp as string,
          },
          username: user?.username as string,
        },
        replies: []
      }))
      setCommentText('');
    }
  }

  return (
        <form onSubmit={onSubmit} className={styles.form} style={isReply ? {marginTop: '8px'}: {}} action="">
            <Image src={user?.image.png as string} width={40} height={40} alt={'avatar'}/>
            <textarea name="comment" id="comment" placeholder='Add a comment…' value={commentText} onChange={(e) => setCommentText(e.target.value)} ></textarea>
            <button type="submit" className='action blue'>{isReply? 'REPLY': 'SEND'}</button>
        </form>
  )
}

export default AddComment