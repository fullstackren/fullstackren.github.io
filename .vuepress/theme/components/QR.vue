<template>
  <div class="qr">
    <img
      src="../assets/qrcode.jpg"
      alt="全栈孤勇者"
      width="70"
      height="70"
      loading="lazy"
    />
    <p class="we-intro">
      若加我微信请备注<span class="highlight">全栈孤勇者</span>，一起加群「侃」大山
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
  padding: 8px
}

.qr .we-intro {
  color: #0006;
  font-size: 0.8em;
  margin-left: 10px;
  width: 90%;
}
</style>
