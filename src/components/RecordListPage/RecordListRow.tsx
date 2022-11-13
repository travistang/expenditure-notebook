import React from "react";
import { format } from "date-fns";
import getSymbolFromCurrency from "currency-symbol-map";
import { useSetRecoilState } from 'recoil';
import { Currency, Expenditure } from "../../backend/types";
import { modalAtom, ModalType } from "../../atoms/modalAtom";

type Props = {
  record: Expenditure;
};
export default function RecordListRow({ record }: Props) {
  const setModalAtom = useSetRecoilState(modalAtom);
  const editRecord = () => setModalAtom({
    type: ModalType.EditModal,
    expenditure: record,
  });

  return (
    <div
      onClick={editRecord}
      className="p-2 flex-shrink-0 items-center grid grid-cols-12 h-16 rounded-lg bg-background-secondary">
      <span className="col-span-3 text-sm">
        {format(new Date(record.date), "dd/MM HH:mm")}
      </span>
      <div className="col-span-6 flex flex-col gap-1 whitespace-nowrap overflow-hidden">
        <span className="text-sm overflow-ellipsis">{record.description}</span>
        <div className="flex flex-nowrap items-center overflow-hidden gap-1">
          {
            record.labels.map(label => (
              <span key={label} className="px-2 flex items-center rounded-full bg-primary bg-opacity-50 text-xs flex-shrink-0 text-background">
                {label}
              </span>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col justify-center col-span-3 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {record.amount.toFixed(2)}€
        {record.currencyConfig &&
          record.currencyConfig?.currency !== Currency.EUR && (
            <span className="text-opacity-60 text-xs font-bold">
              ({(record.amount * record.currencyConfig.exchangeRate).toFixed(2)}{" "}
              {getSymbolFromCurrency(record.currencyConfig.currency)})
            </span>
          )}
      </div>
    </div>
  );
}
