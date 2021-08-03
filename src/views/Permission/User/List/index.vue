<template>
  <div id="permission-wrap">
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
            <el-button @click="$router.push({ path: `add` })"
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
              @blur="blurSearchFor"
              v-focus="blurFocus"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row class="second-row">
        <el-col class="second-col" :span="20">
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
        <el-col :span="4" class="second-col">
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
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="項目" width="60">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.item }}</span>
              </template>
            </el-table-column>
            <el-table-column label="帳號" width="120">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.account }}</span>
              </template>
            </el-table-column>
            <el-table-column label="單位" width="120">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.company }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="100">
              <template #default="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="部門" width="120">
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
              <template #default="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
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
          department: '林O柔',
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
    @include flex(row, space-between, flex-start);
    .el-input__inner {
      border: none;
      color: $color_black;
    }
  }
}
</style>
