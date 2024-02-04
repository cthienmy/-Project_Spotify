<template>
  <div class="container">
    <div class="body">
      <div class="containerFixed">
        <!-- Home -->
        <div class="home">
          <a href="#" v-on:click="goHome">
            <div class="home1">
              <div class="home-icon"><i class="el-icon-s-home"></i></div>
              <p>Home</p>
            </div>
          </a>
          <a href="#">
            <div class="home2">
              <div class="home-icon"><i class="el-icon-search"></i></div>
              <p>Search</p>
            </div>
          </a>
        </div>
        <!-- your library -->
        <div class="library">
          <div class="library1">
            <div class="library1-1">
              <div class="library-icon">
                <ion-icon name="albums-outline"></ion-icon>
              </div>
              <p>Your Library</p>
            </div>
            <div class="library1-2">
              <button class="library-iconplus">
                <i class="el-icon-plus"></i>
              </button>
              <button class="library-iconright">
                <i class="el-icon-right"></i>
              </button>
            </div>
          </div>
          <!-- Your Library-- list -->
          <div class="library2">
            <div class="library2-item">
              <h4>Create your first playlist</h4>
              <p>It's easy, we'll help you</p>
              <button>Create playlist</button>
            </div>
            <div class="library2-item">
              <h4>Let's fine some podcasts to follow</h4>
              <p>we'll keep you updated on new episodes</p>
              <button>Browse podcasts</button>
            </div>
          </div>
        </div>
      </div>

      <!-- container Lists -->
      <div class="containerList">
        <!-- lists -->
        <div v-if="itemClick === null" class="lists">
          <!-- thanh tuy chon -->
          <tabBar v-on:clickGo="clickGo" />
          <!-- list1 -->

          <containerList2 v-bind:list2="list1" v-bind:itemClick="itemClick" v-on:clickItem="contentIn($event)"
            v-on:clickButtonPlay="enterPlay($event)" />

          <!-- list2 -->
          <containerList2 v-bind:list2="list2" v-for="(list2, index) in list2" v-bind:key="index"
            v-on:clickItem="contentIn($event)" v-on:clickButtonPlay="enterPlay($event)" />
        </div>
        <!-- noi dung thay the list-->
        <itemContent v-else v-on:clickBack="clickBack" v-on:clickGo="clickGo" v-bind:album="containerFooter"
          v-on:clickButtonPlay="enterPlay" />
        <!-- listfooter -->
        <div class="container-item-footer">
          <div class="container-item-footer-top">
            <div class="container-item-footer-top1">
              <ul>
                <li>
                  <h4>Company</h4>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">For the Record</a></li>
              </ul>
              <ul>
                <li>
                  <h4>Communities</h4>
                </li>
                <li><a href="#">For Artists</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Vendors</a></li>
              </ul>
              <ul>
                <li>
                  <h4>Useful links</h4>
                </li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Free Mobile App</a></li>
              </ul>
            </div>

            <!-- icon -->
            <div class="container-item-footer-top2">
              <a href="#">
                <div><ion-icon name="logo-instagram"></ion-icon></div>
              </a>
              <a href="#">
                <div><ion-icon name="logo-twitter"></ion-icon></div>
              </a>
              <a href="#">
                <div><ion-icon name="logo-facebook"></ion-icon></div>
              </a>
            </div>
          </div>

          <!--  -->
          <div class="container-item-footer-bot">
            <div class="container-item-footer-bot1">
              <p><a href="#">Legal</a></p>
              <p><a href="#">Privacy Center </a></p>
              <p><a href="#">Privacy Policy</a></p>
              <p><a href="#">Cookies</a></p>
              <p><a href="#">About Ads</a></p>
              <p><a href="#">Accessibility</a></p>
            </div>
            <div class="container-item-footer-bot2">
              <div><img src="/letter-c.png" /></div>

              <!-- phai la icon -->
              <p>2023 Spotify AB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <footerPlay v-bind:containerFooter="containerFooter" v-bind:nextSong="nextSong" v-bind:backSong="backSong"
      v-on:clickButtonPlay="enterPlay" v-bind:playLoop="playLoop" v-bind:playSpeed="playSpeed"
      v-bind:containerFooterVariable="containerFooterVariable" v-bind:changeSong="changeSong"
      v-bind:changeVolume="changeVolume" v-bind:stopVolume="stopVolume" v-bind:stopVl="stopVl" />
  </div>
