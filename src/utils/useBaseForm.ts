import { ChangeEvent, FormEvent, useState } from "react";

type FormValues = Record<string, string>;

// Определяем функцию валидации
type ValidateFunction = (name: string, value: string) => string;

// Базовый хук формы: хранит состояние и базовую валидацию
function useBaseForm<T extends FormValues>(
  initialValues: T,
  validate?: ValidateFunction
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Валидация при изменении полей
    if (validate) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  }

  function handleSubmit(event: FormEvent, onSubmit: (values: T) => void) {
    event.preventDefault();
    if (Object.values(errors).some((err) => err)) return; // Проверка на ошибки
    onSubmit(values);
  }

  return { values, errors, handleChange, handleSubmit };
}

export default useBaseForm;
