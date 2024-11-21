export const seed = async function (knex) {
    await knex("appointments").del();
  
    const appointments = [];
    
    // Helper function to generate random dates within a range
    const randomDate = (start, end) => {
      const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      return date.toISOString().split("T")[0];
    };
  
    // Possible outcomes for appointment descriptions
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
      "Condition managed; no further treatment required."
    ];
  
    // Generate appointments
    for (let patientId = 1; patientId <= 10; patientId++) {
      const numAppointments = Math.floor(Math.random() * 6); // 0 to 5 appointments per patient
      for (let i = 0; i < numAppointments; i++) {
        const specialistId = Math.floor(Math.random() * 10) + 1; // Random specialist ID (1 to 10)
        const description = appointmentResults[Math.floor(Math.random() * appointmentResults.length)];
        
        appointments.push({
          specialist_id: specialistId,
          patient_id: patientId,
          appointment_date: randomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)), // Random date in 2024
          description: description,
        });
      }
    }
  
    await knex("appointments").insert(appointments);
  };
  