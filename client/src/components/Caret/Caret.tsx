import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Caret.module.scss";

interface CaretProps {
  move: number;
}

export const Caret: React.FC<CaretProps> = ({ move }) => {
  return (
    <>
      {move > 0 ? (
        <FontAwesomeIcon icon={faCaretUp} className={styles.caretUp} />
      ) : move < 0 ? (
        <FontAwesomeIcon icon={faCaretDown} className={styles.caretDown} />
      ) : (
        <FontAwesomeIcon icon={faMinus} className={styles.noMove} />
      )}
    </>
  );
};
