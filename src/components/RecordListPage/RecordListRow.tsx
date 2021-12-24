import React from "react";
import { format } from "date-fns";
import getSymbolFromCurrency from "currency-symbol-map";
import { Expenditure } from "../../backend/types";

type Props = {
  record: Expenditure;
};
export default function RecordListRow({ record }: Props) {
  return (
    <div className="flex-shrink-0 items-center grid grid-cols-12 h-16 border-t border-b border-primary-200">
      <span className="col-span-3">
        {format(new Date(record.date), "yyyy-MM-dd HH:mm")}
      </span>
      <span className="col-span-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {record.description}
      </span>
      <div className="flex flex-col justify-center col-span-3 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {record.amount.toFixed(2)}€
        {record.currencyConfig && (
          <span className="text-opacity-60 text-xs font-bold">
            ({(record.amount * record.currencyConfig.exchangeRate).toFixed(2)}{" "}
            {getSymbolFromCurrency(record.currencyConfig.currency)})
          </span>
        )}
      </div>
    </div>
  );
}
