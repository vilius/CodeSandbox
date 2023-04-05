export const typingSpeed = 1000;

export const fetchFlag = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const result = fetch(
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/70726f",
    { signal }
  );

  return {
    flagPromise: new Promise<string>(async (resolve) => {
      try {
        const response = await result;
        const text = await response.text();
        resolve(text);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
        } else {
          throw error;
        }
      }
    }),
    abort: () => controller.abort(),
  };
};
