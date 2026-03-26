import { useParams } from "react-router-dom";

function AppDetailsPage() {
  const { id } = useParams();

  return (
    <section className="page-placeholder">
      <span className="page-eyebrow">Commit 1</span>
      <h1>App Details</h1>
      <p>Dynamic route is ready for app id: {id}</p>
    </section>
  );
}

export default AppDetailsPage;
