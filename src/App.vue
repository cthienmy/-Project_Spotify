<template>
  <div class="container">
    <div class="body">
      <div class="containerFixed">
        <!-- Home -->
        <div class="home">
          <a href="#" v-on:click="goHome"
            ><div class="home1">
              <div class="home-icon"><i class="el-icon-s-home"></i></div>
              <p>Home</p>
            </div></a
          >
          <a href="#"
            ><div class="home2">
              <div class="home-icon"><i class="el-icon-search"></i></div>
              <p>Search</p>
            </div></a
          >
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

          <containerList2
            v-bind:list2="list1"
            v-bind:itemClick="itemClick"
            v-on:clickItem="contentIn($event)"
            v-on:clickButtonPlay="clickPlayList($even)"
          />

          <!-- list2 -->
          <containerList2
            v-bind:list2="list2"
            v-for="(list2, index) in list2"
            v-bind:key="index"
            v-on:clickItem="contentIn($event)"
            v-on:clickButtonPlay="clickPlayList($event)"
          />
        </div>
        <!-- noi dung thay the list-->
        <itemContent
          v-else
          v-on:clickBack="clickBack"
          v-on:clickGo="clickGo"
          v-bind:album="albumClick"
        />
        <!-- listfooter -->
        <div class="container-item-footer">
          <div class="container-item-footer-top">
            <div class="container-item-footer-top1">
              <ul>
                <li><h4>Company</h4></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">For the Record</a></li>
              </ul>
              <ul>
                <li><h4>Communities</h4></li>
                <li><a href="#">For Artists</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Vendors</a></li>
              </ul>
              <ul>
                <li><h4>Useful links</h4></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Free Mobile App</a></li>
              </ul>
            </div>

            <!-- icon -->
            <div class="container-item-footer-top2">
              <a href="#"
                ><div><ion-icon name="logo-instagram"></ion-icon></div
              ></a>
              <a href="#"
                ><div><ion-icon name="logo-twitter"></ion-icon></div
              ></a>
              <a href="#"
                ><div><ion-icon name="logo-facebook"></ion-icon></div
              ></a>
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
    <footerPlay v-bind:containerFooter="containerFooter" />
  </div>
