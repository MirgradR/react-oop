import useLoginForm from "../../utils/useLoginForm";

// Логин-форма (использует useLoginForm)
function LoginForm() {
  const { values, errors, handleChange, handleSubmit } = useLoginForm();

  return (
    <form
      onSubmit={(e) => handleSubmit(e, (data) => console.log("Логин:", data))}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}

      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}

      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
