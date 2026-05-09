// The data we want to add
const schoolsToInsert = [
  {
    name: "Delhi Public School",
    address: "R.K. Puram New Delhi",
    latitude: 28.5684,
    longitude: 77.1852
  },
  {
    name: "Vasant Valley School",
    address: "Vasant Kunj New Delhi",
    latitude: 28.5244,
    longitude: 77.1558
  },
  {
    name: "Modern School",
    address: "Barakhamba Road New Delhi",
    latitude: 28.6304,
    longitude: 77.2273
  }
];

// Your live Render API URL
const API_URL = "https://school-management-api-0dhi.onrender.com/api/addSchool";

// The automation function
async function runSeeder() {
  console.log("🚀 Starting database seeding...");

  for (const school of schoolsToInsert) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(school)
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log(`✅ Success: Added ${school.name}`);
      } else {
        console.error(`❌ Failed to add ${school.name}:`, result.errors);
      }
      
    } catch (error) {
      console.error(`🚨 Network error for ${school.name}:`, error.message);
    }
  }

  console.log("🎉 Seeding complete!");
}

// Execute the function
runSeeder();