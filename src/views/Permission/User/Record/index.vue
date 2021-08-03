<template>
  <div id="permission-wrap">
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
        <el-col class="second-col" :span="10">
          <div class="block">
            <span class="demonstration">日期</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="請選擇日期"
            >
            </el-date-picker>
          </div>
          <el-col :span="20">
               <el-time-picker
              is-range
              v-model="value1"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
            >
            </el-time-picker>
          </el-col>
        </el-col>
        <el-col :span="3" class="second-col">
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="$router.push({ path: `add` })"
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
                <span style="margin-left: 10px">{{ scope.row.item }}</span>
              </template>
            </el-table-column>
            <el-table-column label="帳號" width="120">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.account }}</span>
              </template>
            </el-table-column>
            <el-table-column label="單位" width="160">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.company }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="100">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="部門" width="100">
              <template #default="scope">
                <span style="margin-left: 10px">{{
                  scope.row.department
                }}</span>
              </template>
            </el-table-column>
            <el-table-column label="權限" width="120">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.auth }}</span>
              </template>
            </el-table-column>

            <el-table-column label="動作" width="80">
              <template #default="">
                <i
                  @click="$router.push({ path: `edit/:id` })"
                  class="fas fa-pen"
                ></i>
                <i class="far fa-trash-alt"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
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
          department: '行銷部',
          auth: '申請帳號'
        },
        {
          item: '2',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '楊O智',
          department: '行銷部',
          auth: '自訂'
        },
        {
          item: '3',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '李O達',
          department: '人資管理部',
          auth: '申請帳號'
        },
        {
          item: '4',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '李O達',
          department: '人資管理部',
          auth: '申請帳號'
        },
        {
          item: '5',
          account: 'Username123',
          company: 'OOO股份有限公司',
          name: '李O達',
          department: '人資管理部',
          auth: '申請帳號'
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

<style lang="scss">
@import "@/style/main.scss";
#permission-wrap {
  margin: 5px 30px;
  height: 100%;
  background-color: $color_white;
  border-radius: 15px;
  .permission-content {
    padding: 10px 25px;
  }
  .top-row {
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
    .el-input__inner {
      color: $color_grey !important;
    }
  }
}
</style>
