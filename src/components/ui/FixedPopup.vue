<template>
  <teleport to="body">
    <div class="popup d-flex justify-content-center">
      <div class="progress-bar">
        <div class="bar" :style="`width: ${progressBar}%`"></div>
      </div>
      <div class="wrapper d-flex flex-column align-items-center">
        <div class="subtitle">
          Отправлено {{ initSteps }} из {{ finalSteps }} заявок
        </div>
        <p class="text">
          Получите персональное предложение с максимальной вероятностью
          одобрения
        </p>
        <div class="btn-wrapper">
          <a
            class="btn"
            :class="`${initSteps === finalSteps ? 'active' : ''}`"
            :href="maxOfferLink"
            target="_blank"
            @click="getMaxOfferLink(notClicked)"
            >Оформить займ</a
          >
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["initSteps", "finalSteps", "progressBar", "notClicked"],
  data() {
    return {
      maxOfferLink: null,
    };
  },

  methods: {
    getMaxOfferLink(arr) {
      const maxLinkEl = [...arr].reduce((acc, curr) =>
        acc.chance > curr.chance ? acc : curr
      );
      this.maxOfferLink = maxLinkEl.link;
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f4f4f4;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px 36px;
  overflow: hidden;
  z-index: 1000;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #ebebeb;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.bar {
  width: 10%;
  height: 100%;
  background: #32a1b9;
}
.wrapper {
  width: 100%;
  max-width: 1202px;
}
.subtitle {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.07em;
}
.text {
  margin-top: 24px;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
}
.btn-wrapper {
  margin-top: 24px;
}
.btn {
  display: block;
  width: 100%;
  min-width: 250px;
  height: 56px;
  background: #eaeaea;
  border-radius: 10px;

  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #8f8f8f;
  padding: 10px 36px;
  pointer-events: none;
  transition: background 0.3s linear, color 0.3s linear;
}
.btn.active {
  background: #42b28d;
  color: var(--white);
  pointer-events: unset;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .text,
  .subtitle {
    font-size: 20px;
    line-height: 22px;
  }
  .btn {
    font-size: 22px;
    line-height: 34px;
  }
}
@media (max-width: 768px) {
  .popup {
    padding: 16px 20px 24px 20px;
  }
  .wrapper {
    max-width: 100%;
  }
  .subtitle {
    font-size: 16px;
    line-height: 19px;
  }
  .text {
    margin-top: 12px;
    font-size: 16px;
    line-height: 24px;
  }
  .btn-wrapper {
    margin-top: 16px;
  }
  .btn {
    min-width: 160px;
    height: 40px;
    font-size: 16px;
    line-height: 25px;
    padding: 8px 22px;
  }
}
</style>
