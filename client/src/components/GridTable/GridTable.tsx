import { ReactNode } from "react";
import styles from "./GridTable.module.scss";

interface GridTableProps {
    children : ReactNode;
}

export const GridTable: React.FC <GridTableProps> = ({children}) => {
  return <div className={styles.gridTableContainer}>
    {children}
  </div>;
};
