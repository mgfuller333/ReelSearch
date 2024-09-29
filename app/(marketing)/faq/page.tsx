import Image from "next/image"
import Link from "next/link"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionActions from "@mui/material/AccordionActions"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Divider from "@mui/material/Divider"

import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import VideoCard from "../components/videoCard"

export const metadata = {
  title: "faq",
}

export default async function FAQPage() {
  return (
    <section className="container flex flex-col  gap-6 py-4 md:max-w-[64rem] md:py-12 lg:py-12">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <div className="flex flex-col items-center gap-6">
          <b className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-6xl">
            Frequently Asked Questions
          </b>
        </div>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6">What is reelSearch?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Reel Search is a product catalogue that integrates social media to
            engage customers
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h6">How Does reelSearch Work?</Typography>
          </AccordionSummary>
          <AccordionDetails>Insert Tutorial Here</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h6">Does reelSearch Work Globally?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Yes, reelSearch operates globally, and wherever it operates, we
            display revenue in local currencies to ensure convenience and
            accessibility for our users
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h6">
              How Do I Get The Most Out Of reelSearch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </div>
    </section>
  )
}
