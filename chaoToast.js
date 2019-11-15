import Vue from 'vue'
import chaoToast from './chaoToast'
// extent方法传入一个vue组件,生成一个子实例对象
// 要求组件中的data必须是函数，也就是为什么我们的组件中的data必须是函数
let ToastConstructor = Vue.extend(require('./chaoToast.vue').default);
let instance
const ChaoToast = (options = {
  text: '', // 必传参数
}) => {
  // 渲染成Vue组件
  instance = new ToastConstructor({
    data: options // 这里的 data 会传到 main.vue 组件中的 data 中，当然也可以写在 props 里
  });
  // instance.$el是生成的DOM对象，添加到body中
  document.body.appendChild(instance.$mount().$el);
};
export default ChaoToast