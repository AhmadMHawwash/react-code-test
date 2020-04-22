import React, { CSSProperties, FC } from "react";
import { extractInitials } from "../../Utilities/initials";
import "./styles.scss";
import cx from "classnames";

interface AvatarProps {
  name: string;
  src?: string;
  size?: CSSProperties["width"];
  borderRadius?: CSSProperties["borderRadius"];
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  classes?: string[];
  background?: CSSProperties["background"];
}

type MakeStyles = Pick<AvatarProps, "size" | "borderRadius" | "background">;
const makeStyles: (x: MakeStyles) => any = ({
  size,
  borderRadius,
  background,
}) => ({
  lineHeight: size,
  borderRadius,
  background: background || "transparent",
  width: size,
  height: size,
  maxWidth: size,
  maxHeight: size,
});

export const Avatar: FC<AvatarProps> = ({
  classes = ["UserAvatar"],
  size = "50px",
  borderRadius = "50%",
  style,
  name,
  src,
  className,
  background,
}) => {
  const initials = extractInitials(name);

  return (
    <div aria-label={name} className={cx(...classes, className)} style={style}>
      <div
        style={makeStyles({ background, size, borderRadius })}
        className="UserAvatar--inner"
      >
        {src ? (
          <img
            style={makeStyles({ size, borderRadius })}
            className="UserAvatar--img"
            src={src}
            alt={name}
          />
        ) : (
          `${initials}`
        )}
      </div>
    </div>
  );
};
