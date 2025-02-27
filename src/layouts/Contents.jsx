import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";

function Contents() {
  return (
    <main className="p-4" style={{ flex: 1 }}>
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          {/* Customer Routes */}
          {routes.customer.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Admin Routes */}
          {routes.admin.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </main>
  );
}

export default Contents;