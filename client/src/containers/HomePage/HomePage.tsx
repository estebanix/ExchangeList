import React from "react";
import { TicketBox } from "../../components/TicketBox";
import { GridTable } from "../../components/GridTable";
import { Context } from "../../context/Context";
import { Title } from "../../components/Title";
import { useContext } from "react";

import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const { fetchData } = useContext(Context);

  return (
    <div className={styles.homePageContainer}>
      <GridTable>
        <Title titleData="Exchange rates" />
        {fetchData.map((dat, index) => (
          <TicketBox key={index} data={dat} />
        ))}
      </GridTable>
    </div>
  );
};
