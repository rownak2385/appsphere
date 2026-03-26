import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Something went wrong";

  const description = isRouteErrorResponse(error)
    ? "The route could not be resolved."
    : "An unexpected error occurred while rendering this page.";

  return (
    <section className="page-placeholder">
      <span className="page-eyebrow">Commit 1</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link className="page-link" to="/">
        Return Home
      </Link>
    </section>
  );
}

export default ErrorPage;
