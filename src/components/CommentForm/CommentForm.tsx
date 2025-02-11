import useCommentForm from "../../utils/useCommentForm";

// Форма комментариев (использует useCommentForm)
function CommentForm() {
  const { values, errors, handleChange, handleSubmit } = useCommentForm();

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, (data) => console.log("Комментарий:", data.comment))
      }
    >
      <textarea
        name="comment"
        placeholder="Комментарий"
        value={values.comment}
        onChange={handleChange}
      />
      {errors.comment && <span>{errors.comment}</span>}

      <button type="submit">Отправить</button>
    </form>
  );
}

export default CommentForm;
