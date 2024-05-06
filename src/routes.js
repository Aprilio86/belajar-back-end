const {
  addBookHandler,
  getAllBooksHandler,
  DetailBukuByIdHandler,
  editBukuByIdHandler,
  hapusBukuByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: DetailBukuByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBukuByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: hapusBukuByIdHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
