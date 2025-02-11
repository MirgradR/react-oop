import HoverBox from "./ui/HoverBox/HoverBox";

function App() {
  return (
    <div>
      <HoverBox
        render={(hovered) => (hovered ? "Навели курсор!" : "Наведите на меня")}
      />
      <HoverBox
        render={(hovered) => (
          <button
            style={{ background: hovered ? "blue" : "gray", color: "white" }}
          >
            {hovered ? "Навели!" : "Нажмите"}
          </button>
        )}
      />
    </div>
  );
}

export default App;
