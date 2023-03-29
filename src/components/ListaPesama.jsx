import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'
import slugify from 'slugify'

import '../assets/css/lista-pesama.scss'


const query = graphql`
  query {
    allContentfulPesme {
      nodes {
        naslov
        id
        pesma1 {
            pesma1
        }
      }
    }
  }
`


const ListaPesama = () => {

    const data = useStaticQuery(query)

    const pesme = data.allContentfulPesme.nodes



    return (

        <>
          <h2>Lista pesama</h2>

            {pesme.map(pesma => {
                const { naslov, id } = pesma
                const slug = slugify(naslov, {lower:true})

                return (
                    <Link key={id} to={`/${slug}`}>{pesma.naslov}</Link>
                )
            })}
        </>
    )
}


export default ListaPesama
