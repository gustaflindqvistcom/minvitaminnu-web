import * as React from 'react'
import { graphql } from 'gatsby'


const post = ({ data }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mx-auto bg-indigo-200 text-center">
      <h1>Rubrik</h1>
      {/* <p>{data.site.siteMetadata.description}</p> */}
      <button onClick={increment}>Räkna upp</button>
      <p className="font-weight-400 text-center">{count}</p>
    </div>
  );
}

// export const query = graphql`
//    query MetaDataQuery {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `

export default post;