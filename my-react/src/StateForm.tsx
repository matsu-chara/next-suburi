import React, { ReactNode, useState, ChangeEvent } from "react";

export default function StateForm(): ReactNode {
  const [form, setForm] = useState({
    name: "山田太郎",
    age: 18,
  });

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, // e.g. { name: "..", age: "18" } + {"age": 1} 
    });
  };

  const show = () => {
    console.log(`こんにちは ${form.name} ${form.age} さん`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前: </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="age">年齢: </label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>
        こんにちは {form.name} ({form.age})さん
      </p>
    </form>
  );
}
