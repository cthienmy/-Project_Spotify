<template>
  <div class="containerList2">
    <a href="#">
      <h2>{{ list2.titleList }}</h2>
    </a>
    <ul class="list ">
      <item2 v-bind:item2="item2" v-for="(item2, index) in list2.itemContent" v-bind:key="index"
        v-on:clickItem="contentIn(item2)" v-on:clickButtonPlay="enterPlay(item2)" />
    </ul>
  </div>
</template>

<script>
import item2 from "./item2.vue";
export default {
  name: "container2",
  components: {
    item2,
  },
  props: {
    list2: Object,
  },
  data() {
    return {};
  },
  methods: {
    contentIn: function (itemContentIn) {
      this.$emit("clickItem", itemContentIn);
    },
    enterPlay: function (itemPlay) {
      this.$emit("clickButtonPlay", itemPlay);
    },
  },
};
</script>

<style>
.containerList2 h2 {
  margin: 20px 0;
  font-size: larger;
}

.list {
  display: flex;
  justify-content: space-between;
  /* grid-template-columns: 18% 18% 18% 18% 18%; */
  padding: 0;
  list-style-type: none;
  /* overflow: hidden; */
  /* white-space: nowrap; */
}

.list a {
  width: 100%;
}

.containerList2 {}

.containerList2 a {
  color: white;
}

.containerList2 a:hover {
  text-decoration: underline;
}

.list a:hover {
  text-decoration: none;
}
</style>
