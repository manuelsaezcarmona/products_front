import { types } from '../actiontypes';

export const PRODUCTS_STATE = {
  PRODUCTS: 'products',
  PRODUCT_ADDED: 'productAdded',
  SEARCH_RESULTS: 'searchResults'
};

const initialState = {
  [PRODUCTS_STATE.PRODUCTS]: [],
  [PRODUCTS_STATE.PRODUCT_ADDED]: {
    productName: '',
    description: '',
    imageURL: '',
    isFavourite: false,
    price: 0,
    section: ''
  },
  [PRODUCTS_STATE.SEARCH_RESULTS]: {
    itemsCount: 0,
    searchTerm: ''
  }
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productSetProducts:
      return {
        ...state,
        [PRODUCTS_STATE.PRODUCTS]: action.payload
      };

    case types.productSetSearchResults:
      return {
        ...state,
        [PRODUCTS_STATE.SEARCH_RESULTS]: action.payload
      };
    default:
      return state;
  }
};

// eslint-disable-next-line no-unused-vars
const productSampleData = {
  productName: 'sinfonier',
  description: 'Un sinfonier para el lado de la cama',
  imageURL: 'https://eltallerdelmueble.es/wp-content/uploads/2016/08/d012b.jpg',
  isFavourite: false,
  price: 12.99,
  section: 'habitaciones',
  __v: 0,
  id: '6298d56d8fa8f2eb4e7e24c3'
};
