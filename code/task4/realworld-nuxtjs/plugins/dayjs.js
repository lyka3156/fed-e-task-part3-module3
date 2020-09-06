import Vue from "vue";
import dayjs from "dayjs";

/**
 * 定义全局过滤器来格式化时间
 */

// {{ 表达式 | 过滤器 }}
// 使用例子： {{ createAt | date("YYYY-MM-DD") }}
// 第一个参数是过滤器的名称
// 第二个参数是处理函数
//     - 第二个参数的第一个参数是表达式
//     - 第二个参数的第第一个参数后面的参数的过滤器的参数
Vue.filter('date', (value, format = "YYYY-MM-DD HH:mm:ss") => {
    return dayjs(value).format(format);
}) 