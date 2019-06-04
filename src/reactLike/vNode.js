class VNode {
  constructor(
    tag = '',
    props = {},
    children = []
  ) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }
}

export function createVNode(tag, props, children) {
  return new VNode(tag, props, children);
}
