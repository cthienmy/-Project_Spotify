<template>
  <div class="list-row">
    <div class="stt">
      <div class="list-row-stt">{{ index + 1 }}</div>
      <div class="list-row-pause"><ion-icon name="caret-forward-outline"></ion-icon></div>
      <!-- <div class="list-row-play"><ion-icon name="pause-outline"></ion-icon></div> -->
    </div>


    <div class="list-row-title">
      <img v-bind:src="itemRow.titleImg" />
      <div>
        <a href="#">
          <h3>{{ itemRow.titleH3 }}</h3>
        </a>
        <span>
          <div class="singer">
            <a href="#">{{ itemRow.titleSinger1 }}</a>, <a href="#">{{ itemRow.titleSinger2 }}</a>
          </div>
        </span>
      </div>
    </div>
    <div class="list-row-album">
      <a href="#">{{ itemRow.album }}</a>
    </div>
    <div class="list-row-date">{{ itemRow.date }}</div>

    <div class="time">
      <div class="list-row-heart"><ion-icon name="heart-outline"></ion-icon></div>
      <div class="list-row-time">{{ itemRow.time }}</div>
      <div class="list-row-other"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "itemContentListRow",
  props: {
    itemRow: Object,
    index: Number,
  },
};
</script>

<style>
.list-row {
  display: flex;
  padding: 7px 0;
  font-size: 14px;
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

.stt {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
}

.list-row-stt {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;

}

.list-row:hover .list-row-stt {
  visibility: hidden;
}

.list-row-pause {
  visibility: hidden;
}

.list-row:hover .list-row-pause {

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  visibility: visible;
}


/* .list-row-play {
  visibility: hidden;

}

.list-row:hover .list-row-play {

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  visibility: visible;
} */

.list-row-title {
  display: flex;
  align-items: center;
  width: 35%;
  font-size: 13px;
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

.time {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-row-time {
  margin: 0 10px 0 20px;
}

.list-row-heart {
  visibility: hidden;
}

.list-row:hover .list-row-heart {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  visibility: visible;
}

.list-row-other {

  visibility: hidden;
}

.list-row:hover .list-row-other {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: aliceblue;
  visibility: visible;
}
</style>
