<template>
  <div>
    <ul>
      <li v-for="book in allBooks" :key="book.id" :class="{ inWishlist: isBookInWishlist(book) }">
        {{ book.title }}
        <!-- Add Book Button -->
        <button v-if="!isBookInWishlist(book)" @click="addBookToWishList(book)">
          <span class="icon">+</span>
        </button>
        <!-- Remove Book Button -->
        <button v-if="isBookInWishlist(book)" @click="removeBookFromWishList(book.id)">
          <span class="icon">-</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WishList',
  props: {
    allBooks: Array
  },
  data() {
    return {
      wishlist: []
    };
  },
  methods: {
    /**
     * Adds a book to the wishlist.
     *
     * @param {Object} book - The book object to be added to the wishlist.
     *
     * @returns {void} - This method does not return anything.
     */
    addBookToWishList(book) {
      if (!this.isBookInWishlist(book))
        this.wishlist.push(book);
    },

    /**
     * Removes a book from the wishlist.
     *
     * @param {number} bookId - The id of the book to be removed.
     */
    removeBookFromWishList(bookId) {
      this.wishlist = this.wishlist.filter(book => book.id !== bookId);
    },

    /**
     * Checks if a book is in the wishlist.
     *
     * @param {Object} book - The book object to be checked.
     * @return {boolean} - True if the book is in the wishlist, false otherwise.
     */
    isBookInWishlist(book) {
      return this.wishlist.some(item => item.id === book.id);
    }
  }
};
</script>

<style>
/* Styling for when a book is in the wishlist */
.inWishlist {
  color: blue;
}

/* Styling for the icons */
.icon {
  font-weight: bold;
}
</style>
