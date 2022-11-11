import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import { PageList } from "./pageList";
import RecordListPage from "./pages/RecordListPage";
import AddRecordPage from "./pages/AddRecordPage";
import Repository from "./backend/dexie";
import Header from "./components/Header";

import "./App.css";
import EditModal from "./components/Modals/EditModal";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = React.useState<PageList>(PageList.HOME_PAGE);

  useEffect(() => {
    Repository.migrateFromLS().then((migrated) => {
      if (migrated) {
        toast.success("Database migrated to IndexDB!");
      }
    });
  }, []);
  return (
    <RecoilRoot>
      <div className="absolute vertical inset-0 flex p-4 bg-background overflow-hidden">
        <EditModal />
        <Toaster />
        <Header currentPage={page} goPage={setPage} />
        <div className="flex flex-col items-stretch flex-1">
          {page === PageList.HOME_PAGE && <AddRecordPage />}
          {page === PageList.RECORD_LIST_PAGE && <RecordListPage />}
        </div>
        <Footer route={page} onChangeRoute={setPage} />
      </div>
    </RecoilRoot>
  );
}
