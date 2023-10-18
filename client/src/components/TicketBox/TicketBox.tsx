import { Button } from "../Button";
import { Link } from "react-router-dom";

import styles from "./TicketBox.module.scss";

interface TicketBoxProps {
  title: string; 
}

export const TicketBox: React.FC<TicketBoxProps> = ({ title }) => {
  return (
      <div className={styles.ticketBoxContainer}>
        <p>{title}</p>
        <Link to={`/detail/${title}`}>
          <Button data={title} />
        </Link>
      </div>
  );
};

