import { useState, useEffect } from 'react'
import { SlButton, SlDialog } from '@shoelace-style/shoelace/dist/react'

export default function ViewPayments({ student, clearActiveStudent }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(student !== null)
  }, [student])

  const afterHide = () => {
    setOpen(false)
    clearActiveStudent()
  }

  return (
    <SlDialog
      label={student?.name || 'Student'}
      open={open}
      onSlAfterHide={afterHide}>
      {student?.payments ?
        (<table className="payments w-full border-collapse">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {student.payments.map((p) => (
              <tr key={`${p.date}:${p.amount}`}>
                <td>{p.date}</td>
                <td>P{p.amount}</td>
                <td>{p.type}</td>
                <td>{p.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>) : (
          <div className="text-center">No payments found.</div>
        )
      }
      <div slot="footer" className="flex flex-row justify-end gap-2">
        <SlButton
          onClick={() => setOpen(false)}>
          Add Payment
        </SlButton>
        <SlButton
          variant="primary"
          onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </div>
    </SlDialog>
  )
}
