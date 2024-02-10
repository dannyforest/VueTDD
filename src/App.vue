<script setup>
import WishList from "@/components/WishList.vue";

const sampleBooks = [
  { id: 1, title: 'The Great Gatsby' },
  { id: 2, title: 'To Kill a Mockingbird' },
  { id: 3, title: '1984' },
  { id: 4, title: 'Pride and Prejudice' },
  { id: 5, title: 'The Catcher in the Rye' },
  { id: 6, title: 'The Lord of the Rings' },
  { id: 7, title: 'The Hobbit' },
  { id: 8, title: 'Harry Potter and the Sorcerer’s Stone' },
  { id: 9, title: 'Fahrenheit 451' },
  { id: 10, title: 'Moby Dick' }
];

</script>

<template>
  <WishList :all-books="sampleBooks" />
</template>

<style scoped>

</style>
