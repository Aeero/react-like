class VNode {
  constructor(
    tag,
    props,
    children
  ) {
    this.tag = tag || '';
    this.props = props || {};
    this.children = children ? children.flat():  [];

    this.props.children = this.children;
  }
}

export function createVNode(tag, props, children) {
  return new VNode(tag, props, children);
}
