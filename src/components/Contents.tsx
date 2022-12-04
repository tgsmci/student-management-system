import { useEffect, useState } from "react"

export default function Contents({ base, gradeLevel }) {
  const [students, setStudents] = useState([])

  useEffect(() => {
    if (gradeLevel) {
      base('Ledgers')
        .select({
          fields: [
            '_Student',
            'Starting Balance',
            'Current Balance',
            'Total Paid',
            'Payments',
          ],
          filterByFormula: `{Grade Level} = '${gradeLevel}'`,
          sort: [
            {
              field: '_Student',
              direction: 'asc',
            },
          ],
        })
        .firstPage((e, records) => {
          if (e) console.error(e)

          setStudents(records.map(r => {
            return {
              name: r.fields._Student[0],
              startingBalance: parseFloat(r.fields['Starting Balance']) || 0,
              currentBalance: parseFloat(r.fields['Current Balance']) || 0,
              totalPaid: parseFloat(r.fields['Total Paid']) || 0,
              payments: r.fields['Payments'] ? JSON.parse(r.fields['Payments']) : null,
            }
          }))

        })
    }
  }, [gradeLevel])
  
  return (
    <div className="bg-green-100">
      {
        gradeLevel ? (
          students ? (
            <table className="table-fixed border-collapse w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Starting Balance</th>
                  <th>Current Balance</th>
                  <th>Total Paid</th>
                  <th>Payments</th>
                </tr>
              </thead>
              <tbody>
                {
                  students.map(s => (
                    <tr key={s.name}>
                      <td>{s.name}</td>
                      <td>P{s.startingBalance}</td>
                      <td>P{s.currentBalance}</td>
                      <td>P{s.totalPaid}</td>
                      <td>
                        <a>View</a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : <div>No students found.</div>
        ) : <p>Select grade level.</p>
      }
    </div>
  )
}