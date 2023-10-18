import { Context } from "../../context/Context";
import { useContext } from "react";

import styles from "./DetailPage.module.scss";

export const DetailPage = () => {
  const {blogData} = useContext(Context);
  return <div className={styles.detailPageContainer}>
    {blogData}
  </div>;
};
