<template>
  <div>
    <el-table border :data="data" v-loading="loading">
      <el-table-column
        v-for="c in columns"
        :key="c.prop"
        :prop="c.prop"
        :label="c.label"
        :align="c.align"
        :formatter="c.formatter"
      ></el-table-column>
    </el-table>
    <el-pagination
      class="data-pagination"
      layout="prev, pager, next"
      :total="allData.length"
      :page-Size="10"
      :current-page="pageId"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
import cancelTokenMixin from '../mixin/cancelTokenMixin'

export default {
  name: 'DataManage',
  mixins: [cancelTokenMixin],
  data () {
    return {
      pageName: '数据管理页面',
      allData: [],
      data: [],
      pageId: 1,
      pageSize: 10,
      loading: false,
      columns: [
        {
          prop: 'index',
          label: '索引',
          align: 'center'
        },
        {
          prop: 'name',
          label: '名称',
          align: 'center'
        },
        {
          prop: 'num',
          label: '个数',
          align: 'center'
        },
        {
          prop: 'price',
          label: '价格',
          align: 'center',
          formatter: row => `${row.price}元`
        },
        {
          prop: 'total',
          label: '总价',
          align: 'center',
          formatter: row => `${row.total}元`
        }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      axios.get('http://localhost:7000/data', { cancelToken: this.cancelToken }).then(res => {
        const data = res.data
        if (data.success) {
          this.allData = data.fruits
          this.changePage()
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err.message || '获取数据失败'
        })
      }).finally(() => {
        this.loading = false
      })
    },
    changePage (page) {
      if (page) {
        this.data = this.allData.slice((page - 1) * this.pageSize, page * this.pageSize)
        return
      }
      this.data = this.allData.slice((this.pageId - 1) * this.pageSize, this.pageId * this.pageSize)
    }
  }
}
</script>

<style scoped>
.data-pagination {
  float: right;
  margin-top: 20px;
}
</style>