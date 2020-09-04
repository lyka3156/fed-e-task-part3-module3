export default {
  debug: true, // 是否开启debug
  // 公共 state
  state: {
    user: {
      name: "xiaomao",
      age: 18,
      sex: "男",
    },
  },
  // 修改 state 的 action
  setUserNameAction(name) {
    // 打印日志
    if (this.debug) {
      console.log("setUserNameAction triggered：", name);
    }
    // 修改 state
    this.state.user.name = name;
  },
};
