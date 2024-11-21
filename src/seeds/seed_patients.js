export const seed = async function (knex) {
    await knex("patients").del();
  
    await knex("patients").insert([
      { name: "John Doe", email: "john.doe@example.com", phone: "1234567890", insurance_number: "INS12345", date_of_birth: "1990-01-01" },
      { name: "Jane Smith", email: "jane.smith@example.com", phone: "9876543210", insurance_number: "INS67890", date_of_birth: "1985-05-15" },
      { name: "Alice Johnson", email: "alice.johnson@example.com", phone: "5554443333", insurance_number: "INS11223", date_of_birth: "1992-07-30" },
      { name: "Bob Brown", email: "bob.brown@example.com", phone: "4445556666", insurance_number: "INS33445", date_of_birth: "1980-03-25" },
      { name: "Carol Taylor", email: "carol.taylor@example.com", phone: "7778889999", insurance_number: "INS55667", date_of_birth: "1995-12-12" },
      { name: "David Wilson", email: "david.wilson@example.com", phone: "2223334444", insurance_number: "INS77889", date_of_birth: "1988-09-10" },
      { name: "Eve Davis", email: "eve.davis@example.com", phone: "1112223333", insurance_number: "INS99001", date_of_birth: "1975-06-20" },
      { name: "Frank Moore", email: "frank.moore@example.com", phone: "6665554444", insurance_number: "INS22334", date_of_birth: "1998-01-05" },
      { name: "Grace Miller", email: "grace.miller@example.com", phone: "3334445555", insurance_number: "INS44556", date_of_birth: "1993-11-18" },
      { name: "Hank Lee", email: "hank.lee@example.com", phone: "8887776666", insurance_number: "INS66778", date_of_birth: "1982-02-14" },
    ]);
  };
  