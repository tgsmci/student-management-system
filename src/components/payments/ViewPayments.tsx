import { useState, useEffect } from 'react'
import { SlButton, SlDialog } from '@shoelace-style/shoelace/dist/react'

export default function ViewPayments({ student, open, onClose, onAddPayment }) {
  return (
    <SlDialog
      label="Payments"
      open={open}
      onSlAfterHide={onClose}>
      <div className="bg-yellow-100 font-bold text-center p-2 mb-4">
        {student.name}
      </div>
      {student?.payments ? (
        <table className="payments w-full border-collapse">
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
        </table>
      ) : (
        <div className="text-center">No payments found.</div>
      )}
      <div
        slot="footer"
        className="flex flex-row justify-end gap-2">
        <SlButton onClick={onAddPayment}>Add Payment</SlButton>
        <SlButton
          variant="primary"
          onClick={onClose}>
          Close
        </SlButton>
      </div>
    </SlDialog>
  )
}
