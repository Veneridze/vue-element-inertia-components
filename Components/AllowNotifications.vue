<template>
    <div style="margin: 10px">
    <el-alert show-icon style="width: 100%;" v-if="!loading.hidden" :closable="false"
        type="warning" effect="dark">
        <template #title>
            <el-row :gutter="10">
                <el-col :span="20">Разрешите в браузере доступ к уведомлениям</el-col>
                <el-col :span="4">
                    <el-button size="small" :loading="loading.state" @click="sendRequest()" style="float: right;">Разрешить</el-button>
                </el-col>
            </el-row>

        </template>
    </el-alert>
</div>
</template>
<script setup lang="ts">
import {reactive} from 'vue';
import { ElMessage } from "element-plus";
let loading = reactive({
    state: false,
    hidden: false
});
//loading.state = false;
let hidden = false;
function sendRequest() {
    Notification.requestPermission()
        .then((result) => {
            if(result == 'granted') {
                ElMessage.success('Доступ к уведомлениями разрешён');
            } else {
                ElMessage.warning('Запрещён доступ к уведомлениям');
            }
        })
        .catch((e) => {
            ElMessage.error('Запрещён доступ к уведомлениям');
        });
}
</script>

<style>
    .el-alert__content {
        width: 100%;
    }
</style>