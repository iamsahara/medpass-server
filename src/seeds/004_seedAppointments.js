/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex("appointments").del();
  const numPatients = 7;
  const numSpecialists = 8;

  const randomDate = (start, end) => {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toISOString().split("T")[0];
  };

  const appointmentResults = [
    "Routine checkup completed successfully.",
    "Follow-up on test results; improvement noted.",
    "Patient referred to another specialist for further evaluation.",
    "Test results reviewed; no immediate concerns.",
    "Diagnosed with a mild condition, prescribed medication.",
    "Follow-up required; additional tests scheduled.",
    "Patient advised on lifestyle changes and diet.",
    "Recovery progress evaluated; satisfactory improvement.",
    "Minor issues detected; treatment plan discussed.",
    "Condition managed; no further treatment required.",
  ];

  const appointments = [];
  for (let patientId = 1; patientId <= numPatients; patientId++) {
    const numAppointments = Math.floor(Math.random() * 6);
    for (let i = 0; i < numAppointments; i++) {
      const specialistId = Math.floor(Math.random() * numSpecialists) + 1;
      const description =
        appointmentResults[
          Math.floor(Math.random() * appointmentResults.length)
        ];
      appointments.push({
        specialist_id: specialistId,
        patient_id: patientId,
        appointment_date: randomDate(
          new Date(2024, 0, 1),
          new Date(2024, 11, 31)
        ),
        description: description,
      });
    }
  }

  await knex("appointments").insert(appointments);
};