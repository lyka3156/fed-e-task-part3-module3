import axios from 'axios'
/**
 * 基于 axios 封装的请求模块
 */

// 1. 创建 axios 实例
export const request = axios.create({
    baseURL: "http://realworld.api.fed.lagounews.com"
    // baseURL: 'https://conduit.productionready.io/'      // 公共前缀路劲
})

// 导出一个plugin插件，这里面才能拿到store.state
// 通过插件机制获取到上下文对象 （query,params,req,res,app,store）
export default (context) => {
    const { store } = context;
    // 2. 请求拦截器
    // 任何请求都要经过请求拦截器
    // 我们可以在请求拦截器中做一些公共的业务处理
    // 例如：统一设置 token
    request.interceptors.request.use(config => {
        // 请求会经过这里
        const { user } = store.state;
        // 添加用户身份，数据格式：Token Token数据
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`;
        }
        // 返回 config 请求配置对象
        return config;
    }, error => {
        // 如果请求失败，此时请求还没有发出去，就会进入这里
        return Promise.reject(error);
    })
}

// 3. 响应拦截器
// https://juejin.im/post/6844903652881072141
request.interceptors.response.use(
    response => {
        console.log(response, "11111111");
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response && response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        return Promise.reject(error);
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                    Toast({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;

                // 404请求不存在
                case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }
);


