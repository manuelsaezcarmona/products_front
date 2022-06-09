import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {
  selectResultsSearch,
  selectVisibilityResults
} from '../../redux/selectors';
import { startGetAllProducts } from '../../redux/actions/products.action';
import Results from './Results';

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

const store = mockStore(initialState);

store.dispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation((selector) => selector())
}));

jest.mock('../../redux/selectors', () => ({
  selectResultsSearch: jest.fn().mockReturnValue({
    searchResults: {
      itemsCount: 3,
      searchTerm: 'algo'
    }
  }),
  selectVisibilityResults: jest.fn().mockReturnValue({
    ui: {
      resultsVisible: true
    }
  })
}));

describe('Given the Header Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </Provider>
    );
  });
  test('The component is rendered (take a snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    expect(asFragment(<Results />)).toMatchSnapshot();
  });
});
