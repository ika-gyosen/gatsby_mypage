import React from "react";

export default class InfoPage extends React.Component {
  render() {
    const mbody = this.props.data.mbody.html;
    return (
      <Layout>
        <div
          dangerouslySetInnerHTML={{
            __html: mbody,
          }}
        ></div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    mbody: markdownRemark(frontmatter: { title: { eq: "f446clockmemo" } }) {
      html
    }
  }
`;
