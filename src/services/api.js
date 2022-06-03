// EndPoints

// localhost:8000/api/products/search?term=sin -- Query

export const getAllProducts = async () => {
  // localhost:8000/api/products/  - GETALL
  const baseURL = process.env.REACT_APP_API_URL;
  const collection = 'api/products';
  try {
    const resp = await fetch(`${baseURL}/${collection}/`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductsBySearch = async (term) => {
  // localhost:8000/api/products/search?term=mampara
  const baseURL = process.env.REACT_APP_API_URL;
  const collection = 'api/products';
  const resource = 'search?term';
  try {
    const resp = await fetch(`${baseURL}/${collection}/${resource}=${term}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const addProduct = async (
  productName,
  description,
  imageURL,
  isFavourite,
  price,
  section
) => {
  const product = { productName, description, imageURL, isFavourite, price, section };

  // localhost:8000/api/products/  -POST
  const baseURL = process.env.REACT_APP_API_URL;
  const collection = 'api/products';

  try {
    const resp = await fetch(`${baseURL}/${collection}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(product)
    });
    const result = resp.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
