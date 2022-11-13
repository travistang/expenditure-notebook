import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PageList } from "./pageList";
import RecordListPage from "./pages/RecordListPage";
import AddRecordPage from "./pages/AddRecordPage";
import Repository from "./backend/dexie";
import Header from "./components/Header";

import "./App.css";
import EditModal from "./components/Modals/EditModal";
import Footer from "./components/Footer";
import SummaryPage from "./pages/SummaryPage";

export default function App() {
  useEffect(() => {
    Repository.migrateFromLS().then((migrated) => {
      if (migrated) {
        toast.success("Database migrated to IndexDB!");
      }
    });
  }, []);
  return (
    <RecoilRoot>
      <Router>
        <div className="absolute vertical inset-0 flex p-4 bg-background overflow-hidden h-screen">
          <EditModal />
          <Toaster />
          <Header />
          <div className="flex flex-col items-stretch flex-1 overflow-y-auto">
            <Routes>
              <Route path={PageList.HOME_PAGE} element={<AddRecordPage />} />
              <Route
                path={PageList.RECORD_LIST_PAGE}
                element={<RecordListPage />}
              />
              <Route
                path={PageList.STATISTICS_PAGE}
                element={<SummaryPage />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </RecoilRoot>
  );
}
