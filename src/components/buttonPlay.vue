<template>
  <button class="button-play">
    <ion-icon name="caret-forward-outline"></ion-icon>
  </button>
</template>

<script>
export default {
  name: "buttonPlay",
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
.button-play {
  border: none;
  padding: 0;
  font-size: 30px;
  margin-right: 10px;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(30, 215, 96);

}
</style>
