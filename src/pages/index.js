import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/SEO";
import Layout from "../components/header";

export default class IndexPage extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site;
    const buildTime = this.props.data.siteBuildMetadata.buildTime;
    return (
      <Layout>
        <SEO />
        <Img fixed={this.props.data.file.childImageSharp.fixed} />
        <div>
          <Link to={`/info/`}>info</Link>{" "}
          <Link to={`/blogpost/`}>活動記録</Link>{" "}
          <Link to={`/reports/`}>レポート</Link>
        </div>
        <p>
          build :
          <ShowDate datevalue={buildTime} />
        </p>
      </Layout>
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
