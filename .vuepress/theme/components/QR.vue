<template>
  <div class="qr">
    <img
      src="../assets/qrcode.jpg"
      alt="全栈孤勇者"
      width="120"
      height="120"
      loading="lazy"
    />
    <p class="we-intro">
      如果你对前端和后端感兴趣的话，可以扫码关注我的公众号<span
        class="highlight"
        >全栈孤勇者</span
      >。
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
  margin-top: 10px;
  margin-bottom: -1rem;
  display: flex;
}

.qr .we-intro {
  color: #0006;
  font-size: 0.8em;
  width: 54%;
}
</style>
