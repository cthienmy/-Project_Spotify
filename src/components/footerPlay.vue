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
        <!-- * play Speed -->
        <button class="footer-middelTop1" type="radio" v-on:click="playSpeed()">
          2x
        </button>
        <!-- * loop Song -->
        <button class="footer-middelTop1" v-on:click="playLoop()">
          <ion-icon name="shuffle-outline"></ion-icon>
        </button>
        <!-- * back Song -->
        <button
          class="footer-middelTop1"
          v-on:click="backSong()"
          v-bind:disabled="index === 0"
        >
          <ion-icon name="play-skip-back-outline"></ion-icon>
        </button>
        <!-- * button Play -->
        <audio id="enter-audio"></audio>
        <button
          v-if="run === false"
          class="footer-middelTop3"
          v-on:click="enterPlay()"
        >
          <ion-icon name="play-circle-outline"></ion-icon>
        </button>
        <!-- * button pause -->
        <button v-else class="footer-middelTop3" v-on:click="enterPause()">
          <ion-icon name="pause-circle-outline"></ion-icon>
        </button>
        <!-- * next Song -->
        <button class="footer-middelTop1" v-on:click="nextSong()">
          <ion-icon name="play-skip-forward-outline"></ion-icon>
        </button>
      </div>
      <!-- * thanh bar % -->
      <div class="footer-middelBottom">
        <div class="footer-middelBottomTime">
          {{ timePlay }}
        </div>
        <div class="footer-middelBottomPlay">
          <input class="rangebar" type="range" v-bind:value="value" />
          <!--  -->
        </div>
        <div class="footer-middelBottomTime">{{ totleTime }}</div>
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
      <!-- * volume bar -->
      <input class="footer-right3" type="range" v-bind:value="valueVolume" />
      <!--  -->
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
    return {
      tagAudio: null,
      run: false,
      index: 0,
      timePlay: "00:00",
      totleTime: "",
      value: "0",
      statusLoop: false,
      valueVolume: "100",
    };
  },
  methods: {
    enterPlay: function () {
      if (this.tagAudio === null) {
        // * khởi tạo thẻ Audio(link_mp3)
        this.tagAudio = new Audio(
          this.containerFooter.listRow[this.index].music
        );

        console.log("index:", this.index);
        console.log(
          "audio play:",
          this.tagAudio.src.replace("http://localhost:5173", "")
        );
        // nếu mới đầu nếu tagAudio null -> khởi tạo thẻ Audio chứa link bài hát ở vị trí index=0
        // sau đó  run: False-> True ->phat bài hat
        console.log("run", this.run);
        // *.play()->phat bài hát
        this.tagAudio.play();
        this.run = !this.run;
        console.log("run", this.run);

        // * khi vị trí của video thay đổi, bắt sự thay đổi hiển thị vị trí thay đổi hiện tại bằng giây
        this.tagAudio.ontimeupdate = () => {
          // arrow function thay vì ghi /this.tagAudio.ontimeupdate = function() {}/
          // vì arrFun ko có this của nó, còn Func nào cũng sẽ có this đại diện cho func đó

          this.timePlay = this.tagAudio.currentTime / 60;
          this.totleTime = this.tagAudio.duration / 60;
          // lấy thời gian chạy hiện tại chia cho tổng thời gian bài hát *100 = % dung lg bài hát chạy hiên tại
          // để gán vào thuộc tính value của thanh bar có tổng 100%
          this.value =
            (this.tagAudio.currentTime / this.tagAudio.duration) * 100;

          // * tự động chuyển bài khi phát hết
          if (this.timePlay === this.totleTime) {
            this.index = this.index + 1;
            console.log(
              "index+1:",
              this.index,
              ";",
              this.containerFooter.listRow[this.index].music
            );

            this.tagAudio = new Audio(
              this.containerFooter.listRow[this.index].music
            );
            this.tagAudio.play();
            // phải bắt lại vị trí hiện tại của bài hát mới
            this.tagAudio.ontimeupdate = () => {
              this.timePlay = this.tagAudio.currentTime / 60;
              console.log("timePlay:", this.timePlay);
              this.totleTime = this.tagAudio.duration / 60;
              console.log("totleTime:", this.totleTime);
              this.value =
                (this.tagAudio.currentTime / this.tagAudio.duration) * 100;
            };
          }
        };
      } else {
        if (
          // căt di kí tự trong"" và thay băng ""-> mục dich lay link bai hat ra riêng de so sánh
          this.tagAudio.src.replace("http://localhost:5173", "") !=
          this.containerFooter.listRow[this.index].music
        ) {
          this.tagAudio = new Audio(
            this.containerFooter.listRow[this.index].music
          );

          this.tagAudio.play();

          this.run = !this.run;
          console.log("run", this.run);
        } else {
          this.tagAudio.play();
          this.totleTime = this.tagAudio.currentTime;
          console.log("totleTime:", this.totleTime, "/");
          this.run = !this.run;
          console.log("run s", this.run);
        }
      }
      this.tagAudio.volume = 1.0;
      this.valueVolume = this.tagAudio.volume * 100;
      console.log("volume:", (this.tagAudio.volume = 1.0));
    },
    enterPause: function () {
      // dừng bài hat
      this.tagAudio.pause();
      this.run = !this.run;
      console.log("run s", this.run);
    },
    nextSong: function () {
      this.index = this.index + 1;
      console.log(
        "index+1:",
        this.index,
        ";",
        this.containerFooter.listRow[this.index].music
      );
      this.tagAudio.pause();

      this.tagAudio = new Audio(this.containerFooter.listRow[this.index].music);
      this.tagAudio.play();
    },
    backSong: function () {
      this.index = this.index - 1;
      console.log(
        "index-1:",
        this.index,
        ";",
        this.containerFooter.listRow[this.index].music
      );
      this.tagAudio.pause();
      this.tagAudio = new Audio(this.containerFooter.listRow[this.index].music);
      this.tagAudio.play();
    },
    playLoop: function () {
      if (this.statusLoop === false) {
        // tự động lặp lại
        console.log("statusloop1:", this.statusLoop);

        this.tagAudio.loop = true;
        console.log("loop:", this.tagAudio.loop);

        this.statusLoop = !this.statusLoop;
        console.log("statusloop2:", this.statusLoop);
      } else {
        console.log("statusloop3:", this.statusLoop);

        this.tagAudio.loop = false;
        console.log("loop:", this.tagAudio.loop);

        this.statusLoop = !this.statusLoop;
        console.log("statusloop4:", this.statusLoop);
      }
    },
    playSpeed: function () {
      this.tagAudio.playbackRate = 8;
    },
  },
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
  font-size: 20px;
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
  font-size: 35px;
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
