<template>
  <div :class="['ed-list-table', {'ed-small':type=='small'||size=='small', 'ed-medium':type=='medium'||size=='medium', 'no-shadow': !shadow}]">
    <el-table ref="listTable" :data="data" :row-key="rowKey" @selection-change="handleSelectionChange"  @sort-change="handleSort" :border="border" size="medium" :height="height" :header-row-class-name="headerRowClassName" :maxHeight="maxHeight"  highlight-current-row :empty-text="'No data'">
      <slot></slot>
      <!--Operation-->
      <el-table-column v-if="options.length > 0" :label="'Operation'" align="center" :width="operateWidth">
        <template slot-scope="scope">
          <div class="operation">
            <label :class="{'is-disabled': item.disabled}" v-for="item in options" :key="item.name" @click="handleClickOption(scope.row, item.type)">{{item.name}}</label>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'EdListTable',
    props: {
      data: {
        type: Array,
        default: function() {
          return []
        }
      },
      options: {
        type: Array,
        default: function() {
          return []
        }
      },
      width: [String, Number],
      height: [String, Number],
      maxHeight: [String, Number],
      border: Boolean,
      rowKey: [String, Function],
      headerRowClassName: [String, Function],
      type: {
        type: String,
        default: function() {
          return 'large'
        }
      },
      size: {
        type: String,
        default: function() {
          return 'large'
        }
      },
      shadow: {
        type: Boolean,
        default: function() {
          return true
        }
      },
      emptySelect: {
        type: Boolean,
        default: function() {
          return false
        }
      }
    },
    data() {
      return {
      }
    },
    watch: {
      emptySelect(newVal) {
        if (newVal) {
          console.log(99, this)
          // this.$refs && this.$refs.listTable.clearSelection()
        }
      }
    },
    computed: {
      operateWidth() {
        return this.options.length * 70 + (this.options.length - 1) * 10 + 30
      }
    },
    methods: {
      handleSelectionChange(evt) {
        this.$emit('selection-change', evt)
      },
      handleClickOption(row, type) {
        this.$emit('click-option', row, type)
      },
      handleSort(evt) {
        this.$emit('sort-change', evt)
      }
    }
  }
</script>

<style lang="scss">
@mixin inputHeight($size) {
    .el-input--medium .el-input__inner,
    .el-range-editor--medium.el-input__inner {
      height: $size;
      line-height: $size!important;
    }
    .el-input--medium .el-input__icon {
      line-height: $size!important;
    }
    .el-form-item--medium .el-form-item__content,
    .el-form-item--medium .el-form-item__label {
      line-height: $size!important;
    }
    .el-input-number--medium {
      line-height: $size - 2px;
    }
    .el-range-editor--medium .el-range__icon,
    .el-range-editor--medium .el-range__close-icon,
    .el-range-editor--medium .el-range-separator {
      line-height: $size - 8px;
    }
  }
.ed-list-table {
  .el-table {
    box-shadow: 0px 5px 15px -3px #cccccc;
    .el-table__header-wrapper .el-table__header th {
        height: 60px;
        max-height: 60px;
        padding: 0px;
        vertical-align: middle;
        background: #ECF4FF !important;
        &:nth-child(1) .cell {
            padding-left: 20px !important;
            padding-right: 10px !important;
        }
        .cell {
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            line-height: 17px;
            color: #333333;
            .el-checkbox {
                width: 16px !important;
                height: 16px !important;
            }
        }
        &:nth-last-child(2) .cell,
        &:nth-last-child(1) .cell {
            padding-right: 20px !important;
        }
    }
    .el-table__body-wrapper .el-table__body {
        .el-table__row:hover {
            box-shadow:0 0 15px 1px rgba(0, 0, 0, 0.15)
        }
        td {
            &:nth-child(1) .cell {
                padding-left: 20px !important;
                padding-right: 10px;
            }
            .cell {
                line-height: 19px;
                font-size: 13px;
                color: #666666;
                .operation {
                  font-size: 0;
                }
            }
            &:nth-last-child(1) .cell{
              padding-right: 20px !important;
            }

        } 
    }
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: rgba(0,0,0,0);
    }
    .cell {
      .el-radio__inner {
        width: 16px !important;
        height: 16px !important;
        background: -webkit-gradient(linear, left top, left bottom, from(white), to(#ededed));
        background: linear-gradient(180deg, white 0%, #ededed 100%);
        border: 1px solid #979797;
      }
      .el-radio__input.is-checked .el-radio__inner {
        background: none;
        background-color: #fff;
        border-color: #2777FF !important;
      }
      .el-radio__input.is-checked .el-radio__inner:after {
          width: 9px;
          height: 9px;
          border-radius: 9px;
          background-color: #2777FF;
      }
      .el-checkbox__input{
        .el-checkbox__inner {
            width: 16px;
            height: 16px;
            border: 0;
            background-size: cover;
            background-image: url(../../assets/images/component/unchecked.png);
        }
        &.is-checked .el-checkbox__inner {
            background-size: cover;
            background-image: url(../../assets/images/component/checked.png);
            background-color: rgba($color: #000000, $alpha: 0);
            &::after {
                width: 0;
                height: 0;
            }
        }
      }
    }
    .operation{
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      label {
        display: inline-block;
        min-width: 70px;
        height: 26px;
        line-height: 26px;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid #E5F0FF;
        font-size: 13px;
        background: #F3F7FD;
        color: #2777FF;
        cursor: pointer;
        text-align: center;
        &:not(:nth-child(1)) {
            margin-left: 10px;
        }
        &:hover {
            border: 1px solid #2777FF;
        }
        &.is-disabled {
          background: #F1F1F1;
          color: #8B8B8B;
          border-color: #E6E8EE;
          cursor: not-allowed !important;
        }
      }
    }
    .el-table__empty-text {
      font-size: 13px !important;
      color: #cccccc;
    }
    @include inputHeight(34px)
  }
  &.ed-medium {
    .el-table {
      .el-table__header-wrapper .el-table__header th {
        height: 50px !important;
        max-height: 50px !important;
      }
      .cell {
        font-size: 13px !important;
      }
      .el-table__empty-block {
        min-height: 50px;
        .el-table__empty-text{
          line-height: 50px;
        }
      }
      @include inputHeight(30px)
    }
  }
  &.ed-small {
    .el-table {
      .el-table__header-wrapper .el-table__header th {
        height: 40px !important;
        max-height: 40px !important;
      }
      .cell {
        font-size: 13px !important;
      }
      .el-table__empty-block {
        min-height: 40px;
        .el-table__empty-text{
          line-height: 40px;
        }
      }
      @include inputHeight(30px)
    }
  }
  &.no-shadow {
    .el-table {
      box-shadow: none !important;
    }
  }
}
</style>