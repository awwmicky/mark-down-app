import { createContext } from 'react'

const defaultContext = {
  markdownText: "",
  setMarkdownText () {}
};

export default createContext(defaultContext)