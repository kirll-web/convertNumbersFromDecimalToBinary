import { Dispatch, SetStateAction } from "react";
import Counter from "../counter/counter";
type Props = {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
};
const Decimal = (props: Props) => {
  const { number, setNumber } = props;

  return <Counter number={number} numberOfZeros={0} setNumber={setNumber} />;
};

export default Decimal;
