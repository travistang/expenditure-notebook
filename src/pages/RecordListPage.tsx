import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

import Repository from '../backend/dexie';
import RecordListRow from "../components/RecordListPage/RecordListRow";
import FilterPanel from "../components/FilterPanel";

export default function RecordListPage() {
  const [page, setPage] = useState(0);
  const expenditureList = useLiveQuery(() => {
    return Repository.getExpenditureByPage({ page });
  }, [page]);

  return (
    <div className="vertical flex-1 overflow-y-scroll gap-2">
      <FilterPanel />
      {expenditureList?.map((record) => (
        <RecordListRow record={record} key={record.id} />
      ))}
    </div>
  );
}