</template>
<script>
import containerList2 from "./components/containerList2.vue";
import itemContent from "./components/itemContent.vue";
import tabBar from "./components/tabBar.vue";
import footerPlay from "./components/footerPlay.vue";
import { list2, listRow } from './data'

export default {
  name: "app",
  components: {
    containerList2,
    itemContent,
    tabBar,
    footerPlay,
  },
  data() {
    return {
      itemClick: null,
      itemGo: "",
      albumClick: null,
      stopVl: false,
      //
      containerFooterVariable: {
        tagAudio: null,
        index: 0,
        timePlay1: "00",
        timePlay2: "00",
        timePlay: "",
        totleTime1: "00",
        totleTime2: "00",
        totleTime: "",
        value: "0",
        statusLoop: false,
        valueVolume: 100,
      },
      //
      containerFooter: {
        img: "/item2thienhanghegi.jpeg",
        itemFooterH4: "Thiên Hạ Nghe Gì",
        itemFooterP:
          "Những gì mà người bên cạnh bạn đang nghe. Ảnh bìa: Wren Evans",
        itemContentImg: "/itemContentImg/thienhanghegi/item2thienhanghegi.jpeg",
        run: false,
        listRow: listRow,
      },
      list1: {
        titleList: "",
        itemContent: [],
      },

      list2: list2,
    };
  },
  methods: {
    contentIn: function (itemIn) {
      this.itemClick = itemIn;
      this.itemGo = itemIn;
      this.list1.itemContent.unshift(itemIn);
      this.list1.titleList = "Recently played";
      // thêm album chứa những list nhạc vừa nghe
      // this.albumClick = itemIn;
      this.containerFooter = itemIn;
      console.log("album:", this.containerFooter);
    },
    clickBack: function () {
      this.itemClick = null;
    },
    clickGo: function () {
      this.itemClick = this.itemGo;
    },
    goHome: function () {
      this.itemClick = null;
    },
    setTime: function () {
      // * khi vị trí của video thay đổi, bắt sự thay đổi hiển thị vị trí thay đổi hiện tại bằng giây
      // arrow function thay vì ghi /this.tagAudio.ontimeupdate = function() {}/
      // vì arrFun ko có this của nó, còn Func nào cũng sẽ có this đại diện cho func đó
      // Math.floor làm tròn xuống số nguyên gần nhất 
      this.containerFooterVariable.timePlay = Math.floor(this.containerFooterVariable.tagAudio.currentTime);

      this.containerFooterVariable.totleTime = Math.floor(this.containerFooterVariable.tagAudio.duration);

      // lấy thời gian chạy hiện tại chia cho tổng thời gian bài hát *100 = % dung lg bài hát chạy hiên tại
      // để gán vào thuộc tính value của thanh bar có tổng 100%
      this.containerFooterVariable.value = Math.floor((this.containerFooterVariable.tagAudio.currentTime /
        this.containerFooterVariable.tagAudio.duration) * 100)

      //
      // ** set time chay Song dạng 00:00
      //   Math.floor: số giây / 60 làm tròn xuống để lấy số giờ
      //   lấy tổng số giây / lấy dư(%) cho 60 = số giây dư sau khi lấy đc số giờ bên trên
      if (Number(this.containerFooterVariable.timePlay1) < 10) {
        this.containerFooterVariable.timePlay1 = "0" + Math.floor(this.containerFooterVariable.timePlay / 60);

      } if (Number(this.containerFooterVariable.timePlay2) < 10) {
        this.containerFooterVariable.timePlay2 = "0" + this.containerFooterVariable.timePlay % 60;

      } if (Number(this.containerFooterVariable.totleTime1) < 10) {
        this.containerFooterVariable.totleTime1 = "0" + Math.floor(this.containerFooterVariable.totleTime / 60);

      } if (Number(this.containerFooterVariable.totleTime2) < 10) {
        this.containerFooterVariable.totleTime2 = "0" + this.containerFooterVariable.totleTime % 60;

      }
      if (Number(this.containerFooterVariable.timePlay1) >= 10) {
        this.containerFooterVariable.timePlay1 = "" + Math.floor(this.containerFooterVariable.timePlay / 60);

      } if (Number(this.containerFooterVariable.timePlay2) >= 10) {
        this.containerFooterVariable.timePlay2 = "" + this.containerFooterVariable.timePlay % 60;

      } if (Number(this.containerFooterVariable.totleTime1) >= 10) {
        this.containerFooterVariable.totleTime1 = "" + Math.floor(this.containerFooterVariable.totleTime / 60);

      } if (Number(this.containerFooterVariable.totleTime2) >= 10) {
        this.containerFooterVariable.totleTime2 = "" + this.containerFooterVariable.totleTime % 60;

      };


      // ** tự động chuyển bài khi phát hết
      if (
        this.containerFooterVariable.timePlay ===
        this.containerFooterVariable.totleTime
      ) {
        this.containerFooterVariable.index = this.containerFooterVariable.index + 1;
        this.containerFooterVariable.tagAudio = new Audio(this.containerFooter.listRow[this.containerFooterVariable.index].music);
        this.containerFooterVariable.tagAudio.play();
        // phải bắt lại vị trí hiện tại của bài hát mới
        this.containerFooterVariable.tagAudio.ontimeupdate = () => {

          // Math.floor làm tròn xuống số nguyên gần nhất 
          this.containerFooterVariable.timePlay = Math.floor(this.containerFooterVariable.tagAudio.currentTime);

          this.containerFooterVariable.totleTime = Math.floor(this.containerFooterVariable.tagAudio.duration);

          // lấy thời gian chạy hiện tại chia cho tổng thời gian bài hát *100 = % dung lg bài hát chạy hiên tại
          // để gán vào thuộc tính value của thanh bar có tổng 100%
          this.containerFooterVariable.value = Math.floor((this.containerFooterVariable.tagAudio.currentTime /
            this.containerFooterVariable.tagAudio.duration) * 100);
        };
      }

    },
    enterPlay: function (itemPlay) {
      // * click buttonPlay thì item đó sẽ phat list nhạc của item đó
      this.containerFooter = itemPlay;
      console.log("containerFooter:", this.containerFooter);

      // 1** Neu run === false : đang Pause
      if (this.containerFooter.run === false) {
        this.containerFooter.run = !this.containerFooter.run;
        // run: False-> True 
        // 1.1--thùng chứa ban đầu chưa có gì & run=== false(Pause)
        if (this.containerFooterVariable.tagAudio === null) {
          // * khởi tạo thẻ Audio(link_mp3)
          this.containerFooterVariable.tagAudio = new Audio(
            this.containerFooter.listRow[
              this.containerFooterVariable.index
            ].music
          );

          // nếu mới đầu nếu tagAudio null -> khởi tạo thẻ Audio chứa link bài hát ở vị trí index=0    
          // *.play()->phat bài hát
          this.containerFooterVariable.tagAudio.play();

          // * khi vị trí của video thay đổi, bắt sự thay đổi hiển thị vị trí thay đổi hiện tại bằng giây
          this.containerFooterVariable.tagAudio.ontimeupdate = this.setTime;
          // * tự động chuyển bài khi phát hết

        }
        // 1.2--thùng chứa ban đầu đã có & run=== false(Pause)
        else {
          // nếu có bài hat đang phát thì dừng
          this.containerFooterVariable.tagAudio.pause();
          this.containerFooter.run = !this.containerFooter.run;
          // run: False-> True 

          // 1.2.1---thùng chứa ban đầu đã có & run=== false(Pause) & chứa Bài Hát Khac
          if (
            // căt di kí tự trong"" và thay băng ""-> mục dich lay link bai hat ra riêng de so sánh
            this.containerFooterVariable.tagAudio.src.replace(
              "http://localhost:5174", ""

            ) !=
            this.containerFooter.listRow[this.containerFooterVariable.index]
              .music
          ) {

            // khoi taoj lai tu dau va phat nhac
            this.containerFooterVariable.tagAudio = new Audio(
              this.containerFooter.listRow[
                this.containerFooterVariable.index
              ].music
            );

            this.containerFooterVariable.tagAudio.play();


            // phải bắt lại vị trí hiện tại của bài hát mới
            // * khi vị trí của video thay đổi, bắt sự thay đổi hiển thị vị trí thay đổi hiện tại bằng giây
            this.containerFooterVariable.tagAudio.ontimeupdate = this.setTime;

          }
          // 1.2.2---thùng chứa ban đầu đã có & run=== false(Pause) & chứa cùng 1 bài hát
          else {
            this.containerFooterVariable.tagAudio.play();
            this.containerFooter.run = !this.containerFooter.run;

          }
        }
      }

      // 2** Neu run=== true : đang Play
      else {
        console.log("run2:", this.containerFooter.run);
        // neu itemPlay.run===true -> dừng bài hat
        this.containerFooterVariable.tagAudio.pause();
        this.containerFooter.run = !this.containerFooter.run;
      }

      // // * điều chỉnh volume [.volume: thuoc tinh set am luong]
      // this.containerFooterVariable.tagAudio.volume = 1.0;
      // this.containerFooterVariable.valueVolume =
      //   this.containerFooterVariable.tagAudio.volume * 100;
      // console.log(
      //   "volume:",
      //   (this.containerFooterVariable.tagAudio.volume = 1.0)
      // );
    },

    nextSong: function () {
      this.containerFooterVariable.index =
        this.containerFooterVariable.index + 1;

      this.containerFooterVariable.tagAudio.pause();

      this.containerFooterVariable.tagAudio = new Audio(
        this.containerFooter.listRow[this.containerFooterVariable.index].music
      );
      this.containerFooterVariable.tagAudio.play();
    },
    backSong: function () {
      this.containerFooterVariable.index =
        this.containerFooterVariable.index - 1;
      this.containerFooterVariable.tagAudio.pause();
      this.containerFooterVariable.tagAudio = new Audio(
        this.containerFooter.listRow[this.containerFooterVariable.index].music
      );
      this.containerFooterVariable.tagAudio.play();
    },
    playLoop: function () {
      if (this.statusLoop === false) {
        // tự động lặp lại
        this.containerFooterVariable.tagAudio.loop = true;
        this.containerFooterVariable.statusLoop =
          !this.containerFooterVariable.statusLoop;
      } else {
        this.containerFooterVariable.tagAudio.loop = false;
        this.containerFooterVariable.statusLoop =
          !this.containerFooterVariable.statusLoop;
      }
    },
    playSpeed: function () {
      this.containerFooterVariable.tagAudio.playbackRate = 8;
    },
    // tua Song sử dụng tên sự kiện "change" trong vue để bắt sự kiện sau khi ta thay đổi vị trí tua bài hát
    // event.target.value -> trỏ tới value % của thanh bar -> sau đó chuyển % đó ngược lại số giây
    // .currentTime
    changeSong: function (event) {
      console.log("onchange:", event.target.value);
      console.log("totleTime:", this.containerFooterVariable.totleTime);
      this.containerFooterVariable.timePlay = (event.target.value * this.containerFooterVariable.totleTime) / 100;
      this.containerFooterVariable.tagAudio.currentTime = this.containerFooterVariable.timePlay;


    },
    changeVolume: function (event) {
      // * điều chỉnh volume [.volume: thuoc tinh set am luong]
      // target.value -> lay ra vi tri phan tram am luong roi chuyen sang thang 0.0 -1.0 am lg
      console.log("volume1:", this.containerFooterVariable.tagAudio.volume);
      this.containerFooterVariable.tagAudio.volume = (event.target.value * 0.1) / 10;
      console.log("volume%:", (event.target.value * 0.1) / 10);

      console.log("volume2:", this.containerFooterVariable.tagAudio.volume);
      this.containerFooterVariable.valueVolume = this.containerFooterVariable.tagAudio.volume * 100;


    },
    stopVolume: function () {
      console.log("volume1:", this.containerFooterVariable.tagAudio);
      if (this.stopVl === false) {
        this.containerFooterVariable.tagAudio.volume = 0.0;
        this.stopVl = !this.stopVl;
        console.log("volume2:", this.containerFooterVariable.tagAudio.volume);
      } else {
        this.containerFooterVariable.tagAudio.volume = 1.0;
        this.stopVl = !this.stopVl;
        console.log("volume3:", this.containerFooterVariable.tagAudio.volume);
      };

    },
  },
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");
/* ????? */

#app {
  width: 100%;
  margin: 0;
  padding: 0;
  max-width: none;
  text-align: left;
  height: 100vh;
  overflow-y: hidden;
}

