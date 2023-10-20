import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BoxRow } from "../../components/BoxRow";
import { Context } from "../../context/Context";
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
        <BoxRow gapWidth={20}>
        <p>{post.name}</p> 
        <p>{post.shortName}</p>
        <p>{post.move}</p>
        </BoxRow>
        <p>{post.amount}</p>
        <BoxRow gapWidth={20} title={"Val"}>
        <p>{post.valBuy}</p>
        <p>{post.valSell}</p>
        <p>{post.valMid}</p>
        </BoxRow>
        <BoxRow gapWidth={20}>
        <p>{post.currBuy}</p>
        <p>{post.currSell}</p>
        <p>{post.currMid}</p>
        </BoxRow>
        <p>{post.cnbMid}</p>
        <p>{post.ecbMid}</p>
      </GridTable>
    </div>
  );
};
