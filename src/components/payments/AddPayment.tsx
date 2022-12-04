import { useState, useEffect } from 'react'
import {
  SlButton,
  SlDialog,
  SlAlert,
  SlIcon,
  SlInput,
  SlTextarea,
  SlRadioGroup,
  SlRadio,
} from '@shoelace-style/shoelace/dist/react'

export default function AddPayment({ student, open, onClose }) {
  const toISOString = (d) => d.toISOString().split('T')[0]
  const today = toISOString(new Date())

  const [paymentDetails, setPaymentDetails] = useState({
    date: today,
  })

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddPayment = () => {}

  return (
    <SlDialog
      label="Add Payment"
      open={open}
      onSlAfterHide={onClose}>
      {student && (
        <>
          <div className="space-y-6">
            <div className="bg-yellow-100 p-2 text-center font-bold">{student?.name}</div>
            <div className="space-y-4">
              <SlInput
                label="Date"
                type="date"
                value={paymentDetails.date}
                max={today}
                name="date"
                required
                onSlChange={handleChange}
              />
              <SlInput
                label="Amount (P)"
                placeholder="0.00"
                type="number"
                min="1"
                name="amount"
                required
                onSlChange={handleChange}
              />
              <SlRadioGroup
                label="Type"
                name="type"
                required
                onSlChange={handleChange}>
                <SlRadio value="cash">Cash</SlRadio>
                <SlRadio value="check">Check</SlRadio>
              </SlRadioGroup>
              <SlTextarea
                label="Notes"
                name="notes"
                onSlChange={handleChange}
              />
            </div>
            <SlAlert
              variant="warning"
              open>
              <SlIcon
                slot="icon"
                name="exclamation-triangle"
              />
              <strong>Warning!</strong> You cannot edit or delete a payment once you add it. Please
              contact the administrator immediately if there are errors with a payment.
            </SlAlert>
          </div>
          <div
            slot="footer"
            className="flex flex-row justify-end gap-2">
            <SlButton
              variant="primary"
              onClick={handleAddPayment}>
              Add Payment
            </SlButton>
            <SlButton onClick={onClose}>Cancel</SlButton>
          </div>
        </>
      )}
    </SlDialog>
  )
}
