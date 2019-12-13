<template>
  <div>
    <h2>个人财产表</h2>
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
  name: 'Data',
  mixins: [cancelTokenMixin],
  data () {
    return {
      allData: [],
      data: [],
      loading: false,
      pageId: 1,
      pageSize: 10,
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
          prop: 'age',
          label: '年龄',
          align: 'center'
        },
        {
          prop: 'money',
          label: '财产',
          align: 'center',
          formatter: row => `${row.money}元`
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
      axios.get('http://localhost:7000/message', { cancelToken: this.cancelToken }).then(res => {
        const data = res.data
        if (data.success) {
          this.allData = data.message
          this.changePage()
        }
      }).catch(err => {
        console.log(`信息管理页面${err.message}`)
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