.container {
  background-color: rgb(0, 0, 0);
}

.body {
  display: grid;
  grid-template-columns: 28.5% 71%;
  column-gap: 0.5%;
  padding: 0.5% 0.5% 0 0.5%;
  height: 86.5vh;
}

.containerFixed {
  display: flex;
  flex-direction: column;
}

.home {
  background-color: rgb(18, 18, 18);
  margin-bottom: 8px;
  align-self: center;
  border-radius: 8px;
  padding: 14px 25px;
  width: 100%;
  box-sizing: border-box;
}

.home a {
  color: rgb(167, 167, 167);
}

.home a:hover {
  color: rgb(255, 255, 255);
}

.home p {
  margin: 0;
  align-self: center;
  font-weight: 600;
}

.home1 {
  display: flex;
  margin-bottom: 10px;
}

.home2 {
  display: flex;
}

.home-icon {
  font-size: 25px;
  margin-right: 20px;
}

.library {
  background-color: rgb(18, 18, 18);
  border-radius: 8px;
  flex-grow: 999;
}

.library1 {
  display: flex;
  justify-content: space-between;
  color: rgb(167, 167, 167);
  padding: 15px 25px;
}

.library1-1 {
  display: flex;
}

.library-icon {
  font-size: 25px;
  margin-right: 20px;
}

