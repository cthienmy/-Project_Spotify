<template>
  <button class="button-play">
    <ion-icon name="pause-outline"></ion-icon>
  </button>
</template>

<script>
export default {
  name: "buttonPause",
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
  /* visibility: hidden;
  position: absolute;
  right: 13px;
  top: 112px; */
}
</style>
