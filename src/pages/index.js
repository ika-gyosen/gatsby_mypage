import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default class IndexPage extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site;
    const buildTime = this.props.data.siteBuildMetadata.buildTime;
    return (
      <div>
        <h1>{siteMetadata.title}</h1>
        <Img fixed={this.props.data.file.childImageSharp.fixed} />

        <p>
          build :
          <ShowDate datevalue={buildTime} />
        </p>
      </div>
    );
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    siteBuildMetadata {
      buildTime
    }
    file(relativePath: { eq: "top_1.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

function ShowDate(props) {
  const dateTime = new Date(Date.parse(props.datevalue));
  const weekTable = ["月", "火", "水", "木", "金", "土", "日"];
  return (
    <span>
      {dateTime.getFullYear()}年{dateTime.getMonth()}月{dateTime.getDate()}日
      {" ("}
      {weekTable[dateTime.getDay()]}
      {") "} {dateTime.getHours()}:{dateTime.getMinutes()}:
      {dateTime.getSeconds()}
    </span>
  );
}
