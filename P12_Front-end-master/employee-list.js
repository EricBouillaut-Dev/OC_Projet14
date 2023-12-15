$(function () {
  // Stockage des données utilisateur dans le local storage
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(users));
  }

  // Code existant pour initialiser la DataTable avec les données des employés
  const employees = JSON.parse(localStorage.getItem("employees"));
  $("#employee-table").DataTable({
    data: employees,
    columns: [
      { title: "First Name", data: "firstName" },
      { title: "Last Name", data: "lastName" },
      { title: "Start Date", data: "startDate" },
      { title: "Department", data: "department" },
      { title: "Date of Birth", data: "dateOfBirth" },
      { title: "Street", data: "street" },
      { title: "City", data: "city" },
      { title: "State", data: "state" },
      { title: "Zip Code", data: "zipCode" },
    ],
  });
});
