import Draggable, { DraggableProps } from "react-draggable";

interface ExtraBounds {
  bounds: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
}

export type DraggablePropsExpanded = (DraggableProps & ExtraBounds) | any;

export const DraggableBox = (props: DraggablePropsExpanded) => {
  const { children, ...restProps } = props;

  return <Draggable {...restProps}>{children}</Draggable>;
};
