import React, { useState } from 'react'
import './assets/CSS/App.css'
import Editor from './components/Editor/'
import Preview from './components/Preview/'
import EditorContext from './assets/EditorContext.js'

export default () => {
  
  const [ mdText,setMdText ] = useState("");
  
  const contextValue = { mdText,setMdText };

  return (
    <>
      <EditorContext.Provider value={ contextValue }>
        <header className="App">
          <h1>Markdown App</h1>
        </header>
        <main>
          <Editor />
          <Preview />
        </main>
      </EditorContext.Provider>
    </>
  );
};