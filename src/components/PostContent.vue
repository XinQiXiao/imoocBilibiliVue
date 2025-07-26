<script>
  import CommonHeader from "@/components/CommonHeader.vue";
  import PostVideo from "@/components/PostVideo.vue";

  export default {
    name: "PostContent",
    components: {CommonHeader, PostVideo},
  }
</script>

<template>
  <div class="post-content-container">
    <CommonHeader ></CommonHeader>
    <PostVideo></PostVideo>
  </div>
</template>

<style scoped lang="less">

</style>