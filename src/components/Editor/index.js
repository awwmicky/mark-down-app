import React, { useContext } from 'react'
import './Editor.css'
import '../component.css'
import EditorContext from '../../assets/EditorContext.js';



export default function Editor () {

  const { setMdText } = useContext(EditorContext);

  const handleValue = ({target}) => setMdText(target.value);

  return (
    <div className="md-container md-editor">
      <h2 className="md-title">
        <span>Markdown Text</span>
      </h2>
      <textarea 
        name="editor"
        className="md-text"
        spellCheck="false"
        placeholder="# Hello World"
        onChange={ handleValue }
      ></textarea>
    </div>
  );
}