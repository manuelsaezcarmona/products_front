// EndPoints

// localhost:8000/api/products/search?term=sin -- Query

// localhost:8000/api/products/  -POST

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
