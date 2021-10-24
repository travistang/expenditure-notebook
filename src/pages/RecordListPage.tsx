import React from "react";
import { format, isSameMonth, subMonths } from "date-fns";
import { LocalStorageContext } from "../contexts/LocalStorageContext";
import classNames from "classnames";

export default function RecordListPage() {
  const { store } = React.useContext(LocalStorageContext);
  const expenditureList = store?.expenditures?.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const now = new Date();
  const oneMonthAgo = subMonths(now, 1);
  const expenditureOfTheMonth =
    store.expenditures
      ?.filter((record) => isSameMonth(now, new Date(record.date)))
      .reduce((total, record) => total + record.amount, 0) ?? 0;
  const expenditureOfLastMonth =
    store.expenditures
      ?.filter((record) => isSameMonth(oneMonthAgo, new Date(record.date)))
      .reduce((total, record) => total + record.amount, 0) ?? 0;
  const expenditureDifferences = expenditureOfTheMonth - expenditureOfLastMonth;
  return (
    <div className="vertical flex-1 overflow-y-scroll">
      <div className="sticky top-0 h-16 flex-shrink-0 bg-primary-500 flex items-center justify-between">
        <div className="text-sm uppercase vertical text-green-500 font-bold">
          <span>Current month</span>
          <b className="text-3xl text-green-400">
            {expenditureOfTheMonth.toFixed(2)}€
          </b>
        </div>
        <div
          className={classNames(
            "text-sm",
            expenditureDifferences <= 0 ? "text-green-500" : "text-red-500"
          )}
        >
          {expenditureDifferences <= 0 ? "-" : "+"}
          {expenditureDifferences.toFixed(2)}€
        </div>
      </div>
      {expenditureList?.map((record) => (
        <div className="flex-shrink-0 items-center grid grid-cols-12 h-16 border-t border-b border-primary-200">
          <span className="col-span-3">
            {format(new Date(record.date), "yyyy-MM-dd HH:mm")}
          </span>
          <span className="col-span-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {record.description}
          </span>
          <span className="col-span-3 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {record.amount}€
          </span>
        </div>
      ))}
    </div>
  );
}
