import { renderComponent } from './vDom/component';

export class Component {
  constructor(props, context) {
    this.props = props;
    this.context = context;

    this.state = this.state || {};
  }

  setState = (state, callback) => {
    Object.assign(this.state, state);

    renderComponent(this);
  }
}
