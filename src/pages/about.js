import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <SEO title="About" />
    <br />
    <p>
      I am a <b>Computer Science undergrad</b> pursuing my B-Tech from{" "}
      <b>
        <a
          href="http://www.bitdurg.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bhilai Institute of Technology, Durg.
        </a>
      </b>
    </p>
    <p>
      I am a pretty fast learner and always intrested in new technologies. I put
      my efforts on learning the last trends on development and strive myself as
      a better developer. I think one of my ability is to resolve problems so
      from the beginning I've been focusing on solving algorithms no matter what
      language I use.
    </p>
  </Layout>
)

export default AboutPage
