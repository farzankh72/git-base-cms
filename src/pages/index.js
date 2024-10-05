import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <ul>
        {
          data?.fileInformation?.edges?.map(item =>
            <li key={item.node.id}>
              {item.node.id}
            </li>
          )
        }
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    fileInformation: allFile {
      edges {
        node {
          id
          base
          prettySize
        }
      }
    }
  }
`
