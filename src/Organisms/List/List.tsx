import React, { CSSProperties } from "react";

interface ListProps<T extends any> {
  items: T[] | undefined;
  itemRenderer: (item: T, index: number, itemss: T[]) => JSX.Element;
  footerRenderer?: () => React.ReactNode;
  headerRenderer?: () => React.ReactNode;
  containerStyles?: CSSProperties;
  listStyle?: CSSProperties;
}

export function List<T>(props: ListProps<T>) {
  const {
    items,
    itemRenderer,
    footerRenderer,
    headerRenderer,
    containerStyles,
    listStyle,
  } = props;

  return (
    <div style={containerStyles}>
      <div>{headerRenderer}</div>
      {items && <div style={listStyle}>{items.map(itemRenderer)}</div>}
      <div>{footerRenderer}</div>
    </div>
  );
}
