import { useState, useRef } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"

export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClick = async ( term: string ) => {
        if (!term) return

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs)
        gifsCache.current[term] = gifs
    }

    const handleSearch = async (query: string) => {
        if (!query) return
        const trimmedTerm = query.trim().toLowerCase();
        if (previousTerms.includes(trimmedTerm)) return
        setPreviousTerms([trimmedTerm, ...previousTerms].splice(0,8))
        const gifs = await getGifsByQuery(trimmedTerm);
        setGifs(gifs);

        gifsCache.current[query] = gifs
        console.log({gifsCache});
  }
  return {
    previousTerms,
    gifs,
    handleTermClick,
    handleSearch
  }
}
