export const seed = async function (knex) {
  await knex("patients").del();

  await knex("patients").insert([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1-416-555-1234", // More realistic phone number
      insurance_number: "INS12345",
      date_of_birth: "1990-01-01",
      address: "123 Elm St, Richmond Hill",
      lat: 43.8467, // Latitude for Richmond Hill
      lon: -79.3822, // Longitude for Richmond Hill
      history: JSON.stringify([
        { date: "2024-10-01", details: "Routine checkup" },
        { date: "2024-11-15", details: "Follow-up for flu" },
      ]),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1-647-555-5678", // Toronto phone number
      insurance_number: "INS67890",
      date_of_birth: "1985-05-15",
      address: "456 Maple St, Toronto",
      lat: 43.65107, // Latitude for Toronto
      lon: -79.347015, // Longitude for Toronto
      history: JSON.stringify([
        { date: "2024-07-20", details: "Consultation for allergy" },
        { date: "2024-08-25", details: "Vaccination appointment" },
      ]),
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-905-555-9876", // Markham phone number
      insurance_number: "INS11223",
      date_of_birth: "1992-07-30",
      address: "789 Birch St, Markham",
      lat: 43.8561, // Latitude for Markham
      lon: -79.337, // Longitude for Markham
      history: JSON.stringify([
        { date: "2024-09-10", details: "Annual physical exam" },
        { date: "2024-11-01", details: "Follow-up for hypertension" },
      ]),
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "+1-289-555-6543", // Vaughan phone number
      insurance_number: "INS33445",
      date_of_birth: "1980-03-25",
      address: "101 Pine St, Vaughan",
      lat: 43.8372, // Latitude for Vaughan
      lon: -79.5083, // Longitude for Vaughan
      history: JSON.stringify([
        { date: "2024-10-05", details: "Consultation for back pain" },
        { date: "2024-11-10", details: "Physical therapy session" },
      ]),
    },
    {
      id: 5,
      name: "Carol Taylor",
      email: "carol.taylor@example.com",
      phone: "+1-416-555-7890", // Toronto phone number
      insurance_number: "INS55667",
      date_of_birth: "1995-12-12",
      address: "789 Cedar St, Toronto",
      lat: 43.65107,
      lon: -79.347015,
      history: JSON.stringify([
        { date: "2024-08-18", details: "Follow-up for knee injury" },
        { date: "2024-09-22", details: "Routine vaccination" },
      ]),
    },
    {
      id: 6,
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+1-905-555-3210", // Richmond Hill phone number
      insurance_number: "INS77889",
      date_of_birth: "1988-09-10",
      address: "123 Spruce Ave, Richmond Hill",
      lat: 43.8467,
      lon: -79.3822,
      history: JSON.stringify([
        { date: "2024-06-10", details: "Routine checkup" },
        { date: "2024-08-15", details: "Allergy testing" },
      ]),
    },
    {
      id: 7,
      name: "Eve Davis",
      email: "eve.davis@example.com",
      phone: "+1-905-555-6543", // Markham phone number
      insurance_number: "INS99001",
      date_of_birth: "1975-06-20",
      address: "234 Willow Dr, Markham",
      lat: 43.8561,
      lon: -79.337,
      history: JSON.stringify([
        { date: "2024-03-01", details: "Consultation for diabetes management" },
        { date: "2024-05-01", details: "Follow-up appointment" },
      ]),
    },
  ]);
};
