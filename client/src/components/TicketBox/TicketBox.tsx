import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import styles from "./TicketBox.module.scss";

interface TicketData {
  country: string;
  name: string;
  shortName: string;
}

interface TicketBoxProps {
  data: TicketData;
}

export const TicketBox: React.FC<TicketBoxProps> = ({ data }) => {
  return (
    <div className={styles.ticketBoxContainer}>
      <p>{data.country}</p>
      <p>{data.name}</p>
      <p>{data.shortName}</p>
      <Link to={`/detail?curr=${data.shortName}`}>
        <Button />
      </Link>
    </div>
  );
};
