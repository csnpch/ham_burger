import { useMediaQuery } from 'react-responsive';

export const media_3xl = () => useMediaQuery({ query: '(max-width: 2100px)' })
export const media_2xl = () => useMediaQuery({ query: '(max-width: 1536px)' })
export const media_lg = () => useMediaQuery({ query: '(max-width: 1024px)' })
export const media_md = () => useMediaQuery({ query: '(max-width: 768px)' })
