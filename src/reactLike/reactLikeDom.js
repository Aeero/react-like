

function vNode2RealNode(vNode) {
  const {
    tag,
    props,
    children
  } = vNode;

  if (!tag) {
    // debugger
    return document.createTextNode(vNode);
  } else if (typeof tag === 'function') {

    if (tag.prototype && tag.prototype.render) {
      let instance = new tag(props);
      return vNode2RealNode(instance.render());
    } else {
      return vNode2RealNode(tag(props));
    }
  }

  const ele = document.createElement(tag);

  for (let i in props) {
    if (i === 'className') {
      ele.className = props[i];
    } else if (i === 'children') {
      // donothing
    } else {
      ele.setAttribute(i, props[i]);
    }
  }


  for (let i in children) {
    ele.appendChild(vNode2RealNode(children[i]))
  }

  return ele;
}


export function render(vNode, parentDom) {
  const realNode = vNode2RealNode(vNode);

  parentDom.innerHTML = '';

  parentDom.appendChild(realNode);
}
