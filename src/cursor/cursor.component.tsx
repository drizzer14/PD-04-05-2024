import type { FC } from "react";

import * as Styled from "./cursor.styles";

const Cursor: FC<{ x: number; y: number }> = ({ x, y }) => {
  return <Styled.Cursor style={{ top: y - 36, left: x - 36 }} />;
};

export default Cursor;
