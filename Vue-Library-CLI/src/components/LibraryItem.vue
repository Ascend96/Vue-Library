<template>
  <div class="card" :class="{'border-success': item.isAvailable(), 'border-warning': !item.isAvailable()}">
    <component :is="typeOfItem" :item="item" class="card-body"></component>
    <div class="card-footer">
      <button v-if="item.isAvailable() && !isBag" @click="item.checkOut()" class="btn btn-success">Checkout</button>
      <button v-if="!item.isAvailable() && !isBag" @click="item.checkIn()" class="btn btn-warning">Return</button>
      <button v-if="item.remove" class="btn btn-danger" @click="item.remove()">Delete</button>
      <button class="btn btn-dark" v-if="!isBag" @click="addToBag(item)">Add to Bag</button>
      <button class="btn btn-warning" v-if="isBag" @click="removeFromBag(item)" >Remove from cart</button>

    </div>
  </div>
</template>

<script>
import Book from "@/components/Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";
export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album
  },
  props: {
    item: {
      type: Object,
      required: true,
    },

  },


  methods: {
    addToBag(item){
      console.log("Emitting add-bag from library item")
      this.$emit('add-bag', item)
    },
    removeFromBag(item){
      this.$emit('update-bag', item)
    }
  },

  computed: {
    typeOfItem() {
      return this.item.constructor.name;
    },
    isBag(){
      return this.$route.path === '/bag';
    },
  },
}
</script>

<style scoped>

</style>