/* eslint-disable function-paren-newline */
import { useSelector } from 'react-redux';
import { PRODUCTS_STATE } from '../reducers/product.reducer';
import { UI_STATE } from '../reducers/ui.reducer';
import { ELEMENTS_PER_PAGE } from '../../services/constants';

export const selectProductsByKey = (key) =>
  useSelector((state) => state?.products[key] || []);

export const selectProductsByPage = (key, startPosition, endPosition) =>
  useSelector((state) =>
    state.products[key].filter(
      (item, index) =>
        item.indexOf(index) >= startPosition + 1 && index <= endPosition - 1
    )
  );

export const selectCurrentPage = () =>
  useSelector((state) => state?.ui[UI_STATE.CURRENT_PAGE] || 1);

export const selectCurrentFilter = () =>
  useSelector((state) => state?.ui[UI_STATE.CURRENT_FILTER]);

export const selectProductsByCurrentPage = () => {
  const products = selectProductsByKey(PRODUCTS_STATE.PRODUCTS);
  const currentPage = selectCurrentPage();

  // TODO crear un selector para el filter
  const filterValue = selectCurrentFilter();

  console.log({ filterValue });

  if (filterValue) {
    // eslint-disable-next-line no-unused-vars
    const filteredProducts = products.filter(
      (product) => product.section === filterValue
    );
    console.log(filteredProducts);
  }

  const initialPageIndex = (currentPage - 1) * ELEMENTS_PER_PAGE;
  const finalPageIndex = currentPage * ELEMENTS_PER_PAGE;

  const productsByCurrentPage = products.slice(
    initialPageIndex,
    finalPageIndex
  );
  // return products filter

  return productsByCurrentPage;
};
