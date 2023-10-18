import React, { useEffect, useState } from "react";
import { TicketBox } from "../../components/TicketBox";
import { GridTable } from "../../components/GridTable";

import styles from "./HomePage.module.scss";

interface RenderProps {
  shortName: string;
}

export const HomePage: React.FC = () => {
  const [state, setState] = useState<RenderProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setState(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <GridTable>
        {state.map((dat, index) => (
          <TicketBox key={index} title={dat.shortName} />
        ))}
      </GridTable>
    </div>
  );
};
