import React from "react";
import { format } from "date-fns";
import { LocalStorageContext } from "../contexts/LocalStorageContext";

export default function RecordListPage() {
  const { store } = React.useContext(LocalStorageContext);

  return (
    <div className="vertical">
      {store?.expenditures?.map((record) => (
        <div className="items-center grid grid-cols-12 h-16 border-t border-b border-primary-200">
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
