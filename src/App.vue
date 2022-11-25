<template>
  <the-header />
  <section>
    <div class="container">
      <h1 class="title">Мгновенные займы онлайн</h1>
      <div class="description">
        <p>
          Для 100% одобрения
          <span class="description__bold">отправьте 3 заявки</span>
          в несколько банков
        </p>
      </div>
      <the-loans />
    </div>
  </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheLoans from "./components/Loans/TheLoans.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheLoans,
  },
};
</script>

<style>
@import url("./assets/styles/reset.css");
@import url("./assets/styles/fonts.css");

:root {
  --black: #181818;
  --black-light: #373737;
  --white: #f5f5f5;
  --white-bg: #fafafa;
  --white-light: #fefeff;
  --orange: #f8a03a;
}
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
img,
svg {
  max-width: none;
  height: 100%;
}

body {
  font-family: "Gilroy", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  position: relative;
  background: var(--black-light);
  color: var(--black);
  font-weight: 400;
  font-style: normal;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.flex-column {
  flex-direction: column;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-center {
  justify-content: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.container {
  width: 100%;
  max-width: 1076px;
  padding: 0 40px;
  margin: 0 auto;
}
.title {
  margin-top: 24px;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.07em;
  color: var(--white);
}
.description {
  margin-top: 24px;
}
.description p {
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.07em;
  color: var(--white);
}
.description__bold {
  font-weight: 600;
}
section {
  padding-bottom: 230px;
}
@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 28px;
  }
  .title {
    margin-top: 12px;
    font-size: 36px;
    line-height: 44px;
  }
  .description {
    margin-top: 12px;
  }
  .description p {
    font-size: 16px;
    line-height: 24px;
  }

  section {
    padding-bottom: 90px;
  }
}
</style>
