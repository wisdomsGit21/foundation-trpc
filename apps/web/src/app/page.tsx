'use client'
import { trpcClient } from '@foundation-trpc/trpc-client/src/client'

export default function Home() {
  const { data } = trpcClient.auth.users.useQuery()
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      hi odogwu
      {JSON.stringify(data, null, 0)}
    </div>
  )
}
