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

export const selectUiByKey = (key) =>
  useSelector((state) => state?.ui[key] || '');

//---------

/* const selectCurrentPage = () =>
  useSelector((state) => state?.settings?.currentPage || 1);

export const selectProducts = () =>
  useSelector((state) => state?.products?.products || []); */

export const selectProductsByCurrentPage = () => {
  // eslint-disable-next-line no-unused-vars
  const productsByCurrentPage = useSelector((state) => {
    const products = selectProductsByKey(PRODUCTS_STATE.PRODUCTS);
    const currentPage = selectUiByKey(UI_STATE.CURRENT_PAGE);

    const initialPageIndex = (currentPage - 1) * ELEMENTS_PER_PAGE;
    const finalPageIndex = currentPage * ELEMENTS_PER_PAGE;

    return products.slice(initialPageIndex, finalPageIndex);
  });

  return productsByCurrentPage;
};
