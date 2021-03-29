<template>
  <div>
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
      <ul class="nav nav-pills">
        <li class="nav-item" v-for="item in menuItems" :key="item.title"><router-link :to="item.path" class="nav-link">{{item.title}}<span v-show="item.title === 'Bag'">({{bag.length}})</span>
        </router-link></li>
      </ul>
    </nav>

    <div id="app" class="container-fluid mt-3">
      <router-view :library="library" :bag="bag" @update-bag="removeFromBag" @add-bag="addItemToBag" @empty-bag="emptyBag"></router-view>
<!--      <Library :library="library" @add-bag="addItemToBag"></Library>-->
<!--      <Bag :bag="bag" @update-bag="removeFromBag" ></Bag>-->
<!--      <button @click="emptyBag()">Empty cart</button>-->
<!--      <button class="btn btn-success" @click="updateStatus()">Checkout</button>-->
    </div>
  </div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie, Album} from "./models/LibraryItems";
import LibraryBag from "@/models/LibraryBag";




export default {
  name: 'App',
  data(){
    return {
      library: new LibraryCollection()
          .addItem(new Book('Learning Vue', 120, 10))
          .addItem(new Book('Interaction Design', 200, 8))
          .addItem(new Movie('Princess Bride', 118, 5))
          .addItem(new Movie('Strange Brew', 92, 3))
          .addItem(new Album("36 Chambers", "Wu-tang Clan", 12, 2))
          .addItem(new Album("The Dark Side of the Moon", "Pink Floyd", 9, 2 )),

      bag: new LibraryBag()

      .addCart(new Album("illmatic", "nas", 16)),

      menuItems: [
        {title: 'Items', path: '/items', icon: 'mdi-bag'},
        {title: 'Bag', path: '/bag', icon: 'mdi-cart'}
      ],

    }
  },
  components: {

  },
  methods: {
    addItemToBag(item){
      item.inCart
      console.log(item.inCart)
      this.bag.addCart(item);
    },
    emptyBag(){
      this.bag.emptyCart();
    },
    removeFromBag(item){
      this.bag.removeCartItem(item);
    },
  },



  mounted(){
    // this.library.removeItem(this.library[3]);
  }
}
</script>

<style>

/* Styles that are not scoped are like putting them in a stylesheet */
.nav-item{
  width: 100px;
  border-left: 2px solid white;
}
nav a{
  color: white;
}
.nav-item:hover{
  background-color: gray;
  cursor: pointer;

}


</style>
