<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-setting"></i> 修改密码
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="hover" class="container">
      <el-row style="padding: 0 15%">
        <el-form :model="form">
          <el-form-item label="旧密码" label-width="80px">
            <el-input :type="password" v-model="form.oldpassword"/>
          </el-form-item>
          <el-form-item label="新密码" label-width="80px">
            <el-input :type="password" v-model="form.newpassword"/>
          </el-form-item>
          <el-form-item label="确认密码" label-width="80px">
            <el-input :type="password" v-model="form.newpasswordconfirm"/>
          </el-form-item>
          <el-form-item>
            <el-button style="float:right" size="small" type="primary">确认修改</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PwdSetting',
  data() {
    return {
      form: {
        oldpassword: '',
        newpassword: '',
        newpasswordconfirm: '',
      }
    }
  }
}
</script>

<style scoped>

</style>