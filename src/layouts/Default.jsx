import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Contents from "./Contents";


function DefaultLayout() {
  return (
    <div className="d-flex flex-column vw-100 vh-100">
      {/* Header at the top */}
      <Header />

      {/* Main Content Area with Sidebar and Contents */}
      <div className="d-flex flex-grow-1 ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Page Content */}
        <div className="flex-grow-1 p-3">
          <Contents />
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;