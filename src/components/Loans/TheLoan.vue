<template>
  <div
    class="card d-flex flex-column align-items-center"
    :class="`${isActive ? 'active' : ''}`"
  >
    <div class="top">
      <div class="logo d-flex align-items-center justify-content-center">
        <img :src="offer.logo" :alt="offer.title" :title="offer.title" />
      </div>
      <div class="price">{{ offer.header }} ₽</div>
    </div>
    <div class="bottom">
      <div class="percent">
        <span>{{ offer.chance }}%</span> /день
      </div>
      <div class="years">{{ offer.subHeader }}</div>
    </div>
    <div class="btn-wrapper d-flex justify-content-center">
      <a
        class="btn"
        target="_blank"
        :href="offer.link"
        @click="toggleActive($event)"
        >{{ `${isActive ? "Отменить" : "Получить деньги"}` }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["offer", "initSteps", "finalSteps", "offerPos"],
  emits: ["increase", "decrease", "jumpToEnd", "checkPopup"],
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggleActive(e) {
      if (!this.isActive) {
        if (this.initSteps < this.finalSteps) {
          this.isActive = true;
          this.increaseNum();
          this.getToEnd();
          this.showPopup();
        } else {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
        this.isActive = false;
        this.decreaseNum();
      }
    },
    increaseNum() {
      this.$emit("increase");
    },
    decreaseNum() {
      this.$emit("decrease");
    },
    getToEnd() {
      this.$emit("jumpToEnd", this.offerPos);
    },
    showPopup() {
      this.$emit("checkPopup", true);
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 100%;
  min-height: 270px;
  background: var(--white-bg);
  border: 1px solid var(--black);
  box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01),
    0px 131px 78px rgba(205, 207, 210, 0.05),
    0px 58px 58px rgba(205, 207, 210, 0.09),
    0px 15px 30px rgba(180, 185, 204, 0.08),
    0px 0px 0px rgba(135, 135, 135, 0.42);
  border-radius: 10px;
  padding: 20px 32px;
  transition: border 0.3s linear;
}

.card.active {
  border: 2px solid var(--orange);
}

.logo {
  max-width: 136px;
  width: 100%;
  height: 32px;
  overflow: hidden;
  margin: 0 auto;
}
.price {
  margin-top: 12px;
  font-weight: 600;
  font-size: 36px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.07em;
  color: var(--black);
}
.bottom {
  margin-top: 12px;
}
.percent,
.years {
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.07em;
}
.percent span {
  font-size: 24px;
  line-height: 26px;
  color: #1c5e6c;
  font-weight: 600;
}
.years {
  margin-top: 12px;
  height: 42px;
}
.btn-wrapper {
  margin-top: 12px;
  width: 100%;
}
.btn {
  display: block;
  width: 100%;
  max-width: 250px;
  height: 56px;
  background: var(--orange);
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.07em;
  color: var(--white-light);
  padding: 12px 34px;
  transition: border 0.3s linear, background 0.3s linear, color 0.3 linear;
}

.card.active .btn {
  border: 1px solid var(--orange);
  color: var(--orange);
  background: var(--white-bg);
}
@media (max-width: 1200px) {
  .price {
    font-size: 32px;
  }
}
@media (max-width: 768px) {
  .card {
    min-height: 122px;
    border: 1px solid transparent;
    padding: 12px 16px;
  }

  .top,
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .logo {
    max-width: 98px;
    height: 24px;
    margin: 0;
    justify-content: flex-start;
  }

  .top {
    padding-bottom: 10px;
    border-bottom: 0.5px solid #000000;
  }
  .price {
    margin-top: 0;
    font-size: 26px;
    line-height: 31px;
  }
  .bottom {
    margin-top: 10px;
  }
  .percent,
  .years {
    font-size: 14px;
    line-height: 20px;
  }
  .percent span {
    font-size: 18px;
    line-height: 21px;
  }
  .years {
    margin-top: 0;
    height: initial;
  }
  .btn-wrapper {
    margin-top: 10px;
  }
  .btn {
    max-width: 288px;
    height: 32px;
    font-size: 18px;
    line-height: 27px;
    padding: 4px 24px;
    border-radius: 5px;
  }
}
@media (max-width: 575px) {
  .price {
    font-size: 24px;
    line-height: 29px;
  }

  .percent,
  .years {
    font-size: 12px;
    line-height: 18px;
  }
  .percent span {
    font-size: 16px;
    line-height: 19px;
  }
  .btn {
    font-size: 16px;
    line-height: 25px;
  }
}
</style>
