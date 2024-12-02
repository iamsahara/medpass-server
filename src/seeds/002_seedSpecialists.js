export const seed = async function (knex) {
  await knex("specialists").del();

  await knex("specialists").insert([
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Cardiology",
      address: "123 Main St, Toronto, Ontario, Canada",
      phone: "+1-416-555-6789",
      lat: 43.65107,
      lon: -79.347015,
      firstAvailability: "2024-12-01",
      availability: JSON.stringify([
        "2024-12-01", "2024-12-05", "2024-12-10", "2024-12-15", "2024-12-20",
      ]),
    },
    {
      id: 2,
      name: "Dr. Michael Johnson",
      specialty: "Cardiology",
      address: "456 Elm St, Richmond Hill, Ontario, Canada",
      phone: "+1-647-555-9876",
      lat: 43.877108,
      lon: -79.437546,
      firstAvailability: "2024-12-02",
      availability: JSON.stringify([
        "2024-12-02", "2024-12-06", "2024-12-11", "2024-12-16", "2024-12-21",
      ]),
    },
    {
      id: 3,
      name: "Dr. Sarah Thompson",
      specialty: "Cardiology",
      address: "789 Oak St, Markham, Ontario, Canada",
      phone: "+1-905-555-4321",
      lat: 43.856098,
      lon: -79.337021,
      firstAvailability: "2024-12-03",
      availability: JSON.stringify([
        "2024-12-03", "2024-12-07", "2024-12-12", "2024-12-17", "2024-12-22",
      ]),
    },
    {
      id: 4,
      name: "Dr. David Lee",
      specialty: "Cardiology",
      address: "321 Pine St, Vaughan, Ontario, Canada",
      phone: "+1-289-555-5678",
      lat: 43.8361,
      lon: -79.4983,
      firstAvailability: "2024-12-04",
      availability: JSON.stringify([
        "2024-12-04", "2024-12-08", "2024-12-13", "2024-12-18", "2024-12-23",
      ]),
    },
    {
      id: 5,
      name: "Dr. Jessica Miller",
      specialty: "Cardiology",
      address: "654 Cedar St, Toronto, Ontario, Canada",
      phone: "+1-416-555-7890",
      lat: 43.66506,
      lon: -79.411079,
      firstAvailability: "2024-12-05",
      availability: JSON.stringify([
        "2024-12-05", "2024-12-09", "2024-12-14", "2024-12-19", "2024-12-24",
      ]),
    },
    {
      id: 6,
      name: "Dr. Robert Wilson",
      specialty: "Cardiology",
      address: "951 Maple St, Toronto, Ontario, Canada",
      phone: "+1-416-555-1234",
      lat: 43.698144,
      lon: -79.430935,
      firstAvailability: "2024-12-06",
      availability: JSON.stringify([
        "2024-12-06", "2024-12-10", "2024-12-15", "2024-12-20", "2024-12-25",
      ]),
    },
    {
      id: 7,
      name: "Dr. Olivia Garcia",
      specialty: "Cardiology",
      address: "159 Birch St, Richmond Hill, Ontario, Canada",
      phone: "+1-647-555-5678",
      lat: 43.837925,
      lon: -79.421072,
      firstAvailability: "2024-12-07",
      availability: JSON.stringify([
        "2024-12-07", "2024-12-11", "2024-12-16", "2024-12-21", "2024-12-26",
      ]),
    },
    {
      id: 8,
      name: "Dr. Daniel Martinez",
      specialty: "Cardiology",
      address: "753 Spruce St, Vaughan, Ontario, Canada",
      phone: "+1-905-555-9876",
      lat: 43.856097,
      lon: -79.5083,
      firstAvailability: "2024-12-08",
      availability: JSON.stringify([
        "2024-12-08", "2024-12-12", "2024-12-17", "2024-12-22", "2024-12-27",
      ]),
    },
  ]);
};
