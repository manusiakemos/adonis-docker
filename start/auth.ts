import Route from "@ioc:Adonis/Core/Route";

Route.post("login", async ({ auth, request, response }) => {
  const email = request.input("email");
  const password = request.input("password");

  try {
    const login = await auth.use("api").attempt(email, password);
    return response.json({
      code: 200,
      text: "ok",
      message: "login success",
      path: request.url(true),
      record: login
    });
  } catch (e) {
    return response.json({
      code: 403,
      text: "error",
      message: "wrong credentials",
      path: request.url(true),
      record: null
    });
  }
});

Route.post("/logout", async ({ auth, response, request }) => {
  await auth.use("api").revoke();
  return response.json({
    code: 200,
    text: "ok",
    message: "logout success",
    path: request.url(true),
    record: null
  });
});
