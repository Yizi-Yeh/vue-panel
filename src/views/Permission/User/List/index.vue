<template>
  <el-card id="permission-wrap" class="box-card">
    <div class="permission-content">
      <el-row class="top-row">
        <el-col :span="20"
          ><div class="top-col">
            <el-button
              type="primary"
              class="is-active"
              @click="$router.push({ path: `` })"
              >總覽
            </el-button>
            <el-button @click="$router.push({ path: `login-session` })"
              >帳號登入紀錄
            </el-button>
          </div></el-col
        >
        <el-col :span="10">
          <div class="top-col">
            <el-input
              style="font-family:'EB Garamond"
              suffix-icon="el-icon-search"
              type="text"
              placeholder="請輸入關鍵字"
              v-model="query"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row class="second-row">
        <el-col class="second-col" :span="19">
          <el-select v-model="value" placeholder="請選擇單位">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="請選擇部門">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="請選擇權限">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5" class="second-col">
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="$router.push({ path: `add` })"
            >新增帳號
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
            <el-table-column label="項目" width="60">
              <template #default="scope">
                <span>{{ scope.row.item }}</span>
              </template>
            </el-table-column>
            <el-table-column label="帳號" width="130">
              <template #default="scope">
                <span>{{ scope.row.account }}</span>
              </template>
            </el-table-column>
            <el-table-column label="單位" width="170">
              <template #default="scope">
                <span>{{ scope.row.company }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="90">
              <template #default="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="部門" width="100">
              <template #default="scope">
                <span>{{ scope.row.department }}</span>
              </template>
            </el-table-column>
            <el-table-column label="權限" width="100">
              <template #default="scope">
                <span>{{ scope.row.auth }}</span>
              </template>
            </el-table-column>

            <el-table-column label="動作" width="110">
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

<style lang="scss" scoped>
@import "@/style/main.scss";
#permission-wrap {
  margin: 5px 20px;
  border-radius: 15px;
  .permission-content {
    padding: 5px 10px;
  }
  .top-row {
    @include flex(row, space-between, flex-start);
    margin-top: -10px;
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
    .second-col {
      .el-input__inner {
        border: none;
      }
      .el-input__suffix {
        right: 28px;
      }
    }
  }
}
</style>
