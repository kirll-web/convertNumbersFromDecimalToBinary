import {
  ReactNode,
  MouseEvent,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
import styles from "./counter.module.css";
type Props = {
  numberOfZeros: number;
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
};
const Counter = (props: Props) => {
  const { numberOfZeros, number, setNumber } = props;
  //*TODO: СДЕЛАТЬ ИЗМЕНЕНИЕ ЧИСЕЛ В ДЕСЯТИЧНОЙ И ДВОИЧНОЙ ПРИ НАЖАТИИ + ИЛИ -
  let zeros: Array<ReactNode> = [];

  const changeNumber = (e: MouseEvent) => {
    const typeAction = e.currentTarget.getAttribute("data-typenumberaction"),
      number = e.currentTarget.getAttribute("data-number");

    setNumber((num: number) => {
      switch (typeAction) {
        case "binaryMinus": {
          num -= Number(number);
          return num;
        }
        case "binaryPlus": {
          num += Number(number);
          return num;
        }
        case "decimalMinus": {
          num -= Number(number);
          return num;
        }
        case "decimalPlus": {
          num += Number(number);
          return num;
        }
        default:
          return num;
      }
    });
  };

  const changeDecimalNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setNumber(Number(value));
  };

  if (numberOfZeros) {
    let arrayNumbers: Array<number> = [];
    let createdDecimalNumber: Boolean = false;
    let i = numberOfZeros;
    while (!createdDecimalNumber && i >= 0) {
      if (2 ** i <= number) {
        arrayNumbers.push(2 ** i);
      }

      const acc = arrayNumbers.reduce((el, acc) => el + acc, 0);
      if (acc === number) {
        break;
      } else if (acc > number) {
        arrayNumbers.pop();
        i -= 1;
      } else {
        i -= 1;
      }
    }

    for (let i = numberOfZeros; i >= 0; i--) {
      zeros = [
        ...zeros,
        <div className={styles.counter} key={2 ** i}>
          <div className={styles.binaryToDecimalNumber}>{2 ** i}</div>
          <div
            className={styles.countersPlusMinus}
            data-typenumberaction="binaryPlus"
            data-number={2 ** i}
            onClick={(e: MouseEvent) => {
              arrayNumbers.includes(2 ** i) ? null : changeNumber(e);
            }}
          >
            +
          </div>
          <div className={styles.countersNumber}>
            {arrayNumbers.includes(2 ** i) ? 1 : 0}
          </div>
          <div
            className={styles.countersPlusMinus}
            data-typenumberaction="binaryMinus"
            data-number={2 ** i}
            onClick={(e: MouseEvent) => {
              arrayNumbers.includes(2 ** i) ? changeNumber(e) : null;
            }}
          >
            -
          </div>
        </div>,
      ];
    }
  }

  return (
    <div className={styles.countersWrapper}>
      {zeros.length > 0 ? (
        zeros.map((Elem: ReactNode) => Elem)
      ) : (
        <div className={styles.counter}>
          <div
            className={styles.countersPlusMinus}
            data-typenumberaction="decimalPlus"
            data-number={1}
            onClick={changeNumber}
          >
            +
          </div>
          <input
            type="number"
            placeholder={String(number)}
            onChange={changeDecimalNumber}
            value={number}
          />
          <div
            className={styles.countersPlusMinus}
            data-typenumberaction="decimalMinus"
            data-number={1}
            onClick={changeNumber}
          >
            -
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
