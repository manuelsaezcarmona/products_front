// import { types } from '../actiontypes';

const initialState = {
  products: [
    {
      productName: 'sinfonier',
      description: 'Un sinfonier para el lado de la cama',
      imageURL: 'https://eltallerdelmueble.es/wp-content/uploads/2016/08/d012b.jpg',
      isFavourite: false,
      price: 12.99,
      section: 'habitaciones',
      __v: 0,
      id: '6298d56d8fa8f2eb4e7e24c3'
    },
    {
      productName: 'mampara',
      description: 'Mampara de ducha para el baño',
      imageURL:
        'https://www.decorabano.com/media/uploaded_images/mampara-frontal-1fijo-1corredera-bro-torvisco.jpg.1920x1920_q85_box-0%2C0%2C2366%2C2366_crop_detail.jpg',
      isFavourite: true,
      price: 64.99,
      section: 'habitaciones',
      __v: 0,
      id: '6298d64f955b7b7648a8c40d'
    }
  ],
  productAdded: {
    productName: 'sinfonier',
    description: 'Un sinfonier para el lado de la cama',
    imageURL: 'https://eltallerdelmueble.es/wp-content/uploads/2016/08/d012b.jpg',
    isFavourite: false,
    price: 12.99,
    section: 'habitaciones',
    __v: 0,
    id: '6298d56d8fa8f2eb4e7e24c3'
  },
  Allproducts: [
    {
      productName: 'sinfonier',
      description: 'Un sinfonier para el lado de la cama',
      imageURL: 'https://eltallerdelmueble.es/wp-content/uploads/2016/08/d012b.jpg',
      isFavourite: false,
      price: 12.99,
      section: 'habitaciones',
      __v: 0,
      id: '6298d56d8fa8f2eb4e7e24c3'
    },
    {
      productName: 'mampara',
      description: 'Mampara de ducha para el baño',
      imageURL:
        'https://www.decorabano.com/media/uploaded_images/mampara-frontal-1fijo-1corredera-bro-torvisco.jpg.1920x1920_q85_box-0%2C0%2C2366%2C2366_crop_detail.jpg',
      isFavourite: true,
      price: 64.99,
      section: 'habitaciones',
      __v: 0,
      id: '6298d64f955b7b7648a8c40d'
    },
    {
      productName: 'mampara A BORRAR',
      description: 'Mampara de ducha para el baño',
      imageURL:
        'https://www.decorabano.com/media/uploaded_images/mampara-frontal-1fijo-1corredera-bro-torvisco.jpg.1920x1920_q85_box-0%2C0%2C2366%2C2366_crop_detail.jpg',
      isFavourite: true,
      price: 64.99,
      section: 'habitaciones',
      __v: 0,
      id: '6298d674955b7b7648a8c40f'
    },
    {
      productName: 'Mesa de comedor madera maciza de acacia',
      description:
        'Esta llamativa mesa de comedor tiene un estilo distintivo y natural y será un gran aporte para su comedor o cocina.',
      imageURL:
        'https://images.ssstatic.com/mesa-de-comedor-madera-maciza-de-acacia-180x90-cm-71251664z0-16471267.jpg',
      isFavourite: true,
      price: 104.99,
      section: 'comedor',
      __v: 0,
      id: '6298d8cf955b7b7648a8c411'
    },
    {
      productName: 'Mesa de baño en madera',
      description: 'productos en madera para darle a tu baño un toque en estilo natural',
      imageURL:
        'https://assets.leroymerlin.es/is/image/lmes/15769985-0400/estanteria-2-estantes-lotus-madera-27x70.jpg?$lmesBgMobile$&fit=constrain,0',
      isFavourite: false,
      price: 85.99,
      section: 'baño',
      __v: 0,
      id: '6298d964955b7b7648a8c413'
    },
    {
      productName: 'jarron',
      description: 'productos en madera para darle a tu baño un toque en estilo natural',
      imageURL:
        'https://assets.leroymerlin.es/is/image/lmes/15769985-0400/estanteria-2-estantes-lotus-madera-27x70.jpg?$lmesBgMobile$&fit=constrain,0',
      isFavourite: false,
      price: 15.99,
      section: 'baño',
      __v: 0,
      id: '6298de51913731ca34285593'
    },
    {
      productName: 'jarron',
      description: 'productos en madera para darle a tu baño un toque en estilo natural',
      imageURL:
        'https://assets.leroymerlin.es/is/image/lmes/15769985-0400/estanteria-2-estantes-lotus-madera-27x70.jpg?$lmesBgMobile$&fit=constrain,0',
      isFavourite: false,
      price: 15.99,
      section: 'baño',
      __v: 0,
      id: '6299a10982a73cce5c5cc243'
    }
  ],
  filteredProducts: [
    {
      productName: 'Mesa de comedor madera maciza de acacia',
      description:
        'Esta llamativa mesa de comedor tiene un estilo distintivo y natural y será un gran aporte para su comedor o cocina.',
      imageURL:
        'https://images.ssstatic.com/mesa-de-comedor-madera-maciza-de-acacia-180x90-cm-71251664z0-16471267.jpg',
      isFavourite: true,
      price: 104.99,
      section: 'comedor',
      __v: 0,
      id: '6298d8cf955b7b7648a8c411'
    },
    {
      productName: 'Mesa de baño en madera',
      description: 'productos en madera para darle a tu baño un toque en estilo natural',
      imageURL:
        'https://assets.leroymerlin.es/is/image/lmes/15769985-0400/estanteria-2-estantes-lotus-madera-27x70.jpg?$lmesBgMobile$&fit=constrain,0',
      isFavourite: false,
      price: 85.99,
      section: 'baño',
      __v: 0,
      id: '6298d964955b7b7648a8c413'
    }
  ]
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
