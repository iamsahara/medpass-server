export const seed = async function (knex) {
  await knex("patients").del();

  await knex("patients").insert([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      insurance_number: "INS12345",
      date_of_birth: "1990-01-01",
      address: "123 Elm St, Richmond Hill",
      lat: 43.8467, // Latitude for Richmond Hill
      lon: -79.3822, // Longitude for Richmond Hill
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "9876543210",
      insurance_number: "INS67890",
      date_of_birth: "1985-05-15",
      address: "456 Maple St, Toronto",
      lat: 43.65107, // Latitude for Toronto
      lon: -79.347015, // Longitude for Toronto
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "5554443333",
      insurance_number: "INS11223",
      date_of_birth: "1992-07-30",
      address: "789 Birch St, Markham",
      lat: 43.8561, // Latitude for Markham
      lon: -79.337, // Longitude for Markham
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "4445556666",
      insurance_number: "INS33445",
      date_of_birth: "1980-03-25",
      address: "101 Pine St, Vaughan",
      lat: 43.8372, // Latitude for Vaughan
      lon: -79.5083, // Longitude for Vaughan
    },
    {
      name: "Carol Taylor",
      email: "carol.taylor@example.com",
      phone: "7778889999",
      insurance_number: "INS55667",
      date_of_birth: "1995-12-12",
      address: "789 Cedar St, Toronto",
      lat: 43.65107,
      lon: -79.347015,
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "2223334444",
      insurance_number: "INS77889",
      date_of_birth: "1988-09-10",
      address: "123 Spruce Ave, Richmond Hill",
      lat: 43.8467,
      lon: -79.3822,
    },
    {
      name: "Eve Davis",
      email: "eve.davis@example.com",
      phone: "1112223333",
      insurance_number: "INS99001",
      date_of_birth: "1975-06-20",
      address: "234 Willow Dr, Markham",
      lat: 43.8561,
      lon: -79.337,
    },
  ]);
};
