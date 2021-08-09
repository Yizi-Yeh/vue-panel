<template>
  <el-card id="access-wrap" class="box-card">
    <div class="emergency-release-title">
      <el-row>
        <el-col :span="4"><h1 class="title">緊急控管</h1></el-col>
      </el-row>
    </div>

    <div class="floor-control-container">
      <el-card class="box-card" shadow="never">
        <el-row class="floor-control-row">
          <el-col class="floor-control-subtitle" :span="20"
            ><span>樓層管制</span></el-col
          >
          <el-col :span="5">
            <el-button type="danger">解除所有管制</el-button></el-col
          >
        </el-row>
        <el-divider></el-divider>
        <el-row class="floor-status-row">
          <ul class="floor-status-ul">
            <el-col
              class="floor-status-col"
              :span="3"
              v-for="item in 8"
              :key="item"
            >
              <li class="floor-status-li">一樓</li>
            </el-col>
          </ul>
        </el-row>
      </el-card>
    </div>

    <div class="item-control-container">
      <el-row class="item-control-row">
        <el-col :span="12" class="item-control-col-left">
          <el-col :span="12">
            <el-select v-model="value" placeholder="請選擇樓層">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="12"
            ><el-select v-model="value" placeholder="請選擇狀態">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option> </el-select
          ></el-col>
        </el-col>
        <el-col :span="12" class="item-control-col-right">
          <el-col :span="9">
            <ul class="item-status-ul">
              <el-col class="item-status-col" :span="4">
                <li class="item-status-li">正常管制 103 個</li>
              </el-col>
            </ul>
          </el-col>
          <el-col :span="9">
            <ul class="item-status-ul">
              <el-col class="item-status-col" :span="4">
                <li class="item-status-li">未關閉 21 個</li>
              </el-col>
            </ul>
          </el-col>
        </el-col>
      </el-row>

      <el-row class="item-panel-row">
        <el-col class="item-panel-col-left" :span="11">
          <el-card class="box-card" shadow="never">
            <el-row class="door-panel-title-row">
              <el-col class="door-panel-title-col" :span="24"
                ><span>大門管制</span></el-col
              >
            </el-row>
            <el-divider></el-divider>
            <el-row class="door-panel-control-row" style="margin-bottom: 0px">
              <el-col :span="8" v-for="(item,idx) in 9" :key="item">
                <el-switch
                  width="32"
                  v-model="floor.isOpen"
                  active-color="#1DB0DC"
                  inactive-color="#ED6363"
                  active-text="B1-1大門"
                  style="margin-bottom: 16px"
                   @change="handelUpdate(idx,floor)"
                  :active-value="true"
                  :inactive-value="false"
                >
                </el-switch>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <el-col class="item-panel-col-right" :span="11">
          <el-card class="box-card" shadow="never">
            <el-row class="window-panel-title-row">
              <el-col class="window-panel-title-col" :span="24"
                ><span>窗戶管制</span></el-col
              >
            </el-row>
            <el-divider></el-divider>
            <el-row class="floor-status-row">
              <ul class="floor-status-ul">
                <el-col
                  style="margin-bottom: 20px"
                  class="floor-status-col"
                  :span="8"
                  v-for="item in 3"
                  :key="item"
                >
                  <li class="floor-status-li">E1-6窗戶</li>
                </el-col>
              </ul>
            </el-row>
            <el-row class="floor-status-row">
              <ul class="floor-status-ul">
                <el-col
                  style="margin-bottom: 16px"
                  class="floor-status-col"
                  :span="8"
                  v-for="item in 3"
                  :key="item"
                >
                  <li class="floor-status-li">E1-6窗戶</li>
                </el-col>
              </ul>
            </el-row>
            <el-row class="floor-status-row">
              <ul class="floor-status-ul">
                <el-col
                  class="floor-status-col"
                  :span="8"
                  v-for="item in 3"
                  :key="item"
                >
                  <li class="floor-status-li">E1-6窗戶</li>
                </el-col>
              </ul>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      floor: {
        isOpen: false
      }
    }
  },
  methods: {
    handelUpdate (idx, floor) {
      const flag = floor.isOpen
      floor.isOpen = !floor.isOpen
      this.$swal({
        title: '確定要執行此操作嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1DB0DC',
        cancelButtonColor: '#ED6363',
        confirmButtonText: 'YES'
      })
        .then(() => {
          if (flag) {
            floor.isOpen = true
            this.$swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              icon: 'success',
              title: '開啟成功'
            })
          } else {
            floor.isOpen = false
            this.$swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              icon: 'success',
              title: '關閉成功'
            })
          }
        })
        .catch(() => {
          this.$swal.fire({
            icon: 'error',
            title: '取消操作'
            // text: err.response.data.message
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/main.scss";
#access-wrap {
  box-sizing: border-box;
  margin: 5px 20px;
  border-radius: 15px;
  padding: 15px;
  font-family: Noto Sans TC;
  height: auto;
  overflow: auto;
  .emergency-release-title {
    margin-bottom: 20px;
  }

  .floor-control-container {
    margin-bottom: 20px;
    .box-card {
      border: 1.5px solid $color_column_border;
      border-radius: 5px;
      padding: 0px;
      .floor-control-row {
        padding: 0px;
        width: 100%;
        @include flex(row, space-between, center);
        .el-button {
          background-color: $color_light_red;
          border: none;
          color: $color_white;
          font-size: 14px;
          width: 100%;
          font-weight: normal;
        }
        .floor-control-subtitle {
          color: $color_blue;
          font-size: 20px;
        }
      }
      .floor-status-row {
        @include flex(row, space-between, center);
        .floor-status-ul {
          width: 100%;
          line-height: 1.5em;
          @include flex(row, space-between, center);
          .floor-status-col {
            @include flex(row, space-between, center);
            width: 100%;
            .floor-status-li {
              @include flex(row, center, center);
              width: 100%;
              &::before {
                content: "";
                display: inline-block;
                margin-right: 10px;
                height: 16px;
                width: 16px;
                background-color: $color_blue;
                border-radius: 50%;
                border: 1px solid transparent;
              }
            }
          }
        }
      }
    }
  }
  .item-control-container {
    .item-control-row {
      @include flex(row, space-between, center);
      margin-bottom: 20px;
      .item-control-col-left {
      }
      .item-control-col-right {
        @include flex(row, flex-end, center);
        .item-status-ul {
          width: 100%;
          line-height: 1.5em;
          @include flex(row, space-between, center);
        }
        .item-status-col {
          @include flex(row, space-between, center);
          width: 100%;
          .item-status-li {
            @include flex(row, flex-end, center);
            width: 100%;
            &::before {
              content: "";
              display: inline-block;
              margin-right: 10px;
              height: 16px;
              width: 16px;
              background-color: $color_light_red;
              border-radius: 50%;
              border: 1px solid transparent;
            }
          }
        }
      }
    }
    .item-panel-row {
      .item-panel-col-left {
        float: left;
        .box-card {
          border: 1.5px solid $color_column_border;
          border-radius: 5px;
          padding: 0px;
          .door-panel-title-row {
            .door-panel-title-col {
              color: $color_blue;
              font-size: 20px;
            }
          }
          .door-panel-control-row {
            width: 100%;
            // border: 1px solid khaki;
            .el-col {
              @include flex(row, center, center);
              display: inline-block;
            }
          }
        }
      }
      .item-panel-col-right {
        float: right;
        .box-card {
          border: 1.5px solid $color_column_border;
          border-radius: 5px;
          padding: 0px;
          .window-panel-title-row {
            .window-panel-title-col {
              color: $color_blue;
              font-size: 20px;
            }
          }
          .floor-status-row {
            @include flex(row, space-between, center);
            .floor-status-ul {
              width: 100%;
              line-height: 1.5em;
              @include flex(row, space-between, center);
              .floor-status-col {
                @include flex(row, space-between, center);
                width: 100%;
                .floor-status-li {
                  @include flex(row, center, center);
                  width: 100%;
                  &::before {
                    content: "";
                    display: inline-block;
                    margin-right: 10px;
                    height: 16px;
                    width: 16px;
                    background-color: $color_blue;
                    border-radius: 50%;
                    border: 1px solid transparent;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 12px 0;
}
</style>
