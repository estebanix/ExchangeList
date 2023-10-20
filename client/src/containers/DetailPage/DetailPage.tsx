import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BoxRow } from "../../components/BoxRow";
import { Context } from "../../context/Context";
import { Caret } from "../../components/Caret";
import { GridTable } from "../../components/GridTable";

import styles from "./DetailPage.module.scss";

export const DetailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const curr = searchParams.get("curr");
  const { fetchData } = useContext(Context);

  const post = fetchData.find((post) => post.shortName === curr);

  if (!post) {
    return <p>Currency not found.</p>;
  }

  return (
    <div className={styles.detailPageContainer}>
      <GridTable title={post.country}>
        <BoxRow gapWidth={100}>
            <p>{post.move} <Caret move={post.move} /></p>
            <p>Amount: {post.amount}</p>
            <p>{post.name} ({post.shortName})</p>
        </BoxRow>
        <BoxRow gapWidth={30} title={"Valuation"}>
          <p>Buy: {post.valBuy}</p>
          <p>Sell: {post.valSell}</p>
          <p>Midpoint: {post.valMid}</p>
        </BoxRow>
        <BoxRow gapWidth={30} title={"Currency Exchange"}>
          <p>Buy: {post.currBuy}</p>
          <p>Sell: {post.currSell}</p>
          <p>Midpoint: {post.currMid}</p>
        </BoxRow>
        <BoxRow gapWidth={30} title={"Exchange Rates"}>
          <p>CNB Mid: {post.cnbMid}</p>
          <p>ECB Mid: {post.ecbMid}</p>
        </BoxRow>
      </GridTable>
    </div>
  );
};
