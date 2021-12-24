import React from "react";
import { isSameMonth, subMonths } from "date-fns";
import { LocalStorageContext } from "../contexts/LocalStorageContext";
import classNames from "classnames";
import RecordListRow from "../components/RecordListPage/RecordListRow";
import { DB } from "../backend/types";

const monthlyExpenditureOfDay = (store: DB, day: Date) =>
  store.expenditures
    ?.filter((record) => isSameMonth(day, new Date(record.date)))
    .reduce((total, record) => total + record.amount, 0) ?? 0;

export default function RecordListPage() {
  const { store } = React.useContext(LocalStorageContext);
  const expenditureList = store?.expenditures?.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const now = new Date();
  const oneMonthAgo = subMonths(now, 1);

  const expenditureOfTheMonth = monthlyExpenditureOfDay(store, now);
  const expenditureOfLastMonth = monthlyExpenditureOfDay(store, oneMonthAgo);
  const expenditureDifferences = expenditureOfTheMonth - expenditureOfLastMonth;
  return (
    <div className="vertical flex-1 overflow-y-scroll">
      <div className="sticky top-0 h-16 flex-shrink-0 bg-primary-700 flex items-center justify-between">
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
          {Math.abs(expenditureDifferences).toFixed(2)}€
        </div>
      </div>
      {expenditureList?.map((record) => (
        <RecordListRow record={record} key={record.id} />
      ))}
    </div>
  );
}
