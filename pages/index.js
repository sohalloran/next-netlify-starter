import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter Project!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="My Starter Project" />
        <p className="description">
          Starter Project<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
