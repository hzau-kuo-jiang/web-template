import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <h1 className="px-1 py-2 text-3xl font-bold underline">
        Hello world!
        <FontAwesomeIcon icon={faUserSecret} />
      </h1>
    </>
  );
}

export default App;
