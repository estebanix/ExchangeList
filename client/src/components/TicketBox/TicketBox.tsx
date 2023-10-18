import { Button } from "../Button";

import styles from "./TicketBox.module.scss";

interface TicketBoxProps {
  title: string; // Adjust the type according to your actual data structure
}

export const TicketBox: React.FC<TicketBoxProps> = ({ title }) => {
  return (
    <>
      <div className={styles.ticketBoxContainer}>
        <p>{title}</p>
        <Button />
      </div>
    </>
  );
};

export default TicketBox;
