<template>
  <header>
    <div class="container">
      <div class="logo d-flex align-items-center justify-content-center">
        <img src="@/assets/images/logo.svg" alt="логотип" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  padding-top: 68px;
}
.logo {
  margin: 0 auto;
  width: 54px;
  height: 42px;
  overflow: hidden;
}
@media (max-width: 1200px) {
  header {
    padding-top: 48px;
  }
}
@media (max-width: 768px) {
  header {
    padding-top: 32px;
  }
}
</style>
