export const seed = async function (knex) {
  await knex("specialists").del();

  await knex("specialists").insert([
    {
      name: "Dr. Green",
      specialty: "Cardiology",
      address: "123 Main St, Toronto",
      phone: "1234567890",
      lat: 43.65107,
      lon: -79.347015,
    },
    {
      name: "Dr. White",
      specialty: "Dermatology",
      address: "456 Elm St, Richmond Hill",
      phone: "0987654321",
      lat: 43.8467,
      lon: -79.3822,
    },
    {
      name: "Dr. Brown",
      specialty: "Neurology",
      address: "789 Oak St, Markham",
      phone: "5556667777",
      lat: 43.8561,
      lon: -79.337,
    },
    {
      name: "Dr. Black",
      specialty: "Pediatrics",
      address: "101 Pine St, Vaughan",
      phone: "2223334444",
      lat: 43.8372,
      lon: -79.5083,
    },
    {
      name: "Dr. Blue",
      specialty: "Orthopedics",
      address: "654 Cedar St, Toronto",
      phone: "7778889999",
      lat: 43.65107,
      lon: -79.347015,
    },
    {
      name: "Dr. Yellow",
      specialty: "Oncology",
      address: "951 Maple St, Toronto",
      phone: "1112223333",
      lat: 43.65107,
      lon: -79.347015,
    },
    {
      name: "Dr. Violet",
      specialty: "Psychiatry",
      address: "159 Birch St, Richmond Hill",
      phone: "6665554444",
      lat: 43.8467,
      lon: -79.3822,
    },
    {
      name: "Dr. Orange",
      specialty: "Gastroenterology",
      address: "753 Spruce St, Vaughan",
      phone: "3334445555",
      lat: 43.8372,
      lon: -79.5083,
    },
  ]);
};
