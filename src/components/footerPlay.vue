<template>
  <div class="footer xl:p-3.5 lg:p-2.5 md:p-2 p-1.5 xl:h-[13.5vh] lg:h-[11.5vh] md:h-[10vh] h-[8vh]">
    <!--footer-left  -->
    <div class="footer-left">
      <a href="#" class="footer-left-img">
        <!-- responsive -->
        <img v-bind:src="containerFooter.listRow[0].titleImg" class=" xl:w-14 lg:w-12 w-10 " />
      </a>
      <div class="footer-title ">
        <a href="#">
          <h5 class="footer-title-p lg:text-[16px] text-[13px]">{{ containerFooter.listRow[0].titleH3 }}</h5>
        </a>
        <a href="#">
          <p class="footer-title-p lg:text-[11px] text-[9px]">
            {{ containerFooter.listRow[0].titleSinger1 }},
            {{ containerFooter.listRow[0].titleSinger2 }}
          </p>
        </a>
      </div>
      <button><i class="el-icon-circle-plus-outline"></i></button>
    </div>
    <!--footer-middel  -->
    <!-- responsive -->
    <div class="footer-middel">
      <div class="footer-middelTop">
        <!-- * play Speed -->
        <button class="footer-middelTop1 xl:text-xl lg:text-lg md:text-base text-sm" type="radio"
          v-on:click="playSpeed()">
          2x
        </button>
        <!-- * loop Song -->
        <button class="footer-middelTop1 xl:text-xl lg:text-lg md:text-base text-sm" v-on:click="playLoop()">
          <ion-icon name="shuffle-outline"></ion-icon>
        </button>
        <!-- * back Song -->
        <button class="footer-middelTop1 xl:text-xl lg:text-lg md:text-base text-sm" v-on:click="backSong()"
          v-bind:disabled="index === 0">
          <ion-icon name="play-skip-back-outline"></ion-icon>
        </button>
        <!-- * button Play -->
        <audio id="enter-audio"></audio>
        <button v-if="containerFooter.run === false" class="footer-middelTop3 xl:text-4xl lg:text-3xl md:text-2xl text-xl"
          v-on:click="enterPlay()">
          <ion-icon name="play-circle-outline"></ion-icon>
        </button>
        <!-- * button pause -->
        <button v-else class="footer-middelTop3 xl:text-4xl lg:text-3xl md:text-2xl text-xl" v-on:click="enterPlay()">
          <ion-icon name="pause-circle-outline"></ion-icon>
        </button>
        <!-- * next Song -->
        <button class="footer-middelTop1 xl:text-xl lg:text-lg md:text-base text-sm" v-on:click="nextSong()">
          <ion-icon name="play-skip-forward-outline"></ion-icon>
        </button>
      </div>
      <!-- * thanh bar % -->
      <!-- responsive -->
      <div class="footer-middelBottom">
        <div class="footer-middelBottomTime">
          {{ containerFooterVariable.timePlay1 }}:{{ containerFooterVariable.timePlay2 }}
        </div>

        <div class="footer-middelBottomPlay xl:w-[450px] lg:w-80 md:w-60 w-40">
          <input class="rangebar" type="range" max="100" min="0" step="1" v-bind:value="containerFooterVariable.value"
            v-on:change="changeSong" />
          <!--  -->
        </div>
        <div class="footer-middelBottomTime">
          {{ containerFooterVariable.totleTime1 }}:{{ containerFooterVariable.totleTime2 }}
        </div>
      </div>
    </div>
    <!--footer-right -->
    <div class="footer-right">

      <button class="footer-right2 xl:text-xl lg:text-lg md:text-base text-sm">
        <ion-icon name="reorder-four-outline"></ion-icon>
      </button>
      <div class="footer-right2 xl:text-xl lg:text-lg md:text-base text-sm"><i class="el-icon-set-up"></i></div>
      <button class="footer-right2 xl:text-xl lg:text-lg md:text-base text-sm" v-on:click="stopVolume()"
        v-if="stopVl === false">
        <ion-icon name="volume-high-outline"></ion-icon>
      </button>
      <button class="footer-right2 xl:text-xl lg:text-lg md:text-base text-sm" v-on:click="stopVolume()" v-else>
        <ion-icon name="volume-mute-outline"></ion-icon>
      </button>
      <!-- * volume bar -->
      <input class="footer-right3 xl:w-28 lg:w-20 md:w-16 w-14" type="range" max="100" min="0"
        v-bind:value="containerFooterVariable.valueVolume" v-on:change="changeVolume" />
      <!--  -->
      <button class="footer-right2 xl:text-xl lg:text-lg md:text-base text-sm ">
        <ion-icon name="desktop-outline"></ion-icon>
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "footerPlay",
  props: {
    containerFooter: Object,
    nextSong: Function,
    backSong: Function,
    playLoop: Function,
    playSpeed: Function,
    containerFooterVariable: Object,
    changeSong: Function,
    changeVolume: Function,
    stopVolume: Function,
    stopVl: Boolean,
    // enterPlay: Function,


  },
  data() {
    return {

    };
  },
  methods: {
    enterPlay: function () {
      this.$emit("clickButtonPlay", this.containerFooter);
    },


  },
};
</script>

