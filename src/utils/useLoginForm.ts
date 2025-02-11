import useBaseForm from "./useBaseForm";

// Хук для логина (добавляет строгую валидацию)
function useLoginForm() {
  function validate(name: string, value: string) {
    if (name === "email" && !value.includes("@")) return "Некорректный email";
    if (name === "password" && value.length < 6)
      return "Пароль слишком короткий";
    return "";
  }

  return useBaseForm({ email: "", password: "" }, validate);
}

export default useLoginForm;
