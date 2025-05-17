import { Head } from '@inertiajs/react'
// import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function InertiaExample({ name }: { name: string }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

      <div>
        <Button>Example Button</Button>
      </div>
    </>
  )
}
