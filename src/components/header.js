import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-background-image'
import './background-image.css'

const Header = () => {
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
    <Img
      className="forhead"
      fluid={data.placeholderImage.childImageSharp.fluid}
      fadeIn
    >
      <div className="black-overlay">
        <div className="content-box">Text Goes Here</div>
      </div>
    </Img>
  )
}

export default Header
