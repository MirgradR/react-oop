// Компонент для отображения ошибок
function ErrorDisplay({ message }: { message: string }) {
  return <div style={{ color: "red" }}>{message}</div>;
}

export default ErrorDisplay;
