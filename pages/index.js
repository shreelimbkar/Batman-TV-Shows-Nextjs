import Link from 'next/link';
import Layout from '../comps/MyLayout';
import fetch from 'isomorphic-unfetch';

// const PostLink = (props) => (
//   <li>
//       <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//           <a>{props.title}</a>
//       </Link>
//   </li>
// )

const Index = (props) => (
  <Layout>
    {/* <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul> */}

    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => {
        return (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        )
      })}
    </ul>

  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')

  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
}

export default Index
