import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/Context';

import styles from './DetailPage.module.scss';

export const DetailPage = () => {
  const { shortName } = useParams(); 
  const { fetchData } = useContext(Context);

  const post = fetchData.find(post => post.shortName === shortName);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className={styles.detailPageContainer}>
      <p>{post.country}</p>
      <p>{post.name}</p>
      <p>{post.shortName}</p>
    </div>
  );
};
