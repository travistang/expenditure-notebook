import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

import Repository from "../backend/dexie";
import RecordListRow from "../components/RecordListPage/RecordListRow";
import FilterPanel from "../components/FilterPanel";
import { useRecoilValue } from "recoil";
import { filterAtom } from "../atoms/filterAtom";
import { normalizeExpenditureFilter } from "../domain/Expenditure";
import { isEmpty } from "../domain/Filter";
import EmptyNotice from "../components/EmptyNotice";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function RecordListPage() {
  const [page, setPage] = useState(0);
  const filterConfig = useRecoilValue(filterAtom);
  const expenditureList = useLiveQuery(() => {
    const normalizedFilterConfig = normalizeExpenditureFilter(filterConfig);
    return Repository.search(normalizedFilterConfig, { page });
  }, [page, filterConfig]);

  return (
    <div className="vertical flex-1 overflow-y-scroll gap-2">
      <FilterPanel />
      {expenditureList?.map((record) => (
        <RecordListRow record={record} key={record.id} />
      ))}
      {!expenditureList?.length && !isEmpty(filterConfig) && (
        <EmptyNotice
          icon={faSearch}
          title="No expenditures found"
          description="Adjust the search criteria to see more results"
          className="flex-1 pb-6"
        />
      )}
    </div>
  );
}
