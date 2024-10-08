import React from "react"
import Price from "@/productUI/price"
import { Box, Chip } from "@mui/material"
import clsx from "clsx"

const NestedChip = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string
  amount: string
  currencyCode: string
  position?: "bottom" | "center"
}) => {
  return (
    <div
      className={clsx("flex w-full @container/label", {
        " lg:px-20 lg:pb-[35%]": position === "center",
      })}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="flex-none rounded-full bg-blue-600 p-2 text-white"
          amount={amount}
          currencyCode={"USD"}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  )
}

export default NestedChip
