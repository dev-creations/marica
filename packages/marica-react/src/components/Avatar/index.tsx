import "./Avatar.css";

type AvatarProps = {
  username: string;
  image?: string;
  notifications?: number;
  onClick?: () => void;
}

export const MaiAvatar = ({ username, image, onClick, notifications }: AvatarProps) => {
  const initials = username.split(" ").map((s: string) => s.charAt(0)).join("").slice(0,2).trim();

  return (
    <button type="button" className="mai-avatar" onClick={onClick} title={username + " avatar"} data-notifications={notifications}>
      {!image ? <span>
        {initials}
      </span> : <img src={image} alt="" role="presentation" width="32" height="32" />}
    </button>
  );
}