import getSymbolFromCurrency from "currency-symbol-map";
import { useState } from "react";
import Input from "../Input";
import Modal, { ModalControlProps } from "../Modal";
import { Currency, CurrencyConfigType } from "../../backend/types";

type Props = ModalControlProps & {
  onSelect: (updateCurrencyType: CurrencyConfigType) => void;
};
export default function CurrencyConfigPanel({
  onClose,
  opened,
  onSelect,
}: Props) {
  const [exchangeRate, setExchangeRate] = useState("1");
  const onChangeCurrency = (newCurrency: Currency) => {
    const exchangeRateValue = parseFloat(exchangeRate) ?? 1;
    onSelect({ exchangeRate: exchangeRateValue, currency: newCurrency });
    onClose();
  };
  return (
    <Modal onClose={onClose} opened={opened} title="Change record currency">
      <div className="grid gap-4 grid-cols-2 flex-1 mb-4">
        {Object.values(Currency).map((currency) => (
          <button
            onClick={() => onChangeCurrency(currency)}
            className="rounded-lg bg-primary-500 border-none bg-transparent flex flex-col items-center justify-center"
          >
            <div className="text-5xl">{getSymbolFromCurrency(currency)}</div>
            <div>{currency}</div>
          </button>
        ))}
      </div>
      <Input
        label="Exchange rate (1 EUR -> ?)"
        value={exchangeRate.toString()}
        onChange={setExchangeRate}
        name="exchangeRate"
      />
    </Modal>
  );
}
