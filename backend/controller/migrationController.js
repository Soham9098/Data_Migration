import databaseConnect, { raj_item } from "../config/database.js";
import mysql2 from "mysql2";

const migrateData = async () => {
  await databaseConnect();

  try {
    const mysqlConfig = {
      host: "localhost",
      user: "root",
      password: "root123",
      database: "migration",
    };

    // Fetch data from MongoDB
    const mongoData = await raj_item.find(); // Replace with your MongoDB model

    // Create a MySQL connection
    const mysqlConnection = mysql2.createConnection(mysqlConfig);

    mysqlConnection.connect(); // Connect to MySQL

    // Define the SQL table schema and create it if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS migrated_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        phone_no VARCHAR(20)
      )
    `;

    // Execute the query to create the table
    mysqlConnection.execute(createTableQuery, function (err, results) {
      if (err) {
        console.error("Error creating table:", err);
        mysqlConnection.end(); // Close the MySQL connection
        return; // Return to stop further execution
      }
      console.log("SQL table created successfully:", results);

      // Insert data into the SQL table
      for (const item of mongoData) {
        const insertQuery =
          "INSERT INTO migrated_data (name, email, phone_no) VALUES (?, ?, ?)";
        const insertValues = [item.name, item.email, item.phone];

        // Execute the query to insert data
        mysqlConnection.execute(
          insertQuery,
          insertValues,
          function (err, results) {
            if (err) {
              console.error("Error inserting row:", err);
            } else {
              console.log("Inserted row:", results);
            }
          }
        );
      }

      // Close the MySQL connection
      mysqlConnection.end();

      console.log("Data migration completed.");
    });
  } catch (error) {
    console.error("Error during data migration:", error);
  }
};

export default migrateData;
