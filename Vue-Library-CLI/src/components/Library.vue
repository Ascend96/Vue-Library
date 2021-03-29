<template>
  <div class="card-columns">
    <LibraryItem v-for="(thing, i) in library" :item="thing" :key="i" @add-bag="addToBag"></LibraryItem>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
export default {
  name: "Library",
  components: {
    LibraryItem
  },
  props: {
    library: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToBag(item) {
      console.log("emitting event from library")
      this.$emit('add-bag', item);
    }
  }

}
</script>

<style scoped>

</style>