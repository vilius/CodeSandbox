const elements = document.querySelectorAll(
  'section[id^="11"] > main[id$="22"] > article[id*="33"] > p.flag'
);

Array.from(elements)
  .map((i) => i.getAttribute("value"))
  .join("");

// https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/70726f

// Flag: 'product'
