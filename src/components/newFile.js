/* __placeholder__ */
export default (await import("vue")).defineComponent({
  name: "footerPlay",
  props: {
    containerFooter: Object,
  },
  data() {
    return {
      tagAudio: null,
      run: false,
      index: 0,
    };
  },
  methods: {
    enterPlay: function () {
      if (this.tagAudio === null) {
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
        this.tagAudio.play();
        this.run = !this.run;
        console.log("run", this.run);
      } else {
        if (
          this.tagAudio.src.replace("http://localhost:5173", "") !=
          this.containerFooter.listRow[this.index].music
        ) {
          this.tagAudio = new Audio(
            this.containerFooter.listRow[this.index].music
          );
          this.tagAudio.play();
          this.run = !this.run;
          console.log("run", this.run);
          // ..........
          this.index = this.index + 1;
          console.log("index+1:", this.index);
          this.tagAudio = new Audio(
            this.containerFooter.listRow[this.index].music
          );
          console.log(
            "audio play:",
            this.tagAudio.src.replace("http://localhost:5173", "")
          );
          //
          this.tagAudio.play();
        } else {
          this.tagAudio.play();
          this.run = !this.run;
          console.log("run s", this.run);
        }
      }
    },
    enterPause: function () {
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
  },
});
