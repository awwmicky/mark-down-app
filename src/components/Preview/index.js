import React, { useContext } from 'react'
import './Preview.css'
import '../component.css'
import ReactMarkdown from 'react-markdown'
import EditorContext from '../../assets/EditorContext.js';



export default function Preview () {

  const { mdText } = useContext(EditorContext)

  return (
    <div className="md-container md-preview">
      <h2 className="md-title">
        <span>Markdown Preview</span>
      </h2>
      <div name="preview" className="md-text">
        <ReactMarkdown source={ mdText } />
      </div>
    </div>
  );
}