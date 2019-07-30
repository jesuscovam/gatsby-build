import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: "purple" }}>
    <Link to="/">Home</Link>
    <Header headertext="Contact" />
    <p>Send us a message!</p>
    <input type="text" />
  </div>
)
