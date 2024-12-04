import React, { ChangeEvent, ReactNode, useState } from "react";

export default function FormSelect(): ReactNode {
  const [form, setForm] = useState({
    animal: "dog",
  });

  const handleForm = (e: ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`好きな動物: ${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物: </label>
      <br />
      <select
        id="animal"
        name="comment"
        value={form.animal}
        onChange={handleForm}
      >
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="rabbit">うさぎ</option>
        <option value="panda">パンダ</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
