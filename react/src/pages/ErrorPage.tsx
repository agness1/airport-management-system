import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state;

  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray gap-4">
      <h1 className="text-2xl">Oops! :O</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <img src="https://i.imgflip.com/69ov8j.jpg"/>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
