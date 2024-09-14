type Params = {
    price: number
    locale?: string
    currency?: string
}
export const pricePrettier = ({
    price,
    locale = 'en-US',
    currency = '$',
}: Params): string => {
    const formattedNumber = new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Math.abs(price))

    // Determine the sign
    const sign = price < 0 ? '-' : ''

    // Combine the currency symbol, sign, and formatted number
    return `${sign}${currency}${formattedNumber}`
}
