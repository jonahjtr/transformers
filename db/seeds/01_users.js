/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      password: "johnDoe123",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@example.com",
      password: "janeDoe123",
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Smith",
      email: "alice@example.com",
      password: "aliceSmith123",
    },
    {
      id: 4,
      first_name: "Bob",
      last_name: "Smith",
      email: "bob@example.com",
      password: "bobSmith123",
    },
    {
      id: 5,
      first_name: "Eve",
      last_name: "Johnson",
      email: "eve@example.com",
      password: "eveJohnson123",
    },
  ]);
};
