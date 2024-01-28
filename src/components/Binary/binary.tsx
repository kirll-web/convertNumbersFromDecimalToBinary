import Counter from "../counter/counter";
import { Dispatch, SetStateAction } from "react";

type Props = {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
};
const Binary = (props: Props) => {
  const { number, setNumber } = props;
  const numberOfZeros: number = 10;
  return (
    <Counter
      number={number}
      numberOfZeros={numberOfZeros}
      setNumber={setNumber}
    />
  );
};

export default Binary;
