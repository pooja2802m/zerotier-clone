import Layout from "@/components/layout"
import '../public/globals.css'


export default function App({ Component, pageProps }) {
    return (
      <Layout>
      <Component {...pageProps} />
      </Layout>
    )
  }