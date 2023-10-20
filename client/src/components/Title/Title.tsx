import styles from "./Title.module.scss";

interface TitleProps {
  titleData: string;
}

export const Title: React.FC<TitleProps> = ({ titleData }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{titleData}</h1>
    </div>
  );
};
