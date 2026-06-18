const CURRENCY_FROMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
})

export function formatCurrency(number) {
  return CURRENCY_FROMATTER.format(number)
}
