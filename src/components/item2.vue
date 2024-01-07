<template>
  <div class="container-item">
    <a href="#" v-on:click="contentIn()">
      <li class="item">
        <img v-bind:src="item2.img" />

        <div class="item-footer">
          <h4>{{ item2.itemFooterH4 }}</h4>
          <p>{{ item2.itemFooterP }}</p>
        </div>
        <audio v-bind:src="item2.firstMusic"></audio>
      </li>
    </a>
    <buttonPlay v-on:click="clickPlayList()" />
  </div>
</template>

<script>
import buttonPlay from "./buttonPlay.vue";
export default {
  name: "item2",
  components: {
    buttonPlay,
  },
  props: {
    item2: Object,
  },
  methods: {
    contentIn: function () {
      this.$emit("clickItem");
    },
    clickPlayList: function () {
      this.$emit("clickButtonPlay");
    },
  },
};
</script>

<style>
.container-item:hover {
  position: relative;
}
.container-item:hover .button-play {
  visibility: visible;
  /* hien thi khi di chuot vao phan tu item thi nut play se visible(co the thay dc) */
}
.item {
  background-color: rgb(32, 32, 32);
  padding: 15px;
  box-sizing: border-box;
  border-radius: 8px;
  height: 270px;
}

.item:hover {
  background-color: rgb(42, 42, 42);
}

.item img {
  width: 100%;
  height: 150px;
  border-radius: 5px;
}
.item-footer {
}
.item-footer h4 {
  margin: 9px 0 4px;
  color: rgb(255, 255, 255);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.item-footer p {
  margin: 0;
  font-size: 13px;
  color: rgb(167, 167, 167);
  /*  */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
