<template>
  <footer>
    <div class="container d-flex justify-content-around align-items-center">
      <div class="brand d-flex">
        <div class="logo">
          <img
            src="../../public/logo-footer.png"
            alt=""
          >
        </div>
        <h1 class="title">
          GOOD SHEPHERD<br><small>MANOR</small>
        </h1>
      </div>
      <div class="footer-info">
        <p>地址資訊：莊園地址</p>
        <p>電話聯絡：(02)26579428</p>
        <p>Email：neihuecc@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_base.scss";
@import "../assets/scss/reset.scss";
footer {
  position: relative;
  background-color: rgba($color:#56675F, $alpha: 1.0);
  height: 200px;
  width: 100%;
  .container {
    height: 100%;
    width: 100%;
  }
}
.brand {
  height: 45px;
  .logo {
    margin-right: 9px;
    img {
      width: 101px;
      height: 45px;
      object-fit: cover;
    }
  }
  .title {
    @include font-setting('Noto Serif TC', normal, 800, 20px, 20px, #F2F5F4);
    letter-spacing: 0.025em;
    small {
      @include font-setting('Noto Serif TC', normal, 400, 18px, 18px, #F2F5F4);
      letter-spacing: 0.025em;
    }
  }
}
.footer-info {
    p {
        @include font-setting('Noto Serif TC', normal, 400, 13px, 29px, #FFF)
    }
}
</style>
