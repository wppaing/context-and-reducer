import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);

  return (
    <div
      style={{
        border: "1px solid lightgray",
        margin: "2rem",
        padding: "1rem",
        backgroundColor: state.theme === "dark" ? "#9c9c9c" : "white",
      }}
    >
      <p>This is home component</p>
      <h3>Home component received {JSON.stringify(state)}</h3>

      <button
        onClick={() => {
          if (state.theme === "light") {
            dispatch({
              type: "theme-update",
              value: "dark",
            });
          } else {
            dispatch({
              type: "theme-update",
              value: "light",
            });
          }
        }}
      >
        Update theme from HOME component
      </button>
    </div>
  );
}
