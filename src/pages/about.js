import React from "react"
import Layout from "../components/Layout"
import aboutStyle from "./About.module.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.

        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = props => {
  console.log(query)
  return (
    <Layout>
      <h2>Hello , my name is Andreas</h2>

      <div className={aboutStyle.main}>
        <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}>
            {" "}
            <Img
              className={aboutStyle.img}
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
          <div className={aboutStyle.texto}>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-map-marker-alt fa-sm"></i>
              <p>Oer-Erkenschwick, Germany</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-graduation-cap fa-sm"></i>
              <p>APOLLON University of Health Management</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-code fa-sm"></i>
              <p>HTML, JS, CSS, React</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-language fa-sm"></i>
              <p>German, English</p>
            </div>
          </div>
        </div>
        <div className={aboutStyle.derecha}>
          <p>
            Hello, I'm Andreas. I'm a Front-end Developer from the Ruhr-area,
            Germany. I like to create websites with HTML, CSS and Javascript.
          </p>
          <p></p>
          <p>More about me soon...</p>

          <div className={aboutStyle.logoContainer}>
            <p>Some of the tech I like:</p>
            <img
              alt="javascript"
              className={aboutStyle.logo}
              src="./logos/javascript.svg"
            />
            <img
              alt="Gatsby"
              className={aboutStyle.logo}
              src="./logos/gatsby.svg"
            />

            <img
              alt="React"
              className={aboutStyle.logo}
              src="./logos/react.svg"
            />
            <img
              alt="Sass"
              className={aboutStyle.logo}
              src="./logos/sass-1.svg"
            />
          </div>

          <div className={aboutStyle.socialContainer}>
            <p>Send me a message!</p>
            <a
              className={aboutStyle.social}
              href="https://www.linkedin.com/in/andreas-schwarz-76a4b81b2"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="https://github.com/Schwarzbaer2"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="https://twitter.com/Schwarzbaerchen"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
