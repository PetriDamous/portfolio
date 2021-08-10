import React from "react"

import Header from "./Header"

function Layout({ children }) {
  return (
    <div>
      <Header />
      <>{children}</>

      <footer>
        <p>Built by PetriD</p>
      </footer>
    </div>
  )
}

export default Layout
