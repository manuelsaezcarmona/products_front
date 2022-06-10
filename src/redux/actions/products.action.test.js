import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from '../actiontypes';
import { getAllProducts } from '../../services/api';
import { uploadFileToCloud } from '../../helpers/uploadFile';
import {
  startGetAllProducts,
  setProducts,
  addProductAction,
  startAddProduct
} from './products.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  products: {
    products: [],
    productAdded: {
      productName: '',
      description: '',
      imageURL: '',
      isFavourite: false,
      price: 0,
      section: ''
    },
    searchResults: {
      itemsCount: 3,
      searchTerm: 'algo'
    }
  },
  ui: {
    currentPage: 1,
    currentFilter: '',
    currentOrder: '',
    resultsVisible: true
  }
};
let store = mockStore(initialState);

describe('Given the Products Action creators', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('SetProducts return action with Products', () => {
    const products = ['product1', 'product2'];
    const action = setProducts(products);
    expect(action).toEqual({
      type: types.productSetProducts,
      payload: products
    });
  });

  test('startGetAllProducts return action products', async () => {
    await store.dispatch(startGetAllProducts());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      payload: expect.any(Array),
      type: types.productSetProducts
    });
  });

  test('Add productAction', () => {
    const product = { productName: 'un producto' };
    const action = addProductAction(product);
    expect(action).toEqual({
      type: types.productAddProduct,
      payload: product
    });
  });

  test('Start productAction', async () => {
    const product = { productName: 'un producto' };
    const imgFile = 'ficheroImagen';
    await store.dispatch(startAddProduct(imgFile, product));
    const actions = store.getActions();
    console.log(actions);
  });
});
