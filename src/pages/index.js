import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>
        {title} - {description}
      </p>

      <div style={{ width: "20em" }}>
        <StaticImage src="../images/banner.png" alt="Site banner" />
      </div>

      <section>
        <h2>About</h2>
        <Link to="/about">Read More</Link>
        <h2>Skills</h2>
        <Link to="/projects">View Projects</Link>
      </section>

      {/* <section>
        <h2>Coding Challenges</h2>
        <Link to="/codingChallenges">View More</Link>
      </section> */}
    </Layout>
  )
}

export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        copywrite
        description
        title
      }
    }
  }
`
