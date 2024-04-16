import styles from './modal.module.scss';

type ModalProps = {
    title: string;
    text: string;
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
  };
  
const Modal: React.FC<ModalProps> = ({ title, text, isOpen, onClose, onDelete }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={styles.modalButtons}>
                    <button className='action gray' onClick={onClose}>NO, CANCEL</button>
                    <button className='action red' onClick={onDelete}>YES, DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;