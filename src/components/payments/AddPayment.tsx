import { useState, useEffect } from 'react'
import { asPeso, asPHTime, today } from '../../utils'
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

export default function AddPayment({ student, open, onClose, onAddPayment }) {
  const TODAY = today.toISODate()

  const DEFAULT_PAYMENT_DETAILS = {
    date: TODAY,
    notes: '',
  }

  const [paymentDetails, setPaymentDetails] = useState(DEFAULT_PAYMENT_DETAILS)

  const formIsValid = () => {
    let result = false
    if (paymentDetails.date) {
      if (paymentDetails.amount && paymentDetails.amount > 0) {
        if (paymentDetails.type) {
          result = true
        }
      }
    }
    return result
  }

  const handleInputChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddPayment = () => {
    const payment = Object.assign({}, paymentDetails)
    payment.date = asPHTime(payment.date).toISODate()
    payment.amount = Number.parseFloat(payment.amount)
    payment.notes = payment.notes === '' ? null : payment.notes
    onAddPayment(paymentDetails)
  }

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
                max={TODAY}
                name="date"
                required
                onSlChange={handleInputChange}
              />
              <SlInput
                label="Amount"
                placeholder="0.00"
                type="number"
                min="1"
                name="amount"
                required
                onSlChange={handleInputChange}>
                <span slot="prefix">{import.meta.env.VITE_CURRENCY_SYMBOL}</span>
              </SlInput>
              <SlRadioGroup
                label="Type"
                name="type"
                required
                onSlChange={handleInputChange}>
                <SlRadio value="Cash">Cash</SlRadio>
                <SlRadio value="Check">Check</SlRadio>
              </SlRadioGroup>
              <SlTextarea
                label="Notes"
                name="notes"
                onSlChange={handleInputChange}
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
              onClick={handleAddPayment}
              disabled={!formIsValid()}>
              Add Payment
            </SlButton>
            <SlButton onClick={onClose}>Cancel</SlButton>
          </div>
        </>
      )}
    </SlDialog>
  )
}
