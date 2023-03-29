import React from 'react'
import { graphql } from 'gatsby'

const PesmaTemplate = ({ data }) => {


    const { naslov, datum, pesma1, gdeJeObjavljena } = data.contentfulPesme

    return (
        <>
            <h1>{naslov}</h1>
            <h6>{datum}</h6>
            <h5>{gdeJeObjavljena}</h5>

            <div
              className="body"
              dangerouslySetInnerHTML={{
                __html: pesma1.childMarkdownRemark.html,
              }}
            />

        </>
    )
}

export const query = graphql`
  query ($naslov: String) {
    contentfulPesme(naslov: {eq: $naslov}) {
      naslov
      datum(formatString: "D.M.YYYY.")
        gdeJeObjavljena
      pesma1 {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PesmaTemplate