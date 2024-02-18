<template>
  <div class="container footer-wrap">
    <!-- <img
      src="../assets/wechat-run-kit.jpeg"
      alt="全栈人月"
      width="90"
      height="90"
      loading="lazy"
      class="connect-wechat"
    /> -->
    <div class="footer-connect">©全栈人月 2011-2023</div>
  </div>
</template>

<style>
.footer-wrap {
  position: relative;
  height: 40px;
  padding: 1rem 0;
}
/* .footer-wrap p {
  margin: 0.2rem 0;
  line-height: 24px;
} */
.connect-wechat {
  position: absolute;
  top: 0;
  right: 1.8rem;
  width:  90px;
  height: 90px;
}
.footer-connect {
  line-height: 40px;
  text-align: center;
}
.footer-connect .item {
  display: inline-block;
  padding: 0 0.4rem;
  transition: all 0.4s ease;
  opacity: 0.8;
}
.footer-connect .item img{
  position: relative;
  top: 6px;
}
.footer-connect .item:hover{
  opacity: 1;
  border-radius: 9px;
  /* transform: translateY(-5px); */
  box-shadow: 0 0 10px -3px rgb(0 0 0 / 30%);
}
</style>