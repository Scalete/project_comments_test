import styles from './modal.module.scss';

type ModalProps = {
    _id: string;
    title: string;
    text: string;
    isOpen: boolean;
    onClose: () => void;
    onDelete: (_id: string) => void;
  };
  
const Modal: React.FC<ModalProps> = ({ title, text, isOpen, onClose, onDelete, _id }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={styles.modalButtons}>
                    <button className='action gray' onClick={onClose}>NO, CANCEL</button>
                    <button className='action red' onClick={() => onDelete(_id)}>YES, DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;