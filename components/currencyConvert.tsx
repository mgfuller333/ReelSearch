"use client"

import React, { useEffect, useState } from "react"
import currencies from "currencies"

const EXCHANGE_API_URL = "https://open.er-api.com/v6/latest"

const LocalCurrencyPrice = ({ price }: { price: number }) => {
  const [priceInLocalCurrency, setPriceInLocalCurrency] = useState<number>(0)
  const [currencySymbol, setCurrencySymbol] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // Get user's IP-based location and currency
        const ipResponse = await fetch(`https://ipapi.co/json/`)
        if (!ipResponse.ok) throw new Error("Failed to fetch IP location")
        const ipData = await ipResponse.json()
        const userCurrency = ipData.currency // User's local currency code

        // Get exchange rate for 1 USD to the user's local currency
        const exchangeResponse = await fetch(
          `${EXCHANGE_API_URL}/${userCurrency}`
        )
        if (!exchangeResponse.ok)
          throw new Error("Failed to fetch exchange rate")
        const exchangeData = await exchangeResponse.json()
        const exchangeRate = exchangeData.rates[userCurrency]

        // Get currency symbol
        const symbol = currencies.get(userCurrency)?.symbol || ""

        setPriceInLocalCurrency(exchangeRate)
        setCurrencySymbol(symbol)
      } catch (error) {
        setError("Error fetching price in local currency")
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrice()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <p>
      {currencySymbol}
      {(price * priceInLocalCurrency).toFixed(0)}
    </p>
  )
}

export default LocalCurrencyPrice
