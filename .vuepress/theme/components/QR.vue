<template>
  <div class="qr">
    <img
      src="../assets/fullstack-ren-wechat.png"
      alt="全栈孤勇者"
      width="70"
      height="70"
      loading="lazy"
    />
    <p class="we-intro">
      订阅号：全栈孤勇者。</br>若加我微信（fullstack-ren）请备注<span class="highlight">全栈孤勇者</span>，然后加群「侃」大山。
    </p>
  </div>
</template>

<script>
export default {
  name: "QR",
};
</script>

<style>
.qr {
  margin-left: -1.5rem;
  margin-bottom: -1rem;
  display: flex;
  background-color: #f8f8f8;
  padding: 8px;
}

.qr .we-intro {
  padding: 0;
  color: #0006;
  font-size: 0.8em;
  margin: 0 0 0 10px;
  width: 90%;
}
</style>
