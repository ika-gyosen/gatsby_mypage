import React from "react";
import { Link } from "gatsby";
import Layout from "../components/header";

export default class Blogposts extends React.Component {
  render() {
    console.log(this.props.data.allContentfulBlogPost.edges);
    return (
      <Layout>
        <ul>
          {this.props.data.allContentfulBlogPost.edges.map(({ node }) => {
            return (
              <li>
                <Link to={`/blogpost/${node.slug}`}>{node.title}</Link>
                {"  "} <ShowDate datevalue={node.createdAt} />
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

export const PageQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          createdAt
          slug
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
