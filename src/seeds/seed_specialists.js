export const seed = async function (knex) {
    await knex("specialists").del();
  
    await knex("specialists").insert([
      { name: "Dr. Green", specialty: "Cardiology", address: "123 Main St, Toronto", phone: "1234567890" },
      { name: "Dr. White", specialty: "Dermatology", address: "456 Elm St, Vancouver", phone: "0987654321" },
      { name: "Dr. Brown", specialty: "Neurology", address: "789 Oak St, Calgary", phone: "5556667777" },
      { name: "Dr. Black", specialty: "Pediatrics", address: "321 Pine St, Montreal", phone: "2223334444" },
      { name: "Dr. Blue", specialty: "Orthopedics", address: "654 Cedar St, Halifax", phone: "7778889999" },
      { name: "Dr. Yellow", specialty: "Oncology", address: "951 Maple St, Ottawa", phone: "1112223333" },
      { name: "Dr. Violet", specialty: "Psychiatry", address: "159 Birch St, Winnipeg", phone: "6665554444" },
      { name: "Dr. Orange", specialty: "Gastroenterology", address: "753 Spruce St, Regina", phone: "3334445555" },
      { name: "Dr. Grey", specialty: "Endocrinology", address: "357 Ash St, Edmonton", phone: "8887776666" },
      { name: "Dr. Pink", specialty: "Rheumatology", address: "852 Willow St, St. John’s", phone: "4443332222" },
    ]);
  };
  