/**
 * 已经登录了 
 * @param {*} context   上下文对象
 */
export default function (context) {
    const { store, redirect } = context;
    // 在登录页面或者注册页面已经登录过了跳转到首页
    if (store.state.user) {
        return redirect("/");
    }
}