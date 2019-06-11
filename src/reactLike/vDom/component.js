import { Component } from '../component';

// 生成组件实例
function createComponent(vNode) {
  const {
    props,
    tag: Ctor
  } = vNode;

  if (Ctor.prototype && Ctor.prototype.render) {
    let instance = new Ctor(props);
    Component.call(instance, props);
    return instance;
  } else {
    let instance = new Component(props);
    instance.constructor = Ctor;
    instance.render = function() {
      return this.constructor(props);
    }
    return instance;
  }
}


// 生成真实节点
function createDom(vNode) {
  return vNode.tag ? document.createElement(vNode.tag) : document.createTextNode(vNode);
}


// 设置 dom props
function setComponentProps(dom, props) {
  for (let propsName in props) {
    const propsValue = props[propsName];

    if (propsName === 'className') {
      dom.className = propsValue;
    } else if (propsName === 'children') {
      // donothing
    } else if (propsName[0] === 'o' && propsName[1] === 'n') {
      const eventName = propsName.toLowerCase().substring(2);

      if (propsValue) {
        dom.addEventListener(eventName, propsValue);
      }

    } else {
      dom.setAttribute(propsName, propsValue);
    }
  }
}


// 构建虚拟节点
export function buildVNode(vNode) {
  const {
    tag,
    props
  } = vNode;

  let dom = null;

  if (typeof tag === 'function') {
    const inst = createComponent(vNode);
    renderComponent(inst);
    dom = inst._dom;
  } else {
    dom = createDom(vNode);

    setComponentProps(dom, props);

    if (props && props.children) {
      for (let i in props.children) {
        dom.appendChild(buildVNode(props.children[i]));
      }
    }
  }

  return dom;
}


// 渲染组件
export function renderComponent(componentInstance) {
  const {
    _dom
  } = componentInstance;

  const componentVNode = componentInstance.render();

  const dom = buildVNode(componentVNode);

  // 更新
  if (_dom) {
    _dom.parentElement.replaceChild(dom, _dom);
  }


  componentInstance._dom = dom;
}
