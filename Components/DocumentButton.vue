<template>
    <el-button :loading="loading.state" @click="download()" style="width: 100%" :icon="Icons.Document"
        type="primary">{{ props.label }}</el-button>
</template>
<script setup lang="ts">
import printDoc from '@/Plugins/printDoc';
import * as Icons from '@element-plus/icons-vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
const props = defineProps({
    label: {
        required: true,
        type: String
    },
    link: {
        required: true,
        type: String
    }
});
let loading = reactive({
    state: false
});
function download() {
    loading.state = true;
    axios.get(props.link, { responseType: 'blob' }).then((res) => {
        printDoc(res, props.label, null);  
    })
    .catch((e) => {
        console.error(e);
        ElMessage.error(e.message);
    })
    .finally(() => {
        loading.state = false;
    });
    
    
}
</script>