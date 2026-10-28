const { getAuthToken, getAuthSession, fakeApi } = require("get-fake-api");

console.log("=== Token ===");
console.log(getAuthToken({ id: 1, role: "admin" }));

console.log("\n=== Session ===");
console.log(getAuthSession());

console.log("\n=== Async Login ===");
fakeApi.login({ email: "test@example.com" }, 50).then(console.log);
