<template>
<div>
  <!--面包屑导航区-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    <el-breadcrumb-item>商品分类</el-breadcrumb-item>
  </el-breadcrumb>

<!--  卡片视图区域-->
  <el-card>
    <el-row>
      <el-col>
        <el-button type="primary">添加分类</el-button>
      </el-col>
    </el-row>
<!--    表格-->
<tree-table :data="catelist" :columns="columns"></tree-table>
<!--    分页-->
  </el-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      // 商品分类列表，默认为空
      catelist: [],
      total: 0,
      columns: [{
        label: '分类名称',
        prop: 'cat_name'
      }]
    }
  },
  created () {
    this.getCateList()
  },
  methods: {
    // 获取商品数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories', { params:this.querInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品列表失败')
      }
      // 把数据列表赋值给catelist
      this.catelist = res.data.result
      this.total = res.data.total
    }
  }
}
</script>

<style lang="less" scoped>

</style>
