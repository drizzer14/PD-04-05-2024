import { useState, FC, useEffect } from "react";

import * as Styled from "./creature.styles";

const Creature: FC<{
  x: number;
  y: number;
  size: number;
  rotation: number;
  visible: boolean;
  damaging: boolean;
  onDeath: () => void;
}> = ({ x, y, size, rotation, visible, damaging, onDeath }) => {
  const [health, setHealth] = useState(100);

  useEffect(() => {
    let intervalID: number;

    if (visible && damaging) {
      intervalID = setInterval(
        () => setHealth((prevHealth) => Math.max(0, prevHealth - 0.75)),
        16.6,
      );
    }

    return () => clearInterval(intervalID);
  }, [visible, damaging]);

  useEffect(() => {
    if (health === 0) {
      onDeath();
    }
  }, [health]);

  return health > 0 ? (
    <Styled.Creature
      data-visible={visible || undefined}
      data-damaging={damaging || undefined}
      $rotation={rotation}
      style={{
        top: y,
        left: x,
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        backgroundColor: `rgba(168, ${50 + health}, 50)`,
        animation: damaging ? "damaging 50ms infinite" : undefined,
      }}
    />
  ) : (
    <Styled.Score $x={x} $y={y} style={{}}>{`+${size}`}</Styled.Score>
  );
};

export default Creature;
