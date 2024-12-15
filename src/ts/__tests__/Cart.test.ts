import Book from '../domain/Book'
import Movie from '../domain/Movie'
import MusicAlbum from '../domain/MusicAlbum'
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add Book to card', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items[0].id).toBe(1001);
});

test('add Movie to card', () => {
  const cart = new Cart();

  cart.add(new Movie(1002, 'Romeo and Juliet',  1500, 'Romantic comedy', 2011, 'USA', 'Comedy', '1h 50m'));

  expect(cart.items[0].id).toBe(1002);
});


test('add Music to card', () => {
  const cart = new Cart();

  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items[0].id).toBe(1008);
});

test('delete item from cart', () => {
  const cart = new Cart();
  cart.add(new Book(1, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(2, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items.length).toBe(2);
  cart.deleteItemFromCart(1);
  expect(cart.items.length).toBe(1);
  expect(cart.items[0].id).toBe(2);

})

test('get total price', () => {
  const cart = new Cart();
  cart.add(new Book(1, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(2, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.total).toBe(4000);
})

test('get total price with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(2, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  
  expect(cart.totalWithDiscount(50)).toBe(2000);
})