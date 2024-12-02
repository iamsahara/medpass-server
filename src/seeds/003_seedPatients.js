export const seed = async function (knex) {
  await knex("patients").del();

  await knex("patients").insert([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1-416-555-1234",
      insurance_number: "INS12345",
      date_of_birth: "1990-01-01",
      address: "45 Crosby Avenue, Richmond Hill, ON, Canada",
      history: JSON.stringify([
        { date: "2024-10-01", details: "Dr. Green: Routine checkup" },
        { date: "2024-11-15", details: "Dr. Blue: Follow-up for flu" },
      ]),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1-647-555-5678",
      insurance_number: "INS67890",
      date_of_birth: "1985-05-15",
      address: "100 Queen Street West, Toronto, ON, Canada",
      history: JSON.stringify([
        { date: "2024-07-20", details: "Dr. Brown: Consultation for allergy" },
        { date: "2024-08-25", details: "Dr. White: Vaccination appointment" },
      ]),
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-905-555-9876",
      insurance_number: "INS11223",
      date_of_birth: "1992-07-30",
      address: "101 Town Centre Boulevard, Markham, ON, Canada",
      history: JSON.stringify([
        { date: "2024-09-10", details: "Dr. Green: Annual physical exam" },
        { date: "2024-11-01", details: "Dr. Blue: Follow-up for hypertension" },
      ]),
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "+1-289-555-6543",
      insurance_number: "INS33445",
      date_of_birth: "1980-03-25",
      address: "1 Bass Pro Mills Drive, Vaughan, ON, Canada",
      history: JSON.stringify([
        { date: "2024-10-05", details: "Dr. Black: Consultation for back pain" },
        { date: "2024-11-10", details: "Dr. Blue: Physical therapy session" },
      ]),
    },
    {
      id: 5,
      name: "Carol Taylor",
      email: "carol.taylor@example.com",
      phone: "+1-416-555-7890",
      insurance_number: "INS55667",
      date_of_birth: "1995-12-12",
      address: "789 Yonge St, Toronto, ON, Canada",
      history: JSON.stringify([
        { date: "2024-08-18", details: "Dr. White: Follow-up for knee injury" },
        { date: "2024-09-22", details: "Dr. Brown: Routine vaccination" },
      ]),
    },
    {
      id: 6,
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+1-905-555-3210",
      insurance_number: "INS77889",
      date_of_birth: "1988-09-10",
      address: "123 Spruce Ave, Richmond Hill, ON, Canada",
      history: JSON.stringify([
        { date: "2024-06-10", details: "Dr. Green: Routine checkup" },
        { date: "2024-08-15", details: "Dr. Violet: Allergy testing" },
      ]),
    },
    {
      id: 7,
      name: "Eve Davis",
      email: "eve.davis@example.com",
      phone: "+1-905-555-6543",
      insurance_number: "INS99001",
      date_of_birth: "1975-06-20",
      address: "234 Willow Dr, Markham, ON, Canada",
      history: JSON.stringify([
        { date: "2024-03-01", details: "Dr. Brown: Diabetes management" },
        { date: "2024-05-01", details: "Dr. Black: Follow-up appointment" },
      ]),
    },
  ]);
};
