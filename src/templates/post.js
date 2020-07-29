import React from 'react'
import {  graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query ($id: ID!) {
        wordpress {
            post(id: $id) {
                title
                content
                featuredImage {
                    node {
                      altText
                      id
                      sourceUrl
                      uri
                      title
                    }
                }
            }
        }
    }
`

const PostTemplate = ({ data })=> {
    const post = data.wordpress.post
    console.log(data)
    return <>
        <Layout>
            <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
            <div dangerouslySetInnerHTML={{__html: post.content}}/>
        </Layout>
    </>
}

export default PostTemplate