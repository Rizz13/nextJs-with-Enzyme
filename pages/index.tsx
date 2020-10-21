import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    title: string
    id: string
  }[]
}) {
  return (
    <>
      <Head>
        <title>Sample Page</title>
      </Head>
      
      <section className="icon-stars">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like...)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, title }) => (
            <li key={id}>
              <Link href="#">
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = [{id: 0, title:"Sample1"}, {id: 1, title:"Sample2"}]
  return {
    props: {
      allPostsData
    }
  }
}