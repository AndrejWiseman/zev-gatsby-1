import * as React from "react"
import Layout from "../components/Layout"
import ListaPesama from '../components/ListaPesama'

export default function Home() {
  return (
      <Layout>
        <h1>Neki stihovi</h1>

        <ListaPesama />

      </Layout>
  )
}
