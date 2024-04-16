"use client"

import { FC } from 'react'
import styles from './addComment.module.scss';
import Image from 'next/image';

const AddComment: FC<{isReply: boolean, setIsReply: any}> = ({isReply, setIsReply}) => {

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsReply(false);
  }

  return (
        <form onSubmit={onSubmit} className={styles.form} style={isReply ? {marginTop: '8px'}: {}} action="">
            <Image src={'/images/avatars/image-juliusomo.png'} width={40} height={40} alt={'avatar'}/>
            <textarea name="comment" id="comment" placeholder='Add a comment…'></textarea>
            <button type="submit" className='action blue'>{isReply? 'REPLY': 'SEND'}</button>
        </form>
  )
}

export default AddComment