export default function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let data: T | null = null;
  let error: Error | null = null;

  const wrapper = promise.then(
    (result) => {
      status = "fullfilled";
      data = result;
    },
    (e) => {
      status = "rejected";
      error = new Error("error", { cause: e });
    },
  );

  return {
    get() {
      switch (status) {
        case "fullfilled":
          return data;
        case "rejected":
          throw error;
        case "pending":
          throw wrapper;
        default:
          break;
      }
    },
  };
}
