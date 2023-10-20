import { ReactNode } from "react";
import { Title } from "../Title";
import styles from "./GridTable.module.scss";

interface GridTableProps {
  title: string;
  children: ReactNode;
}

export const GridTable: React.FC<GridTableProps> = ({ title, children }) => {
  return (
    <div className={styles.gridTableContainer}>
      <Title titleData={title} />
      {children}
    </div>
  );
};
