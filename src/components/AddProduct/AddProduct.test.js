import { render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import AddProduct from './AddProduct';

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
      itemsCount: 0,
      searchTerm: ''
    }
  },
  ui: {
    currentPage: 1,
    currentFilter: '',
    currentOrder: '',
    resultsVisible: false
  }
};

const store = mockStore(initialState);

describe('Given the AddProduct Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddProduct />
        </BrowserRouter>
      </Provider>
    );
  });
  test('then must be rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddProduct />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<AddProduct />)).toMatchSnapshot();
  });
  test('then when the favourite is clicked call to handleFavourite', () => {
    const favouriteCheck = screen.getByRole('checkbox');

    userEvent.click(favouriteCheck);
    expect(favouriteCheck.value).toBe('true');
  });
});
