# Markdown App

Markdown App is a utility, using the markdown syntax to convert from input text to output preview.

[Live Preview](https://the-markdown-app.appspot.com/) |
[Source Code](./src)

## Installation
To install this project, follow these steps:

1. **`git clone [ HTTPS/SSH ]`**
    - HTTPS: `https://github.com/awwmicky/markdown-app.git`
    - SSH: `git@github.com:awwmicky/markdown-app.git`
2. **`npm install`**
3. **`npm run dev`**

## Technologies

_Tools_: HTML - CSS - JavaScript - React - Markdown

_Deploy_: Google Cloud Platform

## Workflow / Process

- used npm react-markdown 
    - it converts the textarea input and parses it to the DOM
- used React Context 
    - to distribute the parent component states value
        - store them as `markdownText` & `setMarkdownText`
        - `markdownText` will get the text that needs to be transpiled
            - passed to the `Preview` comp.
        - `setMarkdownText` will update the state by the input value
            - passed to the `Editor` comp.
- passed through Provider
    - children comp. nested inside the `Provider` comp. will have access to the parent state values
    - to pass the parent state (context value) as `Provider` props
    - less explicit, more implicit passing values
        - `useContext` hook to access the context value
        - an alternative to passing props, reducing any prop drilling
- user goal
    - whenever the user adds text into the left panel (markdown editor) 
    - there should be immediate change onto the right panel (markdown preview)
        - convert input text to markdown
        - update the state, frequently