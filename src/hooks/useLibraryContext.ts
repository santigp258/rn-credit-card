import { useContext } from 'react'
import LibraryContext from '../LibraryContext'

export const useLibraryContext = () => {
  const libraryContext = useContext(LibraryContext)

  if (!libraryContext) {
    throw new Error(
      'useLibraryContext hook must be used with LibraryContext provider',
    )
  }

  return libraryContext
}
