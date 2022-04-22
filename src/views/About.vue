<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Consistency" :name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </el-collapse-item>
      <el-collapse-item title="Feedback" :name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" :name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </el-collapse-item>
      <el-collapse-item title="Controllability" :name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
 <div class="demo-collapse">
    <l-collapse v-model="activeNames" @change="handleChange">
      <l-collapse-item title="Consistency" :name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </l-collapse-item>
      <l-collapse-item title="Feedback" :name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </l-collapse-item>
      <l-collapse-item title="Efficiency" :name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </l-collapse-item>
      <l-collapse-item title="Controllability" :name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </l-collapse-item>
    </l-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref([])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>
<style lang="scss" scoped>
.demo-collapse {
  width: 500px;
}
</style>