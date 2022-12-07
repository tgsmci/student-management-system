import { DateTime } from 'luxon'

const currency = new Intl.NumberFormat(import.meta.env.VITE_LOCALE, {
  style: 'currency',
  currency: import.meta.env.VITE_CURRENCY_CODE,
})

export function asPeso(value) {
  return currency.format(value)
}

export function asPHTime(value) {
  return DateTime.fromISO(value, { zone: import.meta.env.VITE_TIMEZONE })
}

export const today = DateTime.now({ zone: import.meta.env.VITE_TIMEZONE })
