import styles from './Card.module.scss';

const Card: React.FC = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Card;