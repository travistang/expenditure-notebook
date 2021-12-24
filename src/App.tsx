import React from "react";
import { Toaster } from "react-hot-toast";

import LocalStorageContextProvider from "./contexts/LocalStorageContext";

import { PageList } from "./pageList";
import RecordListPage from "./pages/RecordListPage";
import AddRecordPage from "./pages/AddRecordPage";

import Header from "./components/Header";

import "./App.css";

function App() {
  const [page, setPage] = React.useState<PageList>(PageList.HOME_PAGE);

  return (
    <div className="absolute vertical inset-0 flex p-4 bg-primary-700 overflow-hidden">
      <Toaster />
      <Header currentPage={page} goPage={setPage} />
      {page === PageList.HOME_PAGE && <AddRecordPage />}
      {page === PageList.RECORD_LIST_PAGE && <RecordListPage />}
    </div>
  );
}

export default function AppWithContexts() {
  return (
    <LocalStorageContextProvider>
      <App />
    </LocalStorageContextProvider>
  );
}
