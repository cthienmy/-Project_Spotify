<template>
  <div class="tabBar">
    <div>
      <div class="changePage">
        <button v-on:click="clickBack" class="changePage-iconleft">
          <i class="el-icon-arrow-left"></i>
        </button>
        <button v-on:click="clickGo" class="changePage-iconright">
          <i class="el-icon-arrow-right"></i>
        </button>
      </div>
      <div class="explore">
        <button class="button-explore">Explore Premium</button>
        <button class="button-intall">
          <div><i class="el-icon-bottom"></i></div>
          <p>Install App</p>
        </button>
        <button class="explore-iconbell">
          <i class="el-icon-bell"></i>
        </button>
        <button class="explore-iconuser">
          <i class="el-icon-user"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {};
  },
  methods: {
    clickBack: function () {
      this.$emit("clickBack");
    },
    clickGo: function () {
      this.$emit("clickGo");
    },
  },
};
</script>

<style>
.tabBar {
  position: fixed;
  top: 0;
  width: 992.7px;
}
.tabBar div {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.changePage-iconleft {
  font-size: 20px;
  margin-right: 10px;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  align-self: center;
  padding: 0;
  background-color: rgb(10, 10, 10);
  color: rgb(255, 255, 255);
  border: none;
}
.changePage-iconright {
  font-size: 20px;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  align-self: center;
  padding: 0;
  background-color: rgb(10, 10, 10);
  color: rgb(167, 167, 167);
  border: none;
}
.explore {
  display: flex;
}
.button-explore {
  margin-right: 10px;
  font-size: 13px;
  padding: 0 16px;
  border-radius: 35px;
  border: none;
  font-weight: 600;
}
.button-intall {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 13px;
  padding: 0 16px;
  border-radius: 35px;
  background-color: rgb(10, 10, 10);
  color: rgb(255, 255, 255);
  border: none;
  font-weight: 600;
}
.button-intall div {
  font-size: 12px;
  /* font-weight: 900;??????? */
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
}
.button-intall p {
  margin: 0;
}
.explore-iconbell {
  font-size: 18px;
  margin-right: 10px;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  align-self: center;
  padding: 0;
  background-color: rgb(10, 10, 10);
  color: rgb(167, 167, 167);
  border: none;
}
.explore-iconuser {
  font-size: 18px;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  align-self: center;
  padding: 0;
  background-color: rgb(10, 10, 10);
  color: rgb(255, 255, 255);
  border: none;
}
</style>
