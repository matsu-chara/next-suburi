import React, { ReactNode, ChangeEvent } from "react";
import { useImmer } from "use-immer";

export type StateNestImmerProps = {
  name: string;
  address: {
    prefecture: string;
    city: string;
    [key: string]: string;
  };
  [key: string]: string | { [key: string]: string };
};

export default function StateNestImmer(): ReactNode {
  const [form, setForm] = useImmer<StateNestImmerProps>({
    name: "John",
    address: {
      prefecture: "Tokyo",
      city: "Shinjuku",
    },
  });

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      form[e.target.name] = e.target.value;
    });
  };

  const handleFormNest = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((form: StateNestImmerProps) => {
      form.address[e.target.name] = e.target.value;
    });
  };

  const show = () => {
    console.log(`こんにちは ${form.name} ${form.address.city} さん`);
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
        <label htmlFor="prefecture">住所: </label>
        <input
          id="prefecture"
          name="prefecture"
          type="text"
          onChange={handleFormNest}
          value={form.address.prefecture}
        />
      </div>
      <div>
        <label htmlFor="city">市: </label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={handleFormNest}
          value={form.address.city}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>
        こんにちは {form.name}さん ({form.address.city})
      </p>
    </form>
  );
}
