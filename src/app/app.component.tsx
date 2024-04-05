import { useState, FC, MouseEventHandler, useCallback } from "react";

import Cursor from "cursor";

import * as Styled from "./app.styles";
import Creature from "creature";

const randomInt = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

const creatures = Array.from({ length: randomInt(50, 200) }, () => {
  const size = randomInt(5, 40);

  return {
    x: randomInt(size, window.innerWidth - size),
    y: randomInt(size, window.innerHeight - size),
    size,
    rotation: randomInt(0, 180),
  };
});

/*
All of this should be on canvas, but I've started too late
to make it on time with canvas.
*/

const App: FC = () => {
  const [score, setScore] = useState(0);

  const [cursor, locate] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const track = useCallback<MouseEventHandler>((event) => {
    locate({
      x: event.clientX,
      y: event.clientY,
    });
  }, []);

  const isCreatureVisible = useCallback(
    (creature: { x: number; y: number; size: number }) => {
      const closestX = Math.max(
        creature.x,
        Math.min(cursor.x, creature.x + creature.size),
      );
      const closestY = Math.max(
        creature.y,
        Math.min(cursor.y, creature.y + creature.size),
      );

      const dx = cursor.x - closestX;
      const dy = cursor.y - closestY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      return distance <= 30;
    },
    [cursor.x, cursor.y],
  );

  const [damaging, toggleDamaging] = useState(false);

  return (
    <Styled.App
      onMouseMove={track}
      onMouseDown={() => toggleDamaging(true)}
      onMouseUp={() => toggleDamaging(false)}
    >
      {creatures.map((creature) => (
        <Creature
          key={`${creature.x}-${creature.y}-${creature.size}-${creature.rotation}`}
          visible={isCreatureVisible(creature)}
          damaging={damaging}
          onDeath={() => setScore((prevScore) => prevScore + creature.size)}
          {...creature}
        />
      ))}

      <Cursor {...cursor} />

      <Styled.Score>{score}</Styled.Score>

      <Styled.Reset />
    </Styled.App>
  );
};

export default App;
