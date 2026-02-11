import { type FC } from 'react'

interface PreviousSearchesProps {
    searches: string[];
    onSearchResultClick: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({ searches, onSearchResultClick }) => {
  return (
    <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
            {
                searches.map((search: string) => (
                    <li onClick={() => onSearchResultClick(search)} key = {search}>{search}</li>
                ))
            }
        </ul>
    </div>
  )
}