.library1-1 p {
  margin: 0;
  align-self: center;
}

.library1-2 {
  display: flex;
}

.library-iconplus {
  font-size: 20px;
  margin-right: 10px;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  align-self: center;
  padding: 0;
  background-color: rgb(18, 18, 18);
  color: rgb(167, 167, 167);
  border: none;
  /* outline: none; */
}

.library-iconplus:hover {
  background-color: rgb(35, 31, 31);
}

.library-iconright {
  font-size: 20px;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  align-self: center;
  padding: 0;
  background-color: rgb(18, 18, 18);
  color: rgb(167, 167, 167);
  border: none;
}

.library-iconright:hover {
  background-color: rgb(35, 31, 31);
}

.library2 {
  color: rgb(255, 255, 255);
  padding: 8px;
}

.library2-item {
  background-color: rgb(36, 36, 36);
  border-radius: 10px;
  padding: 18px 20px;
  margin-bottom: 25px;
}

.library2-item h4 {
  font-size: 15px;
  margin: 0;
}

.library2-item p {
  font-size: 13px;
  margin: 8px 0 20px;
}

.library2-item button {
  font-size: 13px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-weight: 600;
  border-radius: 35px;
  padding-top: 5px;
}

/* /// */
.containerList {
  background: linear-gradient(to top,
      rgb(18, 18, 18),
      rgb(34, 26, 29),
      rgb(91, 56, 70));
  /* ??????????????????????????????? */

  border-radius: 8px;
  overflow-y: auto;
}

