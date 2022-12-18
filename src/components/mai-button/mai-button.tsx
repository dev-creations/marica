import { Component, h } from '@stencil/core';

@Component({
  tag: 'mai-button',
  styleUrl: 'mai-button.css',
  shadow: true,
})
export class MaiButton {
  render() {
    return <button type="button">
      <slot></slot>
    </button>;
  }
}
