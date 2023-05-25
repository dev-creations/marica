import { PropsWithChildren } from "react";
import "iconoir/css/iconoir.css";
import "./Icon.css";

export type MaiIconType = "check" | "more-vert" | "menu" | "play" | "cancel" | "double-check" | "download" | "delete-circle" | "check-circle"
 | "cloud" | "cloud-check" | "cloud-desync" | "cloud-error" | "cloud-upload" | "google-docs" | "submit-document" | "empty-page" | "doc-star" | "restart"
 | "bright-star" | "star" | "refresh" | "share-android" | "share-ios" | "warning-triangle" | "1st-medal" | "stats-up-square" | "stats-report" | "trophy"
 | "agile" | "presentation" | "okrs" | "strategy" | "bell" | "bell-off" | "send-diagonal" | "at-sign" | "code" | "arcade" | "bright-crown"
 | "crown" | "view-columns-2" | "view-columns-3" | "view-structure-up" | "view-structure-down" | "view-grid";

export type MaiIconProps = {
  type: MaiIconType,
  title?: string,
};

export const MaiIcon = (props: PropsWithChildren<MaiIconProps>) => {
  return <span className={`mai-icon iconoir-${props.type}`}></span>;
}