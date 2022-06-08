import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { selectResultsSearch } from '../../redux/selectors';

export default function Results() {
  const { itemsCount, searchTerm } = selectResultsSearch();

  const handleCloseClick = () => {
    console.log('Cierra la ventana');
  };

  return (
    <div className={styles.results}>
      <p className={styles.results__content}>{itemsCount} Items found</p>
      <h2 className={styles.results__title}>Search Results</h2>
      <h2 className={styles.results__title}>for {searchTerm}</h2>
      <CloseOutlined
        className={styles.results__closeIcon}
        onClick={handleCloseClick}
      />
    </div>
  );
}
