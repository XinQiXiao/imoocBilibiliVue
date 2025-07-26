<template>
  <div class="post-video-container">
    <div class="post-video-body" @dragover.prevent @drop="handleDrop">
      <i class="el-icon-upload2"></i>
      <div v-if="uploadedFileName">{{uploadedFileName}}</div>
      <div v-else>拖拽到此处也可上传</div>
      <input type="file" ref="fileInput" @change="setVideo"
        style="display: none" accept="video/*" 
      />
      <el-button @click="selectVideo" class="video-operation-btn" type="primary">
        选择视频
      </el-button>
      <el-button @click="uploadVideo" class="video-operation-btn" type="primary">
        上传视频
      </el-button>
      <div v-if="uploadProgress > 0" class="upload-progress">
        <progress :value="uploadProgress" max="100" ></progress>
        {{uploadProgress}}%
      </div>
      <video ref="videoElement" style="display: none"></video>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostVideo",
  data(){
    return {
      uploadedFileName:null,
      uploadProgress:0,
      selectedFile:null,
    }
  },
  methods: {
    selectVideo(){
      console.log('selectVideo')
      this.$refs.fileInput.click();
    },
    handleDrop(event){
      
      event.preventDefault();
      const files = event.dataTransfer.files;
      console.log('handleDrop files=>', files)
      if(files.length > 0){
        this.selectedFile = files[0];
        this.uploadedFileName = this.selectedFile.name;
      }
    },
    setVideo(){
      
      const files = this.$refs.fileInput.files;
      console.log('setVideo files=>', files)
      if(files.length > 0){
        this.selectedFile = files[0];
        this.uploadedFileName = this.selectedFile.name;
      }
    },
    uploadVideo(){},
  },
}
</script>

<style scoped lang="less">
.post-video-container {
  max-width: 830px;
  margin: 0 auto;
  position: relative;

  .post-video-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    position: relative;
    color: #999;
    font-size: 14px;
    border: 2px dashed #ccc;
    padding: 30px;

    .el-icon-upload2{
      font-size: 30px;
    }
    .video-operation-btn{
      margin-top: 20px;
      font-size: 16px;
      margin-left:0;
    }
    .upload-progress{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;
      font-size: 16px;
      margin-left:0;
    }
  }
}
</style>