import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mai-button',
  styleUrl: 'mai-button.css',
  shadow: true,
})
export class MaiButton {
  @Prop()
  disabled = false;

  render() {
    return <button type="button" disabled={this.disabled}>
      <slot></slot>
    </button>;
  }
}
