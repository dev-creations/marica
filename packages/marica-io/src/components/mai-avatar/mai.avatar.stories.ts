export default {
  title: 'Components/MaiAvatar',
  component: (args) => `<mai-avatar notifications="${args.notifications}" img="${args.img || ''}" username="${args.username || ''}">${args.slot}</mai-avatar>`,
};

export const Simple = {
  args: {
    username: "Alice Bob",
  }
}

export const WithNotifications = {
  args: {
    notifications: 1,
    username: "Alice Bob",
  }
};

export const WithImage = {
  args: {
    username: "Alice Bob",
    img: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80`
  }
};

export const WithImageAndNotification = {
  args: {
    username: "Alice Bob",
    notifications: 1,
    img: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80`
  }
};