import { useState, useEffect } from 'react'
import { SlButton, SlDialog, SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react'

export default function AddPayment({ student, open, onClose }) {
  return (
    <SlDialog
      label="Add Payment"
      open={open}
      onSlAfterHide={onClose}>
      <div class="space-y-6">
        <SlAlert variant="warning" open>
          <SlIcon slot="icon" name="exclamation-triangle" />
          <strong>Warning!</strong>
          <br />
          You cannot edit or delete a payment once you add it. Please contact the administrator if there are errors with a payment.
        </SlAlert>
        <div className="bg-yellow-100 font-bold text-center p-2">
          {student.name}
        </div>
        <div>
          [Add Payment Form]
        </div>
      </div>
      <div slot="footer" className="flex flex-row justify-end gap-2">
        <SlButton
          onClick={onClose}>
          Add Payment
        </SlButton>
        <SlButton
          variant="primary"
          onClick={onClose}>
          Cancel
        </SlButton>
      </div>
    </SlDialog>
  )
}
