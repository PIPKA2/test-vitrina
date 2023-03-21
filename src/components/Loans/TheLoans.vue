<template>
  <div class="loans" :class="`${popupIsActive ? 'padding' : ''}`" @click="test">
    <div class="wrapper">
      <the-loan
        v-for="(offer, index) in isArrSorted"
        :key="offer.id"
        :offer="offer"
        :initSteps="startSteps"
        :finalSteps="maxSteps"
        :offerPos="index"
        @increase="increaseInitNum"
        @decrease="decreaseInitNum"
        @jumpToEnd="getSortedArr"
        @checkPopup="getActivePopup"
        @filterActive="filterActiveOffer"
        @clickActive="addToClickedArr"
      />
    </div>
  </div>
  <fixed-popup
    :initSteps="startSteps"
    :finalSteps="maxSteps"
    :progressBar="initProgressBar"
    :notClicked="notClickedArr"
    v-if="popupIsActive"
  />
</template>

<script>
import axios from "axios";

import TheLoan from "./TheLoan.vue";
import FixedPopup from "../ui/FixedPopup.vue";

export default {
  components: {
    TheLoan,
    FixedPopup,
  },
  data() {
    return {
      offers: [],
      startSteps: 0,
      counter: 0,
      maxSteps: 3,
      initProgressBar: 10,
      propgressBarStep: 30,
      popupIsActive: false,
      sortedArr: null,
      notClickedArr: null,
      clickedArr: [],
    };
  },
  created() {
    this.goBack("https://yescash.ru" + window.location.search);
    // get data
    axios
      .get("/api/final" + window.location.search)
      .then((res) => {
        if (Object.prototype.hasOwnProperty.call(res.data, "targets")) {
          this.offers = Object.freeze(res.data.targets.default);
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  methods: {
    //increase orders steps
    increaseInitNum() {
      this.counter++;
      if (this.counter <= this.maxSteps) {
        this.startSteps++;
        this.initProgressBar += this.propgressBarStep;
      }
    },
    //decrease orders steps
    decreaseInitNum() {
      this.counter--;
      if (this.counter < this.maxSteps) {
        this.startSteps--;
        this.initProgressBar -= this.propgressBarStep;
      }
    },
    // filtered array
    getSortedArr(pos) {
      const copyArr = [
        ...(this.sortedArr ? this.sortedArr : this.offers),
      ].filter((item, n) => n !== pos);
      const deletedItem = [
        ...(this.sortedArr ? this.sortedArr : this.offers),
      ].splice(pos, 1);
      const newArr = copyArr.concat(deletedItem);
      this.sortedArr = newArr;
    },
    //show popup
    getActivePopup(state) {
      this.popupIsActive = state;
    },
    //comebacker
    goBack(url) {
      if (window.history && history.pushState) {
        window.history.pushState(-1, null);
        window.history.pushState(0, null);
        window.history.pushState(1, null);
        window.history.go(-1);

        window.onpopstate = (e) => {
          if (e.state === -1) {
            window.location.href = url;
          }
        };
      }
    },
    //remove active offer
    filterActiveOffer(id) {
      const copyArr = [
        ...(this.notClickedArr ? this.notClickedArr : this.sortedArr),
      ].filter((item) => item.id !== id);
      this.notClickedArr = copyArr;
    },
    // create clicked offers arr
    addToClickedArr(id) {
      const notActive = [...this.sortedArr].filter((item) => item.id === id);
      const newArr = this.notClickedArr.concat(notActive);
      this.notClickedArr = newArr;
    },
  },
  computed: {
    isArrSorted() {
      return this.sortedArr ? this.sortedArr : this.offers;
    },
  },
};
</script>

<style scoped>
/* добавлять класс если есть popup */
.padding {
  padding-bottom: 24px;
}
.loans {
  width: 100%;
  margin-top: 48px;
}
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 31.8%);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
@media (max-width: 1200px) {
  .wrapper {
    grid-template-columns: repeat(2, 48.8%);
  }
}
@media (max-width: 768px) {
  .padding {
    padding-bottom: 104px;
  }
  .loans {
    margin-top: 24px;
  }
  .wrapper {
    grid-template-columns: repeat(1, 100%);
    grid-column-gap: 0;
    grid-row-gap: 12px;
  }
}
</style>
