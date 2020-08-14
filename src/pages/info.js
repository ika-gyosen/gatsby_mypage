import React from "react";

export default class IndexPage extends React.Component {
  render() {
    const mbody = this.props.data.mbody.html;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: mbody,
        }}
      ></div>
    );
  }
}

export const query = graphql`
  query {
    mbody: markdownRemark(frontmatter: { title: { eq: "info" } }) {
      html
    }
  }
`;
