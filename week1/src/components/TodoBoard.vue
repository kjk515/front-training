<template>
  <el-container class="wrapper">
    <el-header class="header" height="45px">
      <el-row>
        <el-col :span="8">
          <el-button size="small" icon="el-icon-menu"/>
        </el-col>
        <el-col :span="8" class="layout-center">
          <el-button size="small" type="danger" icon="el-icon-s-home"/>
        </el-col>
        <el-col :span="8" class="layout-right">
          <el-button size="small" icon="el-icon-plus"/>
        </el-col>
      </el-row>
    </el-header>

    <el-container class="container">
      <el-header>
        <el-row>
          <el-col :span="12" class="board-header-left">
            <span class="board-title">Welcome Board</span>
<!--            <el-button size="small" icon="el-icon-star-off"/>-->
          </el-col>
        </el-row>
      </el-header>

      <el-main class="cards-panel">
        <el-card class="box-card">
          <div slot="header">
            <span class="card-title">Card name</span>
            <el-button class="card-option" type="text" icon="el-icon-more"/>
          </div>
          <a v-for="o in 4" :key="o" href="#" class="text item">
            {{'List item ' + o }}
          </a>
        </el-card>

      </el-main>
    </el-container>
  </el-container>
</template>
<script>

</script>
<style lang="scss">
  .wrapper {
    height: 100%;
  }
  .header {
    background-color: rgb(245, 108, 108);
    padding: 5px;
  }
  .container {
    background-color: rgb(233, 233, 235);
    .el-header {
      padding: 10px;
    }
  }
  .cards-panel {
    white-space: nowrap;
  }
  .box-card {
    display: inline-block;
    margin-right: 10px;
    width: 300px;
    background-color: rgb(144, 147, 153);
  }
  .card-title {
    font: 15px bold;
    color: white;
  }
  .card-option {
    float: right; padding: 0;
    color: white;
  }
  .text {
    font-size: 15px;
  }
  .item {
    display: block;
    padding: 10px;
    margin-bottom: 18px;
    background-color: white;
    border-radius: 4px;
  }
  .layout-right {
    text-align: right;
  }
  .layout-center {
    text-align: center;
  }
  .board-title {
    font-weight: 700;
    font-size: 20px;
    margin: 10px;
  }
</style>
