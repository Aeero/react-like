// 生成组件实例
function createComponent(vNode) {
  const {
    props,
    tag: Component
  } = vNode;

  if (Component.prototype && Component.prototype.render) {
    let instance = new Component(props);
    return instance;
  } else {
    return Component(props);
  }
}


// 生成真实节点
function createDom(tag) {
  return tag ? document.createElement(tag) : document.createTextNode(vNode);
}


// 设置组件props
function setComponentProps() {

}


// 构建虚拟节点
function buildComponent(vNode) {
  const {
    tag,
    props,
    children
  } = vNode;

  if (typeof tag === 'function') {
    const inst = createComponent(vNode);
  } else {
    const dom = createDom(tag);
  }
}


// 渲染组件
function renderComponent(componentInstance) {

}
