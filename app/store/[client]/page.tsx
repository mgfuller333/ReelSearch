// app/page.tsx
import { redirect } from "next/navigation"

type Params = {
  client: string
}

export default async function HomePage({ params }: { params: Params }) {
  redirect(`/store/${params.client}/Clothes`)
}
