import styles from "./BoxRow.module.scss";
import { ReactNode } from "react";

interface BoxRowProps {
  children: ReactNode;
  gapWidth?: number;
  title?: string;
}

export const BoxRow: React.FC<BoxRowProps> = ({
  children,
  gapWidth,
  title,
}) => {
  const choosedGap = {
    gap: gapWidth ? `${gapWidth}px` : "0",
  };

  return (
    <div className={styles.boxRowContainer}>
      <p>{title}</p>
      <div className={styles.boxRowContainerChildren} style={choosedGap}>{children}</div>
    </div>
  );
};
