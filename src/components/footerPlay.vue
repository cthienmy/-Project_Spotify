<template>
  <div class="footer">
    <!--footer-left  -->
    <div class="footer-left">
      <a href="#">
        <img v-bind:src="containerFooter.listRow[0].titleImg" />
      </a>
      <div class="footer-title">
        <a href="#"
          ><h5>{{ containerFooter.listRow[0].titleH3 }}</h5></a
        >
        <a href="#"
          ><p>
            {{ containerFooter.listRow[0].titleSinger1 }},
            {{ containerFooter.listRow[0].titleSinger2 }}
          </p></a
        >
      </div>
      <button><i class="el-icon-circle-plus-outline"></i></button>
    </div>
    <!--footer-middel  -->
    <div class="footer-middel">
      <div class="footer-middelTop">
        <div class="footer-middelTop1">1x</div>
        <div class="footer-middelTop2">
          <ion-icon name="play-back-outline"></ion-icon>
        </div>
        <div class="footer-middelTop2">
          <ion-icon name="play-skip-back-outline"></ion-icon>
        </div>
        <!-- button Play -->
        <audio v-bind:src="containerFooterlistRow[0].music"></audio>
        <button class="footer-middelTop3">
          <ion-icon name="play-circle-outline"></ion-icon>
        </button>
        <!--  -->
        <div class="footer-middelTop2">
          <ion-icon name="play-skip-forward-outline"></ion-icon>
        </div>
        <div class="footer-middelTop2">
          <ion-icon name="play-forward-outline"></ion-icon>
        </div>
      </div>
      <div class="footer-middelBottom">
        <div class="footer-middelBottomTime">0:00</div>
        <div class="footer-middelBottomPlay">
          <input class="rangebar" type="range" value="0" />
          <!--  -->
        </div>
        <div class="footer-middelBottomTime">17:34</div>
      </div>
    </div>
    <!--footer-right -->
    <div class="footer-right">
      <div class="footer-right1">
        <button>
          <i class="el-icon-caret-right"></i>
        </button>
      </div>
      <button class="footer-right2">
        <ion-icon name="reorder-four-outline"></ion-icon>
      </button>
      <div class="footer-right2"><i class="el-icon-set-up"></i></div>
      <div class="footer-right2">
        <ion-icon name="volume-high-outline"></ion-icon>
      </div>
      <div class="footer-right3"></div>
      <button class="footer-right2">
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
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.footer {
  height: 13.5vh;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.footer-left {
  display: flex;
}

.footer-left img {
  width: 60px;
  height: 705;
  border-radius: 5px;
  margin-right: 15px;
  align-self: center;
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
  font-size: 11px;
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
  font-size: 15px;
  margin: 0 15px;
  align-self: center;
  font-weight: bold;
}
.footer-middelTop2 {
  font-size: 20px;
  margin: 0 15px;
  align-self: center;
  display: flex;
}
.footer-middelTop3 {
  font-size: 35px;
  margin: 0 15px;
  display: flex;
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
  width: 450px;
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
  width: 7px;
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

.footer-right1 {
  border: 2px solid rgb(167, 167, 167);
  width: 12px;
  height: 14px;
  border-radius: 2px;
  margin: 0 7px;
  font-size: 12px;
  align-self: center;
}
.footer-right1 button {
  padding: 0;
  background-color: rgb(0, 0, 0);
  color: rgb(167, 167, 167);
  height: 100%;
  border: none;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-right2 {
  padding: 0;
  align-self: center;
  display: flex;
  color: rgb(167, 167, 167);
  background-color: rgb(0, 0, 0);
  border: none;
  margin: 0 7px;
  font-size: 20px;
}
.footer-right3 {
  width: 100px;
  height: 4px;
  border-radius: 5px;
  background-color: rgb(77, 77, 77);
  align-self: center;
  display: flex;
  margin: 0 7px 0 0;
}
</style>
