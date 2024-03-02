<template>
  <div class="container-item 2xl:basis-[19%] xl:basis-1/4 2xl:shrink xl:shrink-0">
    <a href="#" v-on:click="contentIn()">
      <li class="item">
        <img v-bind:src="item2.img" />

        <div class="item-footer">
          <h4>{{ item2.itemFooterH4 }}</h4>
          <p>{{ item2.itemFooterP }}</p>
        </div>
      </li>
    </a>
    <buttonPlay v-on:click="enterPlay()" v-if="item2.run === false" class="item-button" />
    <buttonPause v-on:click="enterPlay()" v-else class="item-button" />
  </div>
</template>

<script>
import buttonPlay from "./buttonPlay.vue";
import buttonPause from "./buttonPause.vue";
export default {
  name: "item2",
  components: {
    buttonPlay,
    buttonPause,
  },
  props: {
    item2: Object,
  },
  methods: {
    contentIn: function () {
      this.$emit("clickItem");
    },
    enterPlay: function () {
      this.$emit("clickButtonPlay");
      console.log("item2.run", this.item2.run);
    },
  },
};
</script>

<style>
.container-item {
  /* width: 19%; */
  /* margin: 5px; */
  flex-shrink: 0;

}

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

.item-button {
  visibility: hidden;
  position: absolute;
  right: 13px;
  top: 112px;
}
</style>
