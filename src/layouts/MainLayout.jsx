import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app-shell">
      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
