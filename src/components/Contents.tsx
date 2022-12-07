import { useEffect, useState } from 'react'
import ViewPayments from './payments/ViewPayments'
import AddPayment from './payments/AddPayment'
import { SlButton } from '@shoelace-style/shoelace/dist/react'
import { asPeso } from '../utils'

export default function Contents({ base, gradeLevel }) {
  const [students, setStudents] = useState([])

  useEffect(() => {
    if (gradeLevel) {
      base('Students')
        .select({
          fields: [
            'First Name',
            'Last Name',
            'Starting Balance',
            'Current Balance',
            'Total Paid',
            'Payments',
          ],
          filterByFormula: `{Grade Level} = '${gradeLevel}'`,
          sort: [
            {
              field: 'Last Name',
              direction: 'asc',
            },
            {
              field: 'First Name',
              direction: 'asc',
            },
          ],
        })
        .firstPage((e, records) => {
          if (e) console.error(e)

          setStudents(
            records.map((r) => ({
              name: `${r.fields['Last Name']}, ${r.fields['First Name']}`,
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

  const handleShowPayments = (s) => {
    setActiveStudent(s)
    setShowPayments(true)
  }

  const handleShowAddPayment = () => {
    setShowPayments(false)
    setShowAddPayment(true)
  }

  const handleAddPayment = (payment) => {
    activeStudent.payments.push(payment)
    setShowAddPayment(false)
    setShowPayments(true)
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
                  <td>{asPeso(s.startingBalance)}</td>
                  <td>{asPeso(s.currentBalance)}</td>
                  <td>{asPeso(s.totalPaid)}</td>
                  <td>
                    <SlButton onClick={() => handleShowPayments(s)}>View</SlButton>
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
        onAddPayment={handleShowAddPayment}
      />
      <AddPayment
        student={activeStudent}
        open={showAddPayment}
        onClose={() => setShowAddPayment(false)}
        onAddPayment={handleAddPayment}
        key={showAddPayment}
      />
    </div>
  )
}
