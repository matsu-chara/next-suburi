import React, { ChangeEvent, ReactNode, useState } from "react";

export default function FormList(): ReactNode {
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  const handleForm = (e: ChangeEvent<HTMLSelectElement>) => {
    const data = [];
    const opts = Array.from(e.target.options);
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    setForm({
      ...form,
      [e.target.name]: data,
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
        size={4}
        multiple={true}
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
