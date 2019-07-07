const PYRAMID = [
  [{
      reps: 8,
      percentOfMax: 75
    },
    {
      reps: 6,
      percentOfMax: 85
    },
    {
      reps: 1,
      percentOfMax: 95
    },
    {
      reps: 6,
      percentOfMax: 85
    },
    {
      reps: 8,
      percentOfMax: 75
    },
  ],
  [{
      reps: 3,
      percentOfMax: 90
    },
    {
      reps: 6,
      percentOfMax: 80
    },
    {
      reps: 8,
      percentOfMax: 70
    },
    {
      reps: 6,
      percentOfMax: 80
    },
    {
      reps: 3,
      percentOfMax: 90
    },
  ],
  [{
      reps: 8,
      percentOfMax: 70
    },
    {
      reps: 6,
      percentOfMax: 80
    },
    {
      reps: 4,
      percentOfMax: 90
    },
    {
      reps: 1,
      percentOfMax: 99
    },
    {
      reps: 4,
      percentOfMax: 90
    },
    {
      reps: 6,
      percentOfMax: 80
    },
    {
      reps: 8,
      percentOfMax: 70
    },
  ],
  [{
      reps: 2,
      percentOfMax: 95
    },
    {
      reps: 4,
      percentOfMax: 85
    },
    {
      reps: 6,
      percentOfMax: 75
    },
    {
      reps: 8,
      percentOfMax: 65
    },
    {
      reps: 6,
      percentOfMax: 75
    },
    {
      reps: 4,
      percentOfMax: 85
    },
    {
      reps: 2,
      percentOfMax: 95
    },
  ]
]

$(document).ready(function() {
  $('#max-input').change(function(e) {
    // Get max from input
    const max = Math.floor(e.currentTarget.value)

    // Clear old data
    document.getElementById('tables-container').innerHTML = ''

    // Create variable for storing new data
    let htmlString = ''

    // Generate new data
    for (let week in PYRAMID) {
      htmlString += generateTable(week, max)
    }

    // Show new data
    document.getElementById('tables-container').innerHTML = htmlString
  })

  function generateTable(week, max) {
    let htmlRows = ''

    for (let row of PYRAMID[week]) {
      const weight = Math.floor(max * (row.percentOfMax / 100))
      htmlRows += `<tr><td class="has-text-centered">${row.reps}</td><td class="has-text-centered">${weight}</td></tr>`
    }

    return `
      <h4 class="is-size-4">Week ${Number(week) + 1}</h4>
      <table class="table is-fullwidth is-bordered is-striped">
        <thead>
          <tr>
            <th class="has-text-centered">Reps</th>
            <th class="has-text-centered">Weight</th>
					</tr>
        </thead>
        <tbody>
        ${htmlRows}
        </tbody>
      </table>`
  }
})
