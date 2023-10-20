import React from "react";
import { TicketBox } from "../../components/TicketBox";
import { GridTable } from "../../components/GridTable";
import { BoxRow } from "../../components/BoxRow";
import { Context } from "../../context/Context";
import { useContext } from "react";

import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const { fetchData, date } = useContext(Context);

  const readableDate = new Date(date).toLocaleDateString();

  return (
    <div className={styles.homePageContainer}>
      <GridTable title={"ECB foreign exchange reference rates"}>
        <BoxRow gapWidth={5}>
          <p>Exchange rate from day:</p>
          <p>{readableDate}</p>
        </BoxRow>
        {fetchData.map((dat, index) => (
          <TicketBox key={index} data={dat} />
        ))}
      </GridTable>
    </div>
  );
};