</template>
<script>
import containerList2 from "./components/containerList2.vue";
import itemContent from "./components/itemContent.vue";
import tabBar from "./components/tabBar.vue";
import footerPlay from "./components/footerPlay.vue";

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
      containerFooter: {
        img: "/item2thienhanghegi.jpeg",
        itemFooterH4: "Thiên Hạ Nghe Gì",
        itemFooterP:
          "Những gì mà người bên cạnh bạn đang nghe. Ảnh bìa: Wren Evans",
        itemContentImg: "/itemContentImg/thienhanghegi/item2thienhanghegi.jpeg",
        firstMusic: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
        listRow: [
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam1.jpeg",
            titleH3: "Từng Quen",
            titleSinger1: "Wren Evans",
            titleSinger2: "itsnk",
            album: "Từng Quen",
            date: "2 weeks ago",
            time: "2:54",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam2.jpeg",
            titleH3: "Những Lời Hứa Bỏ Quên",
            titleSinger1: "Vũ.",
            titleSinger2: "Dear Jane",
            album: "Những Lời Hứa Bỏ Quên",
            date: "5 days ago",
            time: "3:56",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam3.jpeg",
            titleH3: "Anh Là Ngoại Lệ Của Em",
            titleSinger1: "Phương Ly",
            titleSinger2: "",
            album: "Anh Là Ngoại Lệ Của Em",
            date: "2 weeks ago",
            time: "3:08",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam4.jpeg",
            titleH3: "Hit Me Up (feat.Nomovodka)",
            titleSinger1: "Binz",
            titleSinger2: "Nomovodka",
            album: "Từng Quen",
            date: "2 weeks ago",
            time: "4:28",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam5.jpeg",
            titleH3: "Bạn Đời",
            titleSinger1: "Karik",
            titleSinger2: "GDucky",
            album: "Từng Quen",
            date: "2 weeks ago",
            time: "5:00",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
            titleH3: "bé ơi từ từ",
            titleSinger1: "Wren Evans",
            titleSinger2: "itsnk",
            album: "Từng Quen",
            date: "5 days ago",
            time: "3:20",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
            titleH3: "đưa em về nhàa",
            titleSinger1: "GREY D",
            titleSinger2: "Chillies",
            album: "Từng Quen",
            date: "2 weeks ago",
            time: "4:00",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
            titleH3: "shhhhhhh",
            titleSinger1: "WEAN",
            titleSinger2: "tlinh",
            album: "Từng Quen",
            date: "2 weeks ago",
            time: "3:50",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
            titleH3: "Chịu Cách Mình Nói Thua",
            titleSinger1: "RHYDER",
            titleSinger2: "CoolKid, BAN",
            album: "Từng Quen",
            date: "2 weeks ago",
            time: "3:01",
          },
          {
            titleImg: "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
            titleH3: "Anh Luôn Như Vậy",
            titleSinger1: "B Ray",
            titleSinger2: "",
            album: "Từng Quen",
            date: "2 weeks ago",
            time: "3:32",
          },
        ],
      },
      list1: {
        titleList: "",
        itemContent: [],
      },

      list2: [
        {
          titleList: "Today's biggest hits",
          itemContent: [
            {
              img: "/item2thienhanghegi.jpeg",
              itemFooterH4: "Thiên Hạ Nghe Gì",
              itemFooterP:
                "Những gì mà người bên cạnh bạn đang nghe. Ảnh bìa: Wren Evans",
              itemContentImg:
                "/itemContentImg/thienhanghegi/item2thienhanghegi.jpeg",
              firstMusic: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam1.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam2.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam3.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam4.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam5.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
              ],
            },
            {
              img: "/item22hothitvn.jpeg",
              itemFooterH4: "Hot Hits Vietnam",
              itemFooterP:
                "Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Wren Evans",

              itemContentImg:
                "/itemContentImg/hothitvietnam/item22hothitvn.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam2.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam1.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam3.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam4.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam5.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/KhongYeuXinDungNoiPianoVersion-UMIE-8852977.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
              ],
            },
            {
              img: "/item23viralhothit.jpeg",
              itemFooterH4: "Viral Hits",
              itemFooterP: "Viral, trending and taking off.",
              itemContentImg:
                "/itemContentImg/viralhits/item23viralhothit.jpeg",
              firstMusic: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam3.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam1.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam2.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam4.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam5.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
              ],
            },
            {
              img: "/item24itahit.jpeg",
              itemFooterH4: "It's a Hit!",
              itemFooterP:
                "The hottest songs you need to listen to right now. Cover: Reneé Rapp, Megan Thee Stallion",
              itemContentImg: "/itemContentImg/itahit/item24itahit.jpeg",
              firstMusic: "/music/EmLaCoffee-JukySan-8567787.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam4.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam1.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam2.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam3.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam5.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
              ],
            },
            {
              img: "/item25disneyhit.jpeg",
              itemFooterH4: "Disney Hits",
              itemFooterP:
                "All your favorite Disney hits, including songs from Wish.",
              itemContentImg: "/itemContentImg/disneyhit/item25disneyhit.jpeg",
              firstMusic: "/music/EmLaCoffee-JukySan-8567787.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam5.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam1.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam2.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam3.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam4.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/KhongYeuXinDungNoiPianoVersion-UMIE-8852977.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "Throwback",
          itemContent: [
            {
              img: "/21rock.jpeg",
              itemFooterH4: "Rock Classics",
              itemFooterP:
                "Rock legends & epic songs that continue to inspire generations. Cover: Queen",
              itemContentImg: "/21rock.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/21rock.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/22allout.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/23goldchool.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/24ilovemy.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
              ],
            },
            {
              img: "/22allout.jpeg",
              itemFooterH4: "All Out 2010s",
              itemFooterP: "The biggest songs of the 2010s.",
              itemContentImg: "/22allout.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/GheVaoTai-UMIEFreakyHo-8514373.mp3",
                },
                {
                  titleImg: "/21rock.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/22allout.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/23goldchool.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/24ilovemy.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
              ],
            },
            {
              img: "/23goldchool.jpeg",
              itemFooterH4: "Gold School",
              itemFooterP: "Taking it way back! Cover: G-Unit",
              itemContentImg: "/23goldchool.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/21rock.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/22allout.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/23goldchool.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/24ilovemy.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
              ],
            },
            {
              img: "/24ilovemy.jpeg",
              itemFooterH4: "I Love My'90s Hip-Hop",
              itemFooterP: "Real rap music from the golden era.",
              itemContentImg: "/24ilovemy.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/21rock.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/22allout.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/23goldchool.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/24ilovemy.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
              ],
            },
            {
              img: "/25nhgaihathaynhat.jpeg",
              itemFooterH4: "Những Bài Hát Hay Nhất Thập Kỷ Dành Cho Bạn",
              itemFooterP:
                "Một số bài hát hay nhất trong 10 năm qua, trong playlist được lựa chọn theo sở thích của bạn.",
              itemContentImg: "/25nhgaihathaynhat.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/21rock.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/22allout.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/23goldchool.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/24ilovemy.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },

                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "Episodes for you",
          itemContent: [
            {
              // postcard kể truyện ko phải nhạc, h4,p chưa hoàn thiện
              img: "/31part4.jpeg",
              itemFooterH4: "Thiên Hạ Nghe Gì",
              itemFooterP:
                "Những gì mà người bên cạnh bạn đang nghe. Ảnh bìa: Wren Evans",
              itemContentImg: "/31part4.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/31part4.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/32tryenma.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/33dec15.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/34hosovuan.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
              ],
            },
            {
              img: "/32tryenma.jpeg",
              itemFooterH4: "Hot Hits Vietnam",
              itemFooterP:
                "Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Wren Evans",
              itemContentImg: "/32tryenma.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/31part4.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/44newmusic.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/33dec15.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/34hosovuan.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
              ],
            },
            {
              img: "/33dec15.jpeg",
              itemFooterH4: "Viral Hits",
              itemFooterP: "Viral, trending and taking off.",
              itemContentImg: "/33dec15.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/51songtosing.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/54dejavu.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/33dec15.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/34hosovuan.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
              ],
            },
            {
              img: "/34hosovuan.jpeg",
              itemFooterH4: "It's a Hit!",
              itemFooterP:
                "The hottest songs you need to listen to right now. Cover: Reneé Rapp, Megan Thee Stallion",
              itemContentImg: "/34hosovuan.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/61caphequanquen.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetNhaMinh-HoaMinzyLangLD-8199645.mp3",
                },
                {
                  titleImg: "/33dec15.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/34hosovuan.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
              ],
            },
            {
              img: "/35oc29.jpeg",
              itemFooterH4: "Disney Hits",
              itemFooterP:
                "All your favorite Disney hits, including songs from Wish.",
              itemContentImg: "/35oc29.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/62deep.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/45fresh.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/33dec15.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/34hosovuan.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "Fresh new music",
          itemContent: [
            {
              img: "/41pop.jpeg",
              itemFooterH4: "Pop Right Now",
              itemFooterP:
                "The most interesting tracks in the current world of pop music.",
              itemContentImg: "/41pop.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/52binhmoiruouxua.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },

                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
              ],
            },
            {
              img: "/42poprising.jpeg",
              itemFooterH4: "Pop Rising",
              itemFooterP: "Who's now and next in pop. Cover: FLETCHER",
              itemContentImg: "/42poprising.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/93topnhacviet2020.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
              ],
            },
            {
              img: "/43animenow.jpeg",
              itemFooterH4: "Anime Now",
              itemFooterP:
                "Hottest Anime tracks & best new sounds for all Anime fans! 最新アニメシーンの話題曲をまとめてお届け！Illustration by kazuhisa Uragami",
              itemContentImg: "/43animenow.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/95cogainaylacuaai.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
              ],
            },
            {
              img: "/44newmusic.jpeg",
              itemFooterH4: "New Music Friday Vietnam",
              itemFooterP:
                "Những chiếc nhạc mới trong tuần, được tuyển chọn cẩn thận. Ảnh bìa: Madihu",
              itemContentImg: "/44newmusic.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/92chaudangkhoa.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
              ],
            },
            {
              img: "/45fresh.jpeg",
              itemFooterH4: "Fresh Finds R&B Best of 2023",
              itemFooterP:
                "The top 150 tracks from Fresh Finds R&B in 2023. Cover: JayO. Updates every Wednesday.",
              itemContentImg: "/45fresh.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/104indam.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "Sing-along",
          itemContent: [
            {
              img: "/51songtosing.jpeg",
              itemFooterH4: "Songs to Sing in the Shower",
              itemFooterP: "Splash and sing-along.",
              itemContentImg: "/51songtosing.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/54dejavu.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/51songtosing.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/52binhmoiruouxua.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/53sing-along.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/54dejavu.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/55classic.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
              ],
            },
            {
              img: "/52binhmoiruouxua.jpeg",
              itemFooterH4: "Bình Mới Rượu Xưa",
              itemFooterP:
                "Những bản nhạc quen thuộc qua sự thể hiện mới. Ảnh bìa: Duy Mạnh, Cầm",
              itemContentImg: "/52binhmoiruouxua.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/51songtosing.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/52binhmoiruouxua.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/53sing-along.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/54dejavu.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/55classic.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
              ],
            },
            {
              img: "/53sing-along.jpeg",
              itemFooterH4: "Sing-Along Indie Hits",
              itemFooterP:
                "Get those vocal chords working with these Indie favourites.",
              itemContentImg: "/53sing-along.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/95cogainaylacuaai.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/52binhmoiruouxua.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/53sing-along.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/54dejavu.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/55classic.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
              ],
            },
            {
              img: "/54dejavu.jpeg",
              itemFooterH4: "Déjà vu",
              itemFooterP: "100 liedjes voor al die mooie herinneringen.",
              itemContentImg: "/54dejavu.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/93topnhacviet2020.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/52binhmoiruouxua.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/53sing-along.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/54dejavu.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/55classic.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
              ],
            },
            {
              img: "/55classic.jpeg",
              itemFooterH4: "Classic Oldies",
              itemFooterP: "Classic hits from the 50s and 60s.",
              itemContentImg: "/55classic.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/iconspotify copy.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/52binhmoiruouxua.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/53sing-along.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/54dejavu.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/55classic.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: " Mood",
          itemContent: [
            {
              img: "/61caphequanquen.jpeg",
              itemFooterH4: "Cà Phê Quán Quen",
              itemFooterP: "Quán quen, nhạc cũ, cảm giác lạ.",
              itemContentImg: "/61caphequanquen.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
              ],
            },
            {
              img: "/62deep.jpeg",
              itemFooterH4: "Deep Focus",
              itemFooterP:
                "Keep calm and focus with ambient and post-rock music.",
              itemContentImg: "/62deep.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
              ],
            },
            {
              img: "/63sad.jpeg",
              itemFooterH4: "sad hour",
              itemFooterP:
                "heartbreak feels good in a place like this Cover: Taylor Swift",
              itemContentImg: "/63sad.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/DayXeBo-PhuongMyChiDTAP-9702223.mp3",
                },
              ],
            },
            {
              img: "/64chill.jpeg",
              itemFooterH4: "Chill Hits",
              itemFooterP: "Kick back to the best new and recent chill hits.",
              itemContentImg: "/64chill.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/NgayTetQueEm-ThuyChi-3760419.mp3",
                },
              ],
            },
            {
              img: "/65happy.jpeg",
              itemFooterH4: "Happy Beats",
              itemFooterP: "Feel-good dance music!",
              itemContentImg: "/65happy.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/NamQuaDaLamGi-BuiCongNam-8309403.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "Fetured Charts",
          itemContent: [
            {
              img: "/71globle.jpg",
              itemFooterH4: "Top Songs - Global",
              itemFooterP:
                "Your weekly update of the most played tracks right now - Global.",
              itemContentImg: "/71globle.jpg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },

                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
              ],
            },
            {
              img: "/72vietnam.jpg",
              itemFooterH4: "Top Songs - Global-Vietnam",
              itemFooterP:
                "Your weekly update of the most played tracks right now - Vietnam.",
              itemContentImg: "/72vietnam.jpg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
              ],
            },
            {
              img: "/73topspnggloble.jpg",
              itemFooterH4: "Top 50 - Global",
              itemFooterP:
                "Your daily update of the most played tracks right now - Global.",
              itemContentImg: "/73topspnggloble.jpg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
              ],
            },
            {
              img: "/74top50vienam.jpg",
              itemFooterH4: "Top 50 - Vietnam",
              itemFooterP:
                "Your daily update of the most played tracks right now - Vietnam.",
              itemContentImg: "/74top50vienam.jpg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/VuTruCoAnh-PhuongMyChiDTAPPhao-9297066.mp3",
                },
              ],
            },
            {
              img: "/75virulgloble.jpg",
              itemFooterH4: "Viral 50 - Global",
              itemFooterP:
                "Your daily update of the most viral tracks right now - Global.",
              itemContentImg: "/75virulgloble.jpg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "Try something else",
          itemContent: [
            {
              img: "/81hiphopviet.jpeg",
              itemFooterH4: "Thiên Hạ Nghe Gì",
              itemFooterP:
                "Những gì mà người bên cạnh bạn đang nghe. Ảnh bìa: Wren Evans",
              itemContentImg: "/81hiphopviet.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
              ],
            },
            {
              img: "/82lofi.jpeg",
              itemFooterH4: "Hot Hits Vietnam",
              itemFooterP:
                "Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Wren Evans",
              itemContentImg: "/82lofi.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HaiMuoiHai22-HuaKimTuyenAMEE-7231237.mp3",
                },
              ],
            },
            {
              img: "/83indam.jpeg",
              itemFooterH4: "Viral Hits",
              itemFooterP: "Viral, trending and taking off.",
              itemContentImg: "/83indam.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
              ],
            },
            {
              img: "/84remix.jpeg",
              itemFooterH4: "It's a Hit!",
              itemFooterP:
                "The hottest songs you need to listen to right now. Cover: Reneé Rapp, Megan Thee Stallion",
              itemContentImg: "/84remix.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
              ],
            },
            {
              img: "/85vpop.jpeg",
              itemFooterH4: "Disney Hits",
              itemFooterP:
                "All your favorite Disney hits, including songs from Wish.",
              itemContentImg: "/85vpop.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HinhNhuTaThichNhau-DoanHieuBMZ-8107565.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "More like Phương Ly",
          itemContent: [
            {
              img: "/91vucattuong.jpeg",
              itemFooterH4: "Vũ Cát Tường",
              itemFooterP: "Artist",
              itemContentImg: "/91vucattuong.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },

                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/EmLaCoffee-JukySan-8567787.mp3",
                },
              ],
            },
            {
              img: "/92chaudangkhoa.jpeg",
              itemFooterH4: "Châu Đăng Khoa",
              itemFooterP: "Artist",
              itemContentImg: "/92chaudangkhoa.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
                },
              ],
            },
            {
              img: "/93topnhacviet2020.jpeg",
              itemFooterH4: "Top Nhạc Việt 2020",
              itemFooterP:
                "Những nghệ sĩ Việt được nghe nhiều nhất năm 2020. Ảnh bìa: Sơn Tùng M-TP",
              itemContentImg: "/93topnhacviet2020.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/UngQuaChung-AMEE-8783624.mp3",
                },
              ],
            },
            {
              img: "/94dreamee.jpeg",
              itemFooterH4: "dreAMEE (acoustic)",
              itemFooterP: "AMEE",
              itemContentImg: "/94dreamee.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
              ],
            },
            {
              img: "/95cogainaylacuaai.jpeg",
              itemFooterH4: "Cô Gái Này Là Của Ai? (feat.Rush & Nhi Nhi)",
              itemFooterP: "Krix",
              itemContentImg: "/95cogainaylacuaai.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/TrenTaxiChangMuonVeNha-HoangDuyenJSOL-12334555.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "More like RHYDER",
          itemContent: [
            {
              img: "/101liu.jpeg",
              itemFooterH4: "Liu Grace",
              itemFooterP: "Artist",
              itemContentImg: "/101liu.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TheoEmVeNha-NgocMai-12748537.mp3",
                },
              ],
            },
            {
              img: "/102hyfra.jpeg",
              itemFooterH4: "Hydra",
              itemFooterP: "Artist",
              itemContentImg: "/102hyfra.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetNhaLaTetNhat-BuiCongNam-13231304.mp3",
                },
              ],
            },
            {
              img: "/103chiennhatlang.jpeg",
              itemFooterH4: "Chiennhatlang",
              itemFooterP: "Artist",
              itemContentImg: "/103chiennhatlang.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
              ],
            },
            {
              img: "/104indam.jpeg",
              itemFooterH4: "Inđậm Indie",
              itemFooterP:
                "Dàn lineup xịn xò đậm chất indie tại Những Thành Phố Mơ Màng diễn ra vào ngày 23/12/2023 tại Công viên Yên Sở, Hà Nội",
              itemContentImg: "/94dreamee.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/HoaCoMuaXuan-VoHaTram-12592230.mp3",
                },
              ],
            },
            {
              img: "/105bimatnho.jpeg",
              itemFooterH4: "Bí Mật Nhỏ",
              itemFooterP: "B Ray",
              itemContentImg: "/95cogainaylacuaai.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/FallingInLove-NaNgocAnh-8521307.mp3",
                },
              ],
            },
          ],
        },
        {
          titleList: "Shows to try",
          itemContent: [
            {
              img: "/111hw.jpeg",
              itemFooterH4: "Ha Chu Works",
              itemFooterP: "Ha Chu",
              itemContentImg: "/111hw.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },

                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/LaDoEmXuiThoi-KhoiSofiaDanTrangChauDangKhoa-7125647.mp3",
                },
              ],
            },
            {
              img: "/112khonggiadinh.jpeg",
              itemFooterH4: "Không Gia Đình",
              itemFooterP: "Nguyễn Quang Minh",
              itemContentImg: "/112khonggiadinh.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NhaMinhVuiTet-PhamDinhThaiNganIsaacThaiGabriel-6931453.mp3",
                },
              ],
            },
            {
              img: "/113hanhtrinhtamlinh.jpeg",
              itemFooterH4: "Hành trình tâm linh",
              itemFooterP: "Hành trình tâm linh",
              itemContentImg: "/113hanhtrinhtamlinh.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music:
                    "/music/NoiPhaoHoaRucRoFtCamVan-OrangeHoangDungHuaKimTuyen-13228699.mp3",
                },
              ],
            },
            {
              img: "/114truyenngan.jpeg",
              itemFooterH4: "Truyện Dài - Truyện Ngắn",
              itemFooterP: "Lộc Lá",
              itemContentImg: "/114truyenngan.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/BongDungMuonYeu-VickyNhung-12947755.mp3",
                },
              ],
            },
            {
              img: "/115suckhoe.jpeg",
              itemFooterH4: "Sức Khỏe Thân - Tâm -Trí",
              itemFooterP: "Fonos",
              itemContentImg: "/115suckhoe.jpeg",
              firstMusic:
                "/music/CoHenVoiThanhXuan-SuniHaLinhHoangDungGREYDDoanTheLanOrangeTlinh-7613769.mp3",
              listRow: [
                {
                  titleImg: "/41pop.jpeg",
                  titleH3: "Từng Quen",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "2:54",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/42poprising.jpeg",
                  titleH3: "Những Lời Hứa Bỏ Quên",
                  titleSinger1: "Vũ.",
                  titleSinger2: "Dear Jane",
                  album: "Những Lời Hứa Bỏ Quên",
                  date: "5 days ago",
                  time: "3:56",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/43animenow.jpeg",
                  titleH3: "Anh Là Ngoại Lệ Của Em",
                  titleSinger1: "Phương Ly",
                  titleSinger2: "",
                  album: "Anh Là Ngoại Lệ Của Em",
                  date: "2 weeks ago",
                  time: "3:08",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/35oc29.jpeg",
                  titleH3: "Hit Me Up (feat.Nomovodka)",
                  titleSinger1: "Binz",
                  titleSinger2: "Nomovodka",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:28",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/25nhgaihathaynhat.jpeg",
                  titleH3: "Bạn Đời",
                  titleSinger1: "Karik",
                  titleSinger2: "GDucky",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "5:00",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam6.jpeg",
                  titleH3: "bé ơi từ từ",
                  titleSinger1: "Wren Evans",
                  titleSinger2: "itsnk",
                  album: "Từng Quen",
                  date: "5 days ago",
                  time: "3:20",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam7.jpeg",
                  titleH3: "đưa em về nhàa",
                  titleSinger1: "GREY D",
                  titleSinger2: "Chillies",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "4:00",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam8.jpeg",
                  titleH3: "shhhhhhh",
                  titleSinger1: "WEAN",
                  titleSinger2: "tlinh",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:50",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg: "/itemContentImg/hothitvietnam/hothitvietnam9.jpeg",
                  titleH3: "Chịu Cách Mình Nói Thua",
                  titleSinger1: "RHYDER",
                  titleSinger2: "CoolKid, BAN",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:01",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
                {
                  titleImg:
                    "/itemContentImg/hothitvietnam/hothitvietnam10.jpeg",
                  titleH3: "Anh Luôn Như Vậy",
                  titleSinger1: "B Ray",
                  titleSinger2: "",
                  album: "Từng Quen",
                  date: "2 weeks ago",
                  time: "3:32",
                  music: "/music/TetLaDongMoiVui-DucPhucGDucky-8312831.mp3",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    contentIn: function (itemIn) {
      this.itemClick = itemIn;
      this.itemGo = itemIn;
      this.list1.itemContent.unshift(itemIn);
      this.list1.titleList = "Recently played";
      // thêm album chứa những list nhạc vừa nghe
      this.albumClick = itemIn;
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
    // click buttonPlay thì item đó sẽ phat list nhạc của item đó
    clickPlayList: function (itemPlay) {
      this.containerFooter = itemPlay;
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
  background: linear-gradient(
    to top,
    rgb(18, 18, 18),
    rgb(34, 26, 29),
    rgb(91, 56, 70)
  );
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
