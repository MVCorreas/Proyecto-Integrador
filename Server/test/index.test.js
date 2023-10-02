const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

beforeAll(async () => {
  await app.listen(3001);
});

afterAll(async () => {
  await app.close();
});

describe("Test de RUTAS", () => {
  beforeEach(async function () {
    await controller.reset();

    describe("GET /rickandmorty/character/:id", () => {
      it("Responde con status: 200"),
        async () => {
          const response = await agent
            .get("/rickandmorty/character/1")
            .expect(200);
        };

      it(
        'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image'
      ),
        async () => {
          const response = await agent
            .get("/rickandmorty/character/1")
            .expect(200);
          expect(response.body).toHaveProperty("id");
          expect(response.body).toHaveProperty("name");
          expect(response.body).toHaveProperty("species");
          expect(response.body).toHaveProperty("gender");
          expect(response.body).toHaveProperty("status");
          expect(response.body).toHaveProperty("origin");
          expect(response.body).toHaveProperty("image");
        };

      it("Si hay un error responde con status: 500"),
        async () => {
          const response = await agent.get("/rickandmorty/character/1");
          expect(response.status).toBe(500);
        };
    });

    describe("GET /rickandmorty/login", () => {
      it("Debería autenticar al usuario con credenciales correctas", async () => {
        const response = await request(app)
          .get("/rickandmorty/login")
          .query({ email: "mvcorreas@gmail.com", password: "mv1220" });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ access: true });
      });

      it("Debería rechazar al usuario con credenciales incorrectas", async () => {
        const response = await request(app)
          .get("/rickandmorty/login")
          .query({
            email: "usuario@example.com",
            password: "contrasenaIncorrecta",
          });

        expect(response.statusCode).toBe(401); //unauthorized request
        expect(response.body).toEqual({ access: false });
      });
    });

    describe("POST /rickandmorty/fav", () => {
      let favorites = [];
      beforeEach(() => {
        favorites = [];
      });

      it("Debería agregar elementos al arreglo de favoritos", async () => {
        const response1 = await request(app)
          .post("/rickandmorty/fav")
          .send({ item: "Elemento1" });

        expect(response1.status).toBe(200);
        expect(response1.body).toEqual(["Elemento1"]);

        const response2 = await request(app)
          .post("/rickandmorty/fav")
          .send({ item: "Elemento2" });

        expect(response2.status).toBe(200);
        expect(response2.body).toEqual(["Elemento1", "Elemento2"]);
      });
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
      let favorites = ["Personaje1", "Personaje2", "Personaje3"];

      it("Debería mantener el arreglo sin cambios si el ID no es válido", async () => {
        const response = await request(app).delete(
          "/rickandmorty/fav/IDInvalido"
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(favorites);
      });

      it("Debería eliminar correctamente un personaje con un ID válido", async () => {
        const idAEliminar = "Personaje2";

        const response = await request(app).delete(
          `/rickandmorty/fav/${idAEliminar}`
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(["Personaje1", "Personaje3"]);
      });
    });
  });
});
