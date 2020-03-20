import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import tonyImage from "../images/tony.jpeg"
import danyImage from "../images/dany.jpg"
import natashaImage from "../images/natasha.png"
import { Card, CardText, CardBody, CardTitle, Button, Row } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const images = [tonyImage, natashaImage, danyImage]
var imageNum = 0

const AuthorsPage = () => (
  <Layout pageTitle="Our Authors">
    <SEO title="Our Authors" keywords={[`gatsby`, `application`, `react`]} />
    {authors.map(({ name, bio }) => (
      <Row className="mb-4">
        <div className="col-md-3">
          <img
            src={images[imageNum++]}
            alt={`${name} profile`}
            style={{ maxWidth: "100%", minHeight: "100%" }}
          />
        </div>
        <div className="col-md-8">
          <Card style={{ minHeight: "100%" }}>
            <CardBody>
              <CardTitle
                className="text-uppercase"
                style={{ fontSize: "1.3rem" }}
              >
                {name}
              </CardTitle>
              <CardText>{bio}</CardText>
              <Button
                color="primary"
                className="text-uppercase"
                href={`/author/${slugify(name)}`}
              >
                View Posts
              </Button>
            </CardBody>
          </Card>
        </div>
        {imageNum === 3 ? (imageNum = 0) : ""}
      </Row>
    ))}
  </Layout>
)

export default AuthorsPage
