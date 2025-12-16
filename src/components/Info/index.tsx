import type { ReactNode } from "react";
import { type IconType } from "react-icons";

import "./_style.scss";

interface InfoProps {
  children: ReactNode
}

export function Info({ children }: InfoProps) {
  return(
    <ul className="info__list">
      { children }
    </ul>
  );
}

interface InfoItemProps {
  text: string;
  icon: IconType;
  iconColor?: string;
  iconSize?: number;
}

export function InfoItem({ icon: Icon, iconColor = "#3A536B", iconSize = 16, text }: InfoItemProps) {
  return (
    <li>
      <Icon color={iconColor} size={iconSize} />
      { text }
    </li>
  )
}
