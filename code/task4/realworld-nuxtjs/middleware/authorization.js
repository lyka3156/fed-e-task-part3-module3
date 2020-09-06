/**
 * 验证是否登录的中间件
 * @param {*} context   上下文对象
 */
export default function (context) {
    const { store, redirect } = context;
    // 未登录重定向到 login 页面
    if (!store.state.user) {
        return redirect("/login");
    }
}