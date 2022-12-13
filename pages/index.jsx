
import toast from 'react-hot-toast'
import React from 'react'
export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('Hello Toast!')}>Toast Me</button>
    </div>
  )
}
