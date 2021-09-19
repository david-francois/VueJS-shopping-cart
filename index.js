const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "titre 1",
        date: "2006-9",
        price: 85.0,
        count: 1
      },
      {
        id: 2,
        name: "titre 2",
        date: "2006-2",
        price: 50.0,
        count: 1
      },
      {
        id: 3,
        name: "titre 3",
        date: "2008-10",
        price: 39.0,
        count: 1
      },
      {
        id: 4,
        name: "titre 4",
        date: "2012-3",
        price: 25.0,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      }, 0);
    }
  },
  filters: {
    showPrice(price) {
      return "$" + price.toFixed(2);
    }
  }
});
