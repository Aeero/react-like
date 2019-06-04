import { createVNode } from './vNode';

export function createElement(tag, props, ...children) {
  return createVNode(tag, props, children);
}
