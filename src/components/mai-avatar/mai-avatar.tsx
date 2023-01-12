import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mai-avatar',
  styleUrl: 'mai-avatar.css',
  shadow: true,
})
export class MaiAvatar {
  @Prop()
  username: string | null = "";

  @Prop()
  notifications?: number | null = null;

  @Prop()
  img?: string | null = null;

  render() {
    return <div class="avatar" data-notifications={this.notifications || false}>
      {this.img
        ? <picture part="avatar-picture">
            <img src={this.img} alt={this.username} />
          </picture>
        : <span part="avatar-initials">{this.username.split(' ').map(t => t[0]).join('').toUpperCase()}</span>}
    </div>;
  }
}
