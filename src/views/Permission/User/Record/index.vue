<template>
  <el-card id="permission-wrap" class="box-card">
    <div class="permission-content">
      <el-row class="top-row">
        <el-col :span="24"
          ><div class="top-col">
            <el-button
              type="primary"
              class="is-active"
              @click="$router.push({ path: `list` })"
              >總覽
            </el-button>
            <el-button @click="$router.push({ path: `login-session` })"
              >帳號登入紀錄
            </el-button>
          </div></el-col
        >
      </el-row>
      <el-row class="second-row">
        <el-col class="second-col" :span="13">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="日期｜ 請選擇日期"
            >
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="20">
          <el-time-picker
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="時間（起）"
            end-placeholder="時間（迄）"
          >
          </el-time-picker>
        </el-col>

        <el-col :span="4">
          <el-button
            type="primary"
            icon="el-icon-search"
            >查詢
          </el-button>
        </el-col>
      </el-row>
      <el-row offest="1">
        <el-col :span="24">
          <el-table
            :header-cell-style="tableHeaderColor"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column label="項目" width="50">
              <template #default="scope">
                <span>{{ scope.row.item }}</span>
              </template>
            </el-table-column>
            <el-table-column label="帳號" width="120">
              <template #default="scope">
                <span>{{ scope.row.account }}</span>
              </template>
            </el-table-column>
            <el-table-column label="單位" width="150">
              <template #default="scope">
                <span >{{ scope.row.company }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="80">
              <template #default="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="類別" width="80">
              <template #default="scope">
                <span >{{
                  scope.row.department
                }}</span>
              </template>
            </el-table-column>
            <el-table-column label="狀態" width="80">
              <template #default="scope">
                <span >{{ scope.row.auth }}</span>
              </template>
            </el-table-column>

            <el-table-column label="時間" width="220">
              <template #default="scope">
                <span>{{ scope.row.time }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          item: '1',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '林O柔',
          department: '員工',
          auth: '登入',
          time: '2021-09-03 14:30:56'
        },
        {
          item: '2',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '楊O智',
          department: '員工',
          auth: '登出',
          time: '2021-09-03 14:30:56'
        },
        {
          item: '3',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '李O達',
          department: '員工',
          auth: '登入',
          time: '2021-09-03 14:30:56'
        },
        {
          item: '4',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '李O達',
          department: '廠商',
          auth: '登出',
          time: '2021-09-03 14:30:56'
        }
      ]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    tableHeaderColor ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: lightblue;color: #C6EBF6'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
#permission-wrap {
  margin: 5px 20px;
  border-radius: 15px;
  .permission-content {
    padding: 5px 10px;
  }
  .top-row {
    margin-top: -10px;
    @include flex(row, space-between, flex-start);
  }
  .top-col {
    margin-top: 20px;
    margin-bottom: 20px;
    .el-input {
      border: $color_blue;
    }
  }
  .second-row {
    padding: 0px;
    margin-bottom: 20px;
    @include flex(row, space-between, flex-start);
  }
}
</style>
