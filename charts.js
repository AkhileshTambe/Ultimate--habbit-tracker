const ctx = document.getElementById("lineChart");


new Chart(ctx, {

  type: 'line',

  data: {

    labels: Array.from({length: 31}, (_, i) => i + 1),

    datasets: [{

      label: 'Consistency',

      data: [],

      borderWidth: 2

    }]

  }

});
gapi.client.sheets.spreadsheets.values.append({
  spreadsheetId: SHEET_ID,
  range: "Sheet1!A:C",
  valueInputOption: "RAW",
  resource: {
    values: [[date, habit, status]]
  }
});


