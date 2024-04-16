import Comment from '@/components/comment/Comment';
import { FC } from 'react'
import styles from './home.module.scss';
import AddComment from '@/components/add-comment/AddComment';

const Home: FC = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.comment}>
            <Comment/>
            <div className={styles.replies}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

          </div>
        </div>

        <AddComment isReply={false} setIsReply={undefined}/>
    </div>
    
    
  )
}

export default Home;