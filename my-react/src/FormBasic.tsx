import React, { ReactNode } from "react";
import { FieldErrors, useForm } from "react-hook-form";

type FormBasicProps = {
  name: string;
  email: string;
  gender: string;
  memo: string;
};

export default function FormBasic(): ReactNode {
  const defaultValues: FormBasicProps = {
    name: "John",
    email: "example@example.com",
    gender: "male",
    memo: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data: FormBasicProps) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors<FormBasicProps>) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      <div>
        <label htmlFor="name">名前: </label>
        <br />
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "please input name",
            maxLength: { value: 20, message: "too long name" },
          })}
        />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="gender">性別: </label>
        <br />
        <label>
          <input
            type="radio"
            value="male"
            {...register("gender", {
              required: "please input gender",
            })}
          />
        </label>
        <label>
          <input
            type="radio"
            value="female"
            {...register("gender", {
              required: "please input gender",
            })}
          />
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">email: </label>
        <br />
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "please input email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "email address format error",
            },
          })}
        />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">メモ: </label>
        <br />
        <textarea
          id="memo"
          {...register("memo", {
            required: "please input memo",
            minLength: { value: 10, message: "too short memo" },
          })}
        />
        <div>{errors.memo?.message}</div>
      </div>
      <button type="submit">送信</button>
    </form>
  );
}
