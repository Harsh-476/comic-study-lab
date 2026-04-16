import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";
import Page3 from "./page3.jsx";
import Page4 from "./page4.jsx";
import Page5 from "./page5.jsx";
import Page6 from "./page6.jsx";
import Page7 from "./page7.jsx";
import Page8 from "./page8.jsx";
import Page9 from "./page9.jsx";
import Page10 from "./page10.jsx";
import Page11 from "./page11.jsx";
import Page12 from "./page12.jsx";
import Page13 from "./page13.jsx";
import Page14 from "./page14.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

const getStoredRole = () => {
  const storedUser = localStorage.getItem("cs_lab_user");
  if (!storedUser) return "user";

  try {
    return JSON.parse(storedUser)?.role === "admin" ? "admin" : "user";
  } catch {
    localStorage.removeItem("cs_lab_user");
    return "user";
  }
};

function RoleSegmentRedirect({ adminPath, userPath }) {
  const role = getStoredRole();
  return <Navigate to={role === "admin" ? adminPath : userPath} replace />;
}

function App() {
  return (
    <Routes>
      {/* ── Public pages ── */}
      <Route path="/"      element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />

      {/* ── Page 8: Creatives Hub — post-login landing for BOTH roles ── */}
      <Route path="/page8"        element={<Page8 />} />

      {/* ── Page 9 (admin) / Page 10 (user): Creatives — Projects ── */}
      <Route path="/page9"          element={<Page9 />} />
      <Route
        path="/page8/projects"
        element={<RoleSegmentRedirect adminPath="/page9" userPath="/page10" />}
      />
      <Route path="/page10"         element={<Page10 />} />

      {/* ── Page 11: Creatives — Comics (admin) ── */}
      <Route path="/page11" element={<Page11 />} />
      <Route path="/page12" element={<Page12 />} />
      <Route
        path="/page8/comics"
        element={<RoleSegmentRedirect adminPath="/page11" userPath="/page12" />}
      />

      {/* ── Page 13 (admin) / Page 14 (user): Creatives — Videos ── */}
      <Route path="/page13" element={<Page13 />} />
      <Route path="/page14" element={<Page14 />} />
      <Route
        path="/page8/videos"
        element={<RoleSegmentRedirect adminPath="/page13" userPath="/page14" />}
      />

      {/* ── Legacy redirects so old bookmarks don't 404 ── */}
      <Route path="/dashboard" element={<Navigate to="/page8" replace />} />
      <Route path="/posts"     element={<Navigate to="/page8" replace />} />
    </Routes>
  );
}

export default App;
