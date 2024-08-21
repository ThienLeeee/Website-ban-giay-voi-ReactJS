// Thư viện MongoClient giúp kết nối với MongoDB
const MongoClient = require('mongodb').MongoClient
// URL của cơ sở dữ liệu MongoDB
const url = 'mongodb://localhost:27017'
// Tên database và collection
const dbName = 'GS-DB'
// Mảng sản phẩm
const products = [
  {
    id: 1,  
    name: 'Giày adidas Run 80S Nam - Đen',
    price: '2.850.000',
    categoryId: 1,
    img: 'giayAdidas1.png',
    description: 'Description 1'
  },
  {
    id: 2,
    name: 'Giày adidas VL Court Base Nam - Trắng Xanh',
    price: '2.000.000',
    categoryId: 1,
    img: 'giayAdidas2.png',
    description: 'Description 2'
  },
  {
    id: 3,
    name: 'Giày adidas VL Court Base Nam - Trắng Đen',
    price: '2.000.000',
    categoryId: 3,
    img: 'giayAdidas3.png',
    description: 'Description 3'
  },
  {
    id: 4,
    name: 'Giày adidas Run 80S Nam - Xám Đỏ',
    price: '2.850.000',
    categoryId: 1,
    img: 'giayAdidas4.png',
    description: 'Description 4'
  },
  {
    id: 5,
    name: 'Giày adidas Advancourt Base Nam - Trắng Camo',
    price: '2.000.000',
    categoryId: 1,
    img: 'giayAdidas5.png',
    description: 'Description 5'
  },
  {
    id: 6,
    name: 'Giày adidas Run 80S Nam - Xám Trắng',
    price: '2.850.000',
    categoryId: 1,
    img: 'giayAdidas6.png',
    description: 'Description 5'
  },
  {
    id: 7,
    name: 'Giày adidas Solarglide 6 Nam - Đen Trắng',
    price: '3.800.000',
    categoryId: 1,
    img: 'giayAdidas7.png',
    description: 'Description 5'
  },
  {
    id: 8,
    name: 'Giày adidas Ultraboost Light Nam - Xám Đen Xanh',
    price: '5.200.000',
    categoryId: 1,
    img: 'giayAdidas8.png',
    description: 'Description 5'
  },

  {
    id: 9,
    name: 'Giày Nike Interact Run Nam - Xanh Trắng',
    price: '2.479.000',
    categoryId: 2,
    img: 'giayNike1.png',
    description: 'Description 9'
  },
  {
    id: 10,
    name: 'Giày Nike Interact Run Nam - Đen Trắng',
    price: '2.579.000',
    categoryId: 2,
    img: 'giayNike2.png',
    description: 'Description 10'
  },
  {
    id: 11,
    name: 'Giày Nike Interact Run Nam - Trắng',
    price: '2.579.000',
    categoryId: 2,
    img: 'giayNike3.png',
    description: 'Description 11'
  },
  {
    id: 12,
    name: 'Giày Nike Interact Run SE Nam - Đen Đen',
    price: '2.879.000',
    categoryId: 2,
    img: 'giayNike4.png',
    description: 'Description 12'
  },
  {
    id: 13,
    name: 'Giày Nike Interact Run SE Nữ - Trắng',
    price: '2.479.000',
    categoryId: 2,
    img: 'giayNike5.png',
    description: 'Description 13'
  },
  {
    id: 14,
    name: 'Giày Nike Interact Run Nữ - Hồng Nhẹ',
    price: '2.479.000',
    categoryId: 2,
    img: 'giayNike6.png',
    description: 'Description 14'
  },
  {
    id: 15,
    name: 'Giày Nike ReactX Infinity 4 Premium Nam - Đen Nâu',
    price: '5.250.000',
    categoryId: 2,
    img: 'giayNike7.png',
    description: 'Description 15'
  },
  {
    id: 16,
    name: 'Giày Nike Air Zoom Structure 25 Nam - Trắng Xanh Đỏ',
    price: '3.965.000',
    categoryId: 2,
    img: 'giayNike8.png',
    description: 'Description 16'
  },
  {
    id: 17,
    name: 'Giày Puma V6 Low Nam - Trắng Xanh',
    price: '2.550.000',
    categoryId: 3,
    img: 'giayPuma1.png',
    description: 'Description 17'
  },
  {
    id: 18,
    name: 'Giày Puma V6 Low Nam - Trắng Đen',
    price: '2.550.000',
    categoryId: 3,
    img: 'giayPuma2.png',
    description: 'Description 18'
  },
  {
    id: 19,
    name: 'Giày Puma Shuffle Perforated Nam - Trắng',
    price: '2.600.000',
    categoryId: 3,
    img: 'giayPuma3.png',
    description: 'Description 19'
  },
  {
    id: 20,
    name: 'Giày Puma Caven Nam - Trắng Xanh Lá',
    price: '1.750.000',
    categoryId: 3,
    img: 'giayPuma4.png',
    description: 'Description 20'
  },
  {
    id: 21,
    name: 'Giày Puma Neo Cat Motorsport Nam - Trắng',
    price: '2.880.000',
    categoryId: 3,
    img: 'giayPuma5.png',
    description: 'Description 21'
  },
  {
    id: 22,
    name: 'Giày Puma Neo Cat Motorsport Nam - Đen',
    price: '2.880.000',
    categoryId: 3,
    img: 'giayPuma6.png',
    description: 'Description 22'
  },
  {
    id: 23,
    name: 'Giày Puma PWRFrame TR 2 Nam - Đen',
    price: '2.950.000',
    categoryId: 3,
    img: 'giayPuma7.png',
    description: 'Description 23'
  },
  {
    id: 24,
    name: 'Giày Puma Slipstream Cord Nam - Trắng Nâu',
    price: '3.200.000',
    categoryId: 3,
    img: 'giayPuma8.png',
    description: 'Description 24'
  },
  
]
// Hàm kết nối với MongoDB và thực hiện các thao tác
async function main () {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = client.db(dbName)
  await db.createCollection('products')
  await db.collection('products').insertMany(products)
  client.close()
}
// Gọi hàm main
main().catch(console.error)
