// 年份选择器
<template>
    <div class="DateSelector">
        <div id="year">学年</div>
        <el-select v-model="value" placeholder="请选择学年" class="dateShow">
            <el-option v-for="item in years" @click="handleOptionClick(item)" :key="item.year"
                :value="item.year - 1 + '-' + item.year">
                <span>{{ item.year - 1 + "-" + item.year }}</span>
            </el-option>
        </el-select>
    </div>
</template>

<script>
import { studentPage } from "../../api/Student"
export default {
    data () {
        return {
            years: [
                { id: "1", year: "2018" },
                { id: "2", year: "2019" },
                { id: "3", year: "2020" },
                { id: "4", year: "2021" },
                { id: "5", year: "2022" },
                { id: "6", year: "2023" },
                { id: "7", year: "2024" },
                { id: "8", year: "2025" },
                { id: "9", year: "2026" },
                { id: "10", year: "2027" },
            ],
            value: "",
        }
    },
    methods: {
        handleOptionClick (item) {
            // console.log("Selected Year:", item.year);
            // console.log("Selected ID:", item.id)
            this.emitEvent(item) // 向父组件传递选中的对象

        },
        emitEvent (item) {
            this.$emit("childEvent", item)
            let year = item.year - 1
            console.log(studentPage)
            console.log(year)

            studentPage(year)
                .then((response) => {
                    // 处理返回的数据           
                    console.log('111')
                    console.log(response)

                })
                .catch((error) => {
                    // 处理错误
                    console.error(error)
                })
        },
    },
}
</script>

<style scoped>
.DateSelector {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 9.73vh;
}

.dateShow {
    text-align: center;
}

#year {
    padding: 1.5rem 0.55rem 1.5rem 9rem;
    font-size: 2vw;
    font-weight: 500;
    letter-spacing: 3px;
}
</style>
