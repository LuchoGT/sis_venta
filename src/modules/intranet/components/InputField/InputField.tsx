import { FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  register: Function;
  error?: FieldError;
  disabled?: boolean;
  className?: "teacher-add__content--min";
  pattern?: string;
  // maxLength:number
  type?:string;

}

export const InputField = ({
  label,
  name,
  register,
  error,
  disabled,
  className,
  pattern,
  type
}: InputFieldProps) => {
  const classNames = `teacher-add__content ${className ? className : ""}`;

  return (
    <div className={classNames}>
      <label className="teacher-add__name">{label}</label>
      <input
        className={`teacher-add__input ${
          error?.message ? "teacher-add__error" : ""
        }`}
        placeholder={`Escribir ${label}`}
        {...register(name, { required: `${label} requerido`,
        // pattern: { value: pattern, message: `${label} no valido` },
        pattern: pattern ? { value: pattern, message: `${label} no valido` } : undefined,
        // maxLength: maxLength ? { value: maxLength, message: `${label} debe tener al menos ${maxLength} caracteres` } : undefined,
        })}
        disabled={disabled}
        type={type}
      />
      {error && <span className="teacher-add__alert">{error.message}</span>}
    </div>
  );
};