/*  */
.lists {
  color: rgb(255, 255, 255);
  padding: 55px 25px 0;
}

/*  */
.container-item-footer {
  padding: 0 25px;
  background-color: inherit;
}

.container-item-footer-top {
  display: flex;
  border-bottom: 1px solid rgb(57, 54, 54);
  justify-content: space-between;
  padding: 40px 10px;
}

.container-item-footer-top1 {
  display: flex;
  width: 60%;
  justify-content: space-between;
}

.container-item-footer-top1 ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
}

.container-item-footer-top1 li {
  margin: 8px 0;
}

.container-item-footer-top1 h4 {
  color: white;
  margin: 0 0 8px;
  font-size: 16px;
}

.container-item-footer-top1 a {
  color: rgb(167, 167, 167);
}

.container-item-footer-top1 a:hover {
  color: white;
  text-decoration: underline;
}

.container-item-footer-top2 {
  width: 15%;
  display: flex;
  justify-content: space-between;
}

.container-item-footer-top2 a {
  color: white;
}

.container-item-footer-top2 div {
  width: 40px;
  height: 40px;
  font-size: 18px;
  background-color: rgb(58, 57, 57);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-item-footer-top2 div:hover {
  background-color: rgb(78, 76, 76);
}

/*  */
.container-item-footer-bot {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  padding: 30px 0 70px;
}

.container-item-footer-bot1 {
  display: flex;
}

.container-item-footer-bot1 a {
  color: rgb(167, 167, 167);
}

.container-item-footer-bot1 a:hover {
  color: white;
}

.container-item-footer-bot1 p {
  margin-right: 15px;
  font-size: 13px;
}

.container-item-footer-bot2 {
  font-size: 13px;
  color: rgb(167, 167, 167);
  display: flex;
  align-items: center;
  padding-right: 15px;
}

.container-item-footer-bot2 div {
  background-color: aliceblue;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin-right: 5px;
}

.container-item-footer-bot2 img {
  width: 11px;
  height: 11px;
  align-self: center;

  padding: 0 10px;
}

/*  */
</style>
