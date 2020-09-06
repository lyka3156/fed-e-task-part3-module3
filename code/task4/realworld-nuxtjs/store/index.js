// 在服务端引入 cookie 解析的包
const cookieParser = process.server ? require("cookieparser") : undefined;

// state
// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把 state 定义成一个函数
// 返回数据对象
export const state = () => {
    return {
        user: null,
    }
}
// 同步修改 state
export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
}
// 异步修改 state
export const actions = {
    // 这个特殊的 action(nuxtServerInit) 仅在服务端执行
    // 作用：初始化容器以及需要传递给客户端的数据     (服务端向客户端传递数据)
    // 第一个参数是上下文对象，第二个参数是拿到服务端的数据，例如：req请求对象
    nuxtServerInit({ commit }, { req }) {
        console.log("nuxtServerInit服务端执行");
        let user = null;
        // 请求头中有 Cookie
        if (req.headers.cookie) {
            // 将 cookie 字符串解析成 js 对象
            const parser = cookieParser.parse(req.headers.cookie);
            try {
                user = JSON.parse(parser.user);
            } catch (err) {

            }
        }
        user && console.log(user.token);
        // 提交 mutation 修改 state 状态
        commit("setUser", user);
    }
}
