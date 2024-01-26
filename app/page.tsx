'use client'

import { useDispatch } from '@/lib/redux'
import { searchSlice } from '@/lib/redux/slices/searchSlice'
import { useState } from 'react'

export default function IndexPage() {
  const [searchString, setSearchString] = useState('')
  const dispatch = useDispatch()

  return (
    <div className='bg-white dark:bg-zinc-800 m-8 p-4 rounded-sm'>
      <h1>Your Personal Sound Mixer</h1>
      <div>
        <h2>Search for something...</h2>
        <form
          onSubmit={async e => {
            e.preventDefault()
            const data = await fetch('/api/search?q=' + searchString).then(r =>
              r.json()
            )
            dispatch(searchSlice.actions.setSearchResults(data))
          }}
        >
          <input
            type='search'
            required
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Redux Toolkit'
}
