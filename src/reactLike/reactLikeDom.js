

function vNode2RealNode(vNode) {
  const {
    tag,
    props,
    children
  } = vNode;

  if (!tag) {
    // debugger
    return document.createTextNode(vNode);
  }

  const ele = document.createElement(tag);

  for (let i in props) {
    ele.setAttribute(i, props[i]);
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
