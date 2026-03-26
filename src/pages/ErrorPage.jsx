import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/error-404.png";

function ErrorPage() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  const title = isNotFound ? "Oops, page not found!" : "Something went wrong";
  const description = isNotFound
    ? "The page you are looking for is not available."
    : "An unexpected error occurred while rendering this page.";

  return (
    <section className="error-page">
      <div className="error-page__card">
        <img src={errorImage} alt="404 illustration" />
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="page-link" to="/">
          Go Back!
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
