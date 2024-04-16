import Comment from '@/components/comment/Comment';
import { FC } from 'react'
import styles from './home.module.scss';
import AddComment from '@/components/add-comment/AddComment';
import { IComment, IReply } from '@/interfaces/interfaces';
import { getComments } from '@/lib/actions/comment-actions';

const Home: FC = async () => {

  const comments = await getComments();

  const renderComments = () => {
    return comments.map((comment: IComment, i: number) => (
      <div key={i} className={styles.comment}>
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