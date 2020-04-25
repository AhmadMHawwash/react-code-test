import React, { CSSProperties } from "react";

interface ListProps<T extends any> {
  items: T[] | undefined;
  itemRenderer: (item: T, index: number, itemss: T[]) => JSX.Element;
  footerRenderer?: () => React.ReactNode;
  headerRenderer?: () => React.ReactNode;
  containerStyles?: CSSProperties;
  listStyle?: CSSProperties;
  onBottom?: () => void;
  bottomThreshold?: number;
}

export function List<T>(props: ListProps<T>) {
  const {
    items,
    itemRenderer,
    footerRenderer,
    headerRenderer,
    containerStyles,
    listStyle,
    onBottom = () => undefined,
    bottomThreshold = 0,
  } = props;

  const handleScroll = (e: any) => {
    if (bottomThreshold > 1 || bottomThreshold < 0)
      console.error(
        "bottomThreshold represents a percentage value, it should be up to 1 (i.e. 1>bottomThreshold>0)"
      );

    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const diff = scrollHeight - scrollTop;
  
    const threshold = (diff - clientHeight) / clientHeight;
    const isBottom = diff === clientHeight;

    if(threshold < bottomThreshold || isBottom) onBottom();
  };

  return (
    <div style={containerStyles}>
      <div>{headerRenderer}</div>
      {items && (
        <div onScroll={handleScroll} style={listStyle}>
          {items.map(itemRenderer)}
        </div>
      )}
      <div>{footerRenderer}</div>
    </div>
  );
}
