const SHOP_DATA = {
  electronics: {
    id: 1,
    title: 'Electronics',
    routeName: 'electronics',
    items: [
      {
        id: 1,
        name: 'Boombox',
        imageUrl: 'https://images.unsplash.com/photo-1553983064-cda95e72a013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 2,
        name: 'RC Car',
        imageUrl: 'https://images.unsplash.com/photo-1532262018599-7083eccdb058?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',        
        price: 18
      },
      {
        id: 3,
        name: 'Classic Football Game',
        imageUrl: 'https://images.unsplash.com/photo-1551306683-9e7cf1661af1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 35
      },
      {
        id: 4,
        name: 'Gamer Kit',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 40
      },
      {
        id: 5,
        name: 'Transistor Radio',
        imageUrl: 'https://images.unsplash.com/photo-1452451312475-5055e48f74cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 18
      },
      {
        id: 6,
        name: 'Vinyl Player',
        imageUrl: 'https://images.unsplash.com/photo-1558114073-e77f284dfb76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 65
      },
      {
        id: 7,
        name: 'Turntable',
        imageUrl: 'https://images.unsplash.com/photo-1554583336-04e5635e7b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 18
      },
      {
        id: 8,
        name: 'Projector',
        imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 14
      },
      {
        id: 9,
        name: 'CRT TV',
        imageUrl: 'https://images.unsplash.com/photo-1478810505243-bf4b28879382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 200
      }
    ]
  },
  cameras: {
    id: 2,
    title: 'Cameras',
    routeName: 'cameras',
    items: [
      {
        id: 10,
        name: 'SLR Camera',
        imageUrl: 'https://images.unsplash.com/photo-1534133925155-47fccbf87b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 90
      },
      {
        id: 11,
        name: 'Polaroid Impulse AF',
        imageUrl: 'https://images.unsplash.com/photo-1563691189804-87116b3142f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 50
      },
      {
        id: 12,
        name: 'Polaroid I-Type',
        imageUrl: 'https://images.unsplash.com/photo-1543068755-56b3a329621c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        price: 83
      },
      {
        id: 13,
        name: 'Pink and Grey Polaroid',
        imageUrl: 'https://images.unsplash.com/photo-1496889050590-4db81f7fb62a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 14,
        name: 'Kodak Instamatic',
        imageUrl: 'https://images.unsplash.com/photo-1472950755543-5293dbab893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 79
      },
      {
        id: 15,
        name: 'Canon Camera',
        imageUrl: 'https://images.unsplash.com/photo-1483009825281-660b2a20024b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1200
      },
      {
        id: 16,
        name: 'Polaroid',
        imageUrl: 'https://images.unsplash.com/photo-1561390454-c8b134d8a7ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1900
      },
      {
        id: 17,
        name: 'Sabre',
        imageUrl: 'https://images.unsplash.com/photo-1478810505243-bf4b28879382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 200
      }
    ]
  },
  accessories: {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 18,
        name: 'Assorted Signs',
        imageUrl: 'https://images.unsplash.com/photo-1554597998-9e7267a77b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 15
      },
      {
        id: 19,
        name: 'Cassettes',
        imageUrl: 'https://images.unsplash.com/photo-1524779709304-40b5a3560c60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',        
        price: 15
      },
      {
        id: 20,
        name: 'Old Pepsi Can',
        imageUrl: 'https://images.unsplash.com/photo-1531384370597-8590413be50a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 10
      },
      {
        id: 21,
        name: 'Vinyl Records',
        imageUrl: 'https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 19
      },
      {
        id: 22,
        name: 'White Cloves Case',
        imageUrl: 'https://images.unsplash.com/photo-1489727271757-9e21682263e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 185
      }
    ]
  },
  shoes: {
    id: 4,
    title: 'Shoes',
    routeName: 'shoes',
    items: [
      {
        id: 23,
        name: 'Nike Jordan 1s',
        imageUrl: 'https://images.unsplash.com/photo-1549711923-1eb6eceab15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 90
      },
      {
        id: 24,
        name: 'Adidas Teal and Orange Sneakers',
        imageUrl: 'https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 25,
        name: 'Nike Air Max 90s',
        imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 26,
        name: 'Roller Skates',
        imageUrl: 'https://images.unsplash.com/photo-1531923361649-96d191cf56ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 65
      },
      {
        id: 27,
        name: 'Low Top Vans',
        imageUrl: 'https://images.unsplash.com/photo-1531185038189-41815d864f32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 63
      },
      {
        id: 28,
        name: 'High Top Vans',
        imageUrl: 'https://images.unsplash.com/photo-1503506870038-6fdbcb0ea01a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        price: 63
      },
      {
        id: 29,
        name: 'Black Converse',
        imageUrl: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 50
      }
    ]
  },
  apparel: {
    id: 5,
    title: 'Apparel',
    routeName: 'apparel',
    items: [
      {
        id: 30,
        name: 'Pink Floyd Shirt',
        imageUrl: 'https://images.unsplash.com/photo-1552311320-75341a68c85a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 325
      },
      {
        id: 31,
        name: 'Blue Fanny Pack',
        imageUrl: 'https://images.unsplash.com/photo-1562672865-5f70838f816b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 20
      },
      {
        id: 32,
        name: 'Wind Breaker',
        imageUrl: 'https://images.unsplash.com/photo-1533656812321-1868a4d2b72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 33,
        name: 'Sunglasses',
        imageUrl: 'https://images.unsplash.com/photo-1517466879096-b1cc68d6d983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 34,
        name: 'White Spaghetti Strap',
        imageUrl: 'https://images.unsplash.com/photo-1520065879293-40d7f1e72c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 40
      },
      {
        id: 35,
        name: 'Green Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1524667857789-4c473936e46c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;