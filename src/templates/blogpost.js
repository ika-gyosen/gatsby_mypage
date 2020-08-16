import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

class BlogPostTemplate extends React.Component {
  render() {
    const title = this.props.pageContext.title;
    const prev = this.props.pageContext.prev;
    const next = this.props.pageContext.next;
    const md_body = this.props.pageContext.md_body;
    const updatedAt = this.props.data.contentfulBlogPost.updatedAt;
    const createdAt = this.props.data.contentfulBlogPost.createdAt;
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <p>
            <ShowDate datevalue={createdAt} />
          </p>
          <p>
            <ShowDate datevalue={updatedAt} />
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: md_body }}></div>
        <div>
          {prev !== 0 ? <Link to={`/blogpost/${prev}`}>prev</Link> : ""}
          <br />
          {next !== 0 ? <Link to={`/blogpost/${next}`}>next</Link> : ""}
        </div>
      </div>
    );
  }
}
export default BlogPostTemplate;

export const PageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      createdAt
      updatedAt
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
