import React from "react"
import HeaderWrapper from "./src/components/headerWrapper"

export const wrapPageElement = ({ element, props }) => (
  <HeaderWrapper {...props}>{element}</HeaderWrapper>
)
