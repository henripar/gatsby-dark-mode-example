import React from "react"
import Header from "./header"

const HeaderWrapper = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

export default HeaderWrapper
