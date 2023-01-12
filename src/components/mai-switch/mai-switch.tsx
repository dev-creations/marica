import { Component, Prop, h, EventEmitter, Event, Listen } from '@stencil/core';

@Component({
  tag: 'mai-switch',
  styleUrl: 'mai-switch.css',
  shadow: true,
})
export class MaiSwitch {

  @Prop({mutable: true, reflect: true}) active = false;

  @Prop({reflect: true}) enabled = true;

  @Event({
    eventName: "switch-changed",
    composed: true,
    cancelable: true,
    bubbles: true,
  }) switchChanged: EventEmitter<{active: boolean}>;

  toggleSwitch() {
    if (this.enabled) {
      this.active = !this.active;
      this.switchChanged.emit({active: this.active})
    }
  }

  @Listen('click')
  clickHandler(e: MouseEvent) {
    e.preventDefault();
    this.toggleSwitch();
  }

  render() {
    return <label>
      <input type="checkbox" checked={this.active} />
      <span class="toggle"></span>
    </label>;
  }
}
