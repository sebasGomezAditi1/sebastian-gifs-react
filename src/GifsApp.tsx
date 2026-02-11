import { CustomHeader } from './shared/components/CustomHeader'
import { GifsSearch } from './shared/components/GifsSearch'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifContainer } from './gifs/components/GifContainer'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {
  const { previousTerms, gifs, handleTermClick, handleSearch } = useGifs();
  return (
    <>
        <CustomHeader title='Mis Gifs' description='Aplicacion de gifs para practicar React' />
        <GifsSearch placeholder='Buscar Gifs' onQuery={handleSearch} />
        <PreviousSearches searches={previousTerms} onSearchResultClick={handleTermClick} />
        <GifContainer gifs={gifs} />
    </>
  )
}
