import jsPDF from "jspdf";


function downloadPDF() {

  const pdf = new jsPDF();

  pdf.text("IT'S NOT OVER UNTIL I WIN", 20, 20);

  pdf.text("Habit Tracker", 20, 30);

  pdf.save("habit-tracker.pdf");

}

