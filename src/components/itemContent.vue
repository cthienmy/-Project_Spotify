<template>
  <div class="container-item">
    <!-- header -->
    <div class="container-item-header">
      <!-- thanh tuy chon -->
      <tabBar v-on:clickBack="clickBack" />
      <!--  -->
      <div class="container-item-header1">
        <img v-bind:src="album.itemContentImg" />
        <div class="container-item-header-title">
          <p>Playlist</p>
          <h1>{{ album.itemFooterH4 }}</h1>
          <p>
            {{ album.itemFooterP }}
          </p>
          <div class="container-item-header-title-div">
            <div><img src="/iconspotify.jpeg" /></div>
            <span>
              <a href="#">Spotify</a>
              <span class="dot"> .</span> 229,487 likes
              <span class="dot"> .</span> 52 songs,
              <span class="text"> about 3 hr 15 min</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- body -->
    <div class="container-item-body">
      <div class="container-item-body-header">
        <div class="container-item-body-header1">
          <!-- button play -->
          <!-- <button class="container-item-body-header1-1">
            <ion-icon name="caret-forward-outline"></ion-icon>
          </button> -->
          <buttonPlay v-on:click="enterPlay()" class="container-item-body-header1-1" v-if="album.run === false" />
          <buttonPause v-on:click="enterPlay()" class="container-item-body-header1-1" v-else />
          <!--  -->
          <button class="container-item-body-header1-2">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button class="container-item-body-header1-3">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </button>
        </div>
        <!--  -->
        <button class="container-item-body-header2">
          <p>List</p>
          <div>
            <ion-icon name="list-outline"></ion-icon>
          </div>
        </button>
      </div>
      <div class="container-item-body-list">
        <!--  -->
        <div class="list-header">
          <div class="list-header-stt">#</div>
          <div class="list-header-title">Title</div>
          <div class="list-header-album">Album</div>
          <div class="list-header-date">Date added</div>
          <div class="list-header-time">
            <ion-icon name="time-outline"></ion-icon>
          </div>
        </div>
        <!--list row  -->
        <itemContentListRow v-bind:itemRow="itemRow" v-bind:index="index" v-for="(itemRow, index) in album.listRow"
          v-bind:key="index" />
        <!-- <itemContentListRow/> -->
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "./tabBar.vue";
import itemContentListRow from "./itemContentListRow.vue";
import buttonPlay from "./buttonPlay.vue";
import buttonPause from "./buttonPause.vue";

export default {
  name: "containerItemClick",
  components: {
    tabBar,
    itemContentListRow,
    buttonPause,
    buttonPlay
  },
  props: {
    album: Object,
    enterPlay: Function

  },
  data() {
    return {};
  },
  methods: {
    clickBack: function () {
      this.$emit("clickBack");
    },
    enterPlay: function () {
      this.$emit("clickButtonPlay", this.album);
    },

  },

};
</script>

<style>
.container-item {}

/* /////// */
.container-item-header {
  color: rgb(255, 255, 255);
  padding: 92px 25px 25px;
  background-color: rgb(84, 96, 108);
}

.container-item-header1 {
  display: flex;
}

.container-item-header img {
  width: 230px;
  height: 230px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.4);
}

.container-item-header-title {
  align-self: flex-end;
}

.container-item-header-title p {
  color: rgb(199, 201, 207);
  font-size: 13px;
  margin: 0;
}

.container-item-header-title h1 {
  font-size: 95px;
  letter-spacing: -6px;
  word-spacing: -5px;
  margin: 0px 0 16px;
}

.container-item-header-title-div {
  display: flex;
  font-size: 13px;

  font-weight: 500;
}

.container-item-header-title-div div {
  display: flex;
  align-items: end;
}

.container-item-header-title-div img {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 50%;
}

.container-item-header-title-div a {
  color: white;
  font-weight: 600;
}

.container-item-header-title-div a:hover {
  text-decoration: underline;
}

.text {
  color: rgb(199, 201, 207);
}

.dot {
  font-size: 24px;
  position: relative;
  bottom: 2px;
}

/*  */
.container-item-body {
  padding: 20px 25px;
  background-color: rgb(18, 18, 18);
}

.container-item-body-header {
  display: flex;
  justify-content: space-between;
}

.container-item-body-header1 {
  display: flex;
}

.container-item-body-header1-1 {
  /* border: none;
  padding: 0; */
  /* font-size: 30px; */
  /* margin-right: 10px; */
  width: 55px;
  height: 55px;
  /* display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(30, 215, 96); */
}

.container-item-body-header1-2 {
  border: none;
  padding: 0;
  font-size: 40px;
  margin: 10px;
  background-color: inherit;
  color: rgb(167, 167, 167);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-item-body-header1-3 {
  border: none;
  padding: 0;
  font-size: 30px;
  margin: 10px;
  background-color: inherit;
  color: rgb(167, 167, 167);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-item-body-header2 {
  display: flex;
  border: none;
  padding: 0;
  background-color: inherit;
  color: rgb(167, 167, 167);
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.container-item-body-header2 p {
  font-size: 13px;
  margin-right: 8px;
}

.container-item-body-header2 div {
  display: flex;
  font-size: 22px;
}

/*  */
.container-item-body-list {}

.container-item-body-list {
  color: rgb(167, 167, 167);
  padding: 20px 0;
  font-size: 13px;
}

.list-header {
  display: flex;
  border-bottom: 1px solid rgb(57, 54, 54);
  padding-bottom: 10px;
  font-weight: 400;
  margin-bottom: 15px;
}

.list-header-stt {
  width: 5%;
  display: flex;
  justify-content: center;
  font-size: 17px;
}

.list-header-title {
  width: 35%;
  align-self: center;
}

.list-header-album {
  width: 25%;
  align-self: center;
}

.list-header-date {
  width: 25%;
  align-self: center;
}

.list-header-time {
  width: 10%;
  display: flex;
  justify-content: center;
  align-self: center;
}

/*  */
.list-row {
  display: flex;
  padding: 7px 0;
}

.list-row:hover {
  background-color: rgb(51, 53, 55);
  border-radius: 5px;
}

.list-row:hover .list-row-album a {
  color: white;
}

.list-row:hover .singer a {
  color: white;
}

.list-row-stt {
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}

.list-row-title {
  display: flex;
  align-items: center;
  width: 35%;
}

.list-row-title img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 13px;
}

.list-row-title a {
  color: rgb(167, 167, 167);
}

.list-row-title a:hover {
  text-decoration: underline white;
}

.list-row-title h3 {
  margin: 0;
  font-weight: 400;
  color: white;
}

.list-row-album {
  width: 25%;
  align-self: center;
}

.list-row-album a {
  color: rgb(167, 167, 167);
}

.list-row-album a:hover {
  text-decoration: underline white;
}

.list-row-date {
  width: 25%;
  align-self: center;
}

.list-row-time {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