<style>
.footer {
  /* height: 13.5vh; */
  /* padding: 15px; */
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.footer-left {
  display: flex;
  box-sizing: border-box;
}

.footer-left img {

  border-radius: 5px;
  margin-right: 15px;
}

.footer-left-img {
  display: flex;
  align-items: center;
}

.footer-title {
  align-self: center;
  margin-right: 25px;
}

.footer-title h5 {
  font-weight: 500;
  margin: 0;
  color: rgb(250, 250, 250);
}

.footer-title p {
  /* font-size: 11px; */
  margin: 0;
  color: rgb(179, 179, 179);
}

.footer-left button {
  padding: 0;
  align-self: center;
  font-size: 19px;
  color: rgb(179, 179, 179);
  background-color: rgb(0, 0, 0);
  border: none;
}

.footer-middel {
  box-sizing: border-box;
}

.footer-middelTop {
  display: flex;
  justify-content: center;
  color: rgb(179, 179, 179);
}

.footer-middelTop1 {
  /* font-size: 20px; */
  margin: 0 15px;
  align-self: center;
  display: flex;
  padding: 0;
  cursor: auto;
  background-color: black;
  color: rgb(179, 179, 179);
  border: none;
}

.footer-middelTop1:hover {
  color: white;
}

.footer-middelTop3:hover {
  color: white;
}

.footer-middelTop3 {
  /* font-size: 35px; */
  margin: 0 15px;
  display: flex;
  padding: 0;
  cursor: auto;
  background-color: black;
  color: rgb(179, 179, 179);
  border: none;
}

.footer-middelBottom {
  display: flex;
  margin-top: 12px;
}

.footer-middelBottomTime {
  font-size: 12px;
  color: rgb(164, 164, 164);
  margin: 0;
  line-height: 5px;
}

.footer-middelBottomPlay {
  /* width: 450px; */
  margin: 0 7px;
}

.rangebar {
  width: 100%;
  height: 3px;
  background-color: rgb(77, 77, 77);
  -webkit-appearance: none;
  /* none de ngan kieu hien thi mac dinh cuar thanh truot */
  overflow: hidden;
  border-radius: 10px;
  display: flex;
}

.rangebar::-webkit-slider-thumb {
  /* tao kieu cho nut keo trong thanh truot */
  -webkit-appearance: none;
  background: rgb(77, 77, 77);
  width: 0px;
  height: 5px;
  opacity: 1;
  box-shadow: -300px 0px 0px 300px rgb(30, 215, 96);
}

.rangebar::-webkit-slider-thumb:hover {
  background: white;
}

/* eeeeeeeeeeee */
.footer-right {
  display: flex;
}



.footer-right2 {
  padding: 0;
  align-self: center;
  display: flex;
  color: rgb(167, 167, 167);
  background-color: rgb(0, 0, 0);
  border: none;
  margin: 0 7px;
  /* font-size: 20px; */
}

.footer-right3 {
  /* width: 100px; */
  height: 4px;
  border-radius: 5px;
  -webkit-appearance: none;
  /* none de ngan kieu hien thi mac dinh cuar thanh truot */
  overflow: hidden;
  background-color: rgb(77, 77, 77);
  align-self: center;
  display: flex;
  margin: 0 7px 0 0;
}

/* tao kieu cho nut keo trong thanh truot */
.footer-right3::-webkit-slider-thumb {
  background: rgb(77, 77, 77);
  width: 0px;
  box-shadow: -300px 0px 0px 300px rgb(30, 215, 96);
  -webkit-appearance: none;
}
</style>
