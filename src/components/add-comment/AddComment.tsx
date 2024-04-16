import { FC } from 'react'
import styles from './addComment.module.scss';
import Image from 'next/image';

const AddComment: FC = () => {
  return (
        <form className={styles.form} action="">
            <Image src={'/images/avatars/image-juliusomo.png'} width={40} height={40} alt={'avatar'}/>
            <textarea name="comment" id="comment" placeholder='Add a comment…'></textarea>
            <button type="submit" className='action blue'>SEND</button>
        </form>
  )
}

export default AddComment