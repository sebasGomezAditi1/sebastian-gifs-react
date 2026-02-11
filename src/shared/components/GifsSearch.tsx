import { useEffect, useState, type KeyboardEvent } from 'react'

interface GifSearchProps {
    placeholder: string;
    onQuery: (query: string) => void
}

export const GifsSearch = ({ placeholder = 'Buscar...', onQuery }: GifSearchProps) => {
    const [query, setQuery] = useState('')
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            onQuery(query)
        }, 500);
        return () => clearTimeout(timeoutId)
    }, [query, onQuery])
    const handleSearch = () => {
    }
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
  return (
    <div className="search-container">
        <input value={query} onChange={(event) => setQuery(event.target.value)}  type="text" placeholder={placeholder} onKeyDown={handleKeyDown}/>
        <button onClick = {handleSearch}>Buscar</button>
    </div>
  )
}
