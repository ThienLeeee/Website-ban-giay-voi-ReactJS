// Thư viện MongoClient giúp kết nối với MongoDB
const MongoClient = require('mongodb').MongoClient
// URL của cơ sở dữ liệu MongoDB
const url = 'mongodb://localhost:27017'
// Tên database và collection
const dbName = 'GS-DB'
// Mảng danh mục
const categories = [
  { id: 1, name: 'Adidas', img: 'logoAdidas-Black.png' },
  { id: 2, name: 'Nike', img: 'logoNike-Black.png' },
  { id: 3, name: 'Puma', img: 'logoPuma-Black.png' },
 
]
// Hàm kết nối với MongoDB và thực hiện các thao tác
async function main () {
  // Kết nối với database
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = client.db(dbName)
  await db.createCollection('categories')
  await db.collection('categories').insertMany(categories)
  client.close()
}
// Gọi hàm main
main().catch(console.error)
