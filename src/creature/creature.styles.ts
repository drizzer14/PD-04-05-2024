import { keyframes, styled } from "styled-components";

export const Creature = styled.span<{ $rotation: number }>`
  position: fixed;
  z-index: 2;

  opacity: 0;

  box-shadow: 0 0 24px 0 #fff;

  transition: opacity 150ms;

  &[data-visible] {
    opacity: 1;
  }

  @keyframes damaging {
    from {
      transform: rotate(${({ $rotation }) => $rotation}deg);
    }

    to {
      transform: rotate(${({ $rotation }) => $rotation + 10}deg);
    }
  }
`;

const popup = keyframes<{ $x: number; $y: number }>`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Score = styled.span<{ $x: number; $y: number }>`
  position: fixed;
  z-index: 2;
  top: ${({ $y }) => $y - 20}px;
  left: ${({ $x }) => $x}px;

  font-size: 18px;
  font-weight: bold;

  opacity: 0;

  animation: ${popup} 2s;

  color: rgba(168, 150, 50);
  user-select: none;
`;
