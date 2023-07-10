function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, ms);
  });
}

delay(2000).then((result) => {
  console.log(result);
  return "New result";
});
