import React from "react";
import { graphql } from "gatsby";

export default class IndexPage extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site;
    const buildTime = this.props.data.siteBuildMetadata.buildTime;
    const md = this.props.data.mdbody.edges[0].node.body.childMarkdownRemark;
    console.log(md);
    return (
      <div>
        <h1>{siteMetadata.title}</h1>
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
    mdbody: allContentfulBlogPost {
      edges {
        node {
          body {
            childMarkdownRemark {
              html
            }
          }
          title
          updatedAt
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
