<template>
  <div class="list-row">
    <div class="list-row-stt">{{ index + 1 }}</div>
    <div class="list-row-title">
      <img v-bind:src="itemRow.titleImg" />
      <div>
        <a href="#"
          ><h3>{{ itemRow.titleH3 }}</h3></a
        >
        <span>
          <div class="singer">
            <a href="#">{{ itemRow.titleSinger1 }}</a
            >, <a href="#">{{ itemRow.titleSinger2 }}</a>
          </div>
        </span>
      </div>
    </div>
    <div class="list-row-album">
      <a href="#">{{ itemRow.album }}</a>
    </div>
    <div class="list-row-date">{{ itemRow.date }}</div>
    <div class="list-row-time">{{ itemRow.time }}</div>
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

<style></style>
