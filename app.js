const habits = [

  "Workout", "Read", "Meditate", "Journal", "No Junk Food"

];


const grid = document.getElementById("habit-grid");


habits.forEach(habit => {

  const row = document.createElement("div");

  row.innerHTML = `<strong>${habit}</strong>`;

  

  for (let i = 1; i <= 31; i++) {

    const box = document.createElement("input");

    box.type = "checkbox";

    row.appendChild(box);

  }

  grid.appendChild(row);

});

