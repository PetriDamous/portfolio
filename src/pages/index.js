import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>

      <section>
        <h2>About</h2>
        <Link to="/about">Read More</Link>
      </section>

      <section>
        <h2>Skills</h2>
      </section>

      <section>
        <h2>Projects</h2>
        <Link to="/projects">View More</Link>
      </section>

      <section>
        <h2>Coding Challenges</h2>
        <Link to="/codingChallenges">View More</Link>
      </section>
    </Layout>
  )
}
