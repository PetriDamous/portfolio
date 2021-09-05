import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../../components/Layout"

export default function index({ data }) {
  const projectsArray = data.projects.nodes

  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <h1>Project section</h1>
      {projectsArray.map(project => {
        const { frontmatter } = project
        return (
          <div key={project.id}>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.stack}</p>
            <Link to={`/projects/${frontmatter.slug}`}>Project Details</Link>
          </div>
        )
      })}
      <p>{contact}</p>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
