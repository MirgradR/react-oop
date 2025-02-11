import useBaseForm from "./useBaseForm";

// Хук для комментариев (простой, без жесткой валидации)
function useCommentForm() {
  function validate(name: string, value: string) {
    if (name === "comment" && value.length < 5)
      return "Комментарий слишком короткий";
    return "";
  }

  return useBaseForm({ comment: "" }, validate);
}

export default useCommentForm;
