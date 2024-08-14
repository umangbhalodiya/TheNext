'use client'
import { AppDispatch } from '@/store'
import { setArticleStates } from '@/store/ApiSlice/articleSlice'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="flex flex-col items-center justify-between pt-8">
      <h1 className="text-3xl">Home</h1>
      <h3 className="text-xl mt-2">
        Go to{' '}
        <Link
          href="/ai-audit"
          className="text-[#007AFF] underline hover:decoration-wavy"
        >
          AI Audit
        </Link>{' '}
        page to get started.
        <button
          onClick={() => {
            dispatch(
              setArticleStates({ total: 5, articles: [{ name: 'helo' }] })
            )
          }}
        ></button>
      </h3>
    </div>
  )
}
