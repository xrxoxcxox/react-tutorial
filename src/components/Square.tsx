import { FC } from 'react'
import { ISquare } from '../interface';

interface SquareProps {
  value: ISquare;
  onClick: () => void;
}

const Square: FC<SquareProps> = ({ value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
