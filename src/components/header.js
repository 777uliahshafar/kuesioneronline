import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-background-image'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid}>
      <h2> Selamat Datang </h2>
    </Img>
  )
}

export default Image
