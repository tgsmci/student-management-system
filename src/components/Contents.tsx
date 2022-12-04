import { useEffect, useState } from 'react'
import ViewPayments from './payments/ViewPayments'
import AddPayment from './payments/AddPayment'
import { SlButton } from '@shoelace-style/shoelace/dist/react'

export default function Contents({ base, gradeLevel }) {
  const [students, setStudents] = useState([])

  useEffect(() => {
    if (gradeLevel) {
      base('Ledgers')
        .select({
          fields: ['_Student', 'Starting Balance', 'Current Balance', 'Total Paid', 'Payments'],
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

          setStudents(
            records.map((r) => ({
              name: r.fields._Student[0],
              startingBalance: parseFloat(r.fields['Starting Balance']) || 0,
              currentBalance: parseFloat(r.fields['Current Balance']) || 0,
              totalPaid: parseFloat(r.fields['Total Paid']) || 0,
              payments: r.fields['Payments'] ? JSON.parse(r.fields['Payments']) : null,
            }))
          )
        })
    }
  }, [gradeLevel])

  const [activeStudent, setActiveStudent] = useState(null)
  const [showPayments, setShowPayments] = useState(false)
  const [showAddPayment, setShowAddPayment] = useState(false)

  const handleViewStudent = (s) => {
    setActiveStudent(s)
    setShowPayments(true)
  }

  const handleAddPayment = () => {
    setShowPayments(false)
    setShowAddPayment(true)
  }

  return (
    <div className="bg-green-100">
      {gradeLevel ? (
        students ? (
          <table className="students w-full table-fixed border-collapse">
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
              {students.map((s) => (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td>P{s.startingBalance}</td>
                  <td>P{s.currentBalance}</td>
                  <td>P{s.totalPaid}</td>
                  <td>
                    <SlButton onClick={() => handleViewStudent(s)}>View</SlButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No students found.</div>
        )
      ) : (
        <p>Select grade level.</p>
      )}
      <ViewPayments
        student={activeStudent}
        open={showPayments}
        onClose={() => setShowPayments(false)}
        onAddPayment={handleAddPayment}
      />
      <AddPayment
        student={activeStudent}
        open={showAddPayment}
        onClose={() => setShowAddPayment(false)}
      />
    </div>
  )
}
