import * as React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  # query SiteSettings {
  #   site {
  #     siteMetadata {
  #       title,
  #       description
  #     }
  #   }
  # },
  query BlogPost($id: String!){
    blogPost: sanityPost(id: {eq: $id}){
      id
      title
      slug{current}
    }
  }
`


const BlogPostTemplateQuery = (props) => {
  const { data, errors } = props;
  const [count, setCount] = React.useState(0);
  const post = data && data.blogPost;

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mx-auto">
      {/* # <small>{data.site.siteMetadata.title}</small> */}
      <h1 className="text-7xl">{post.title}</h1>
      <h3>{post.slug.current}</h3>
      {/* <p>{data.site.siteMetadata.description}</p> */}
      <button onClick={increment}>Räkna upp</button>
      <p className="">{count}</p>
    </div>
  );
}

export default BlogPostTemplateQuery;