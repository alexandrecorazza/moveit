import { GetServerSideProps } from 'next'
import { useEffect } from "react"
import { useRouter } from 'next/router'
import axios from 'axios'

interface Token {
  accessToken: String
}

export default function Redirecting(props: Token) {
  const router = useRouter()

  useEffect(() => {
    router.push(`/homePage/access_token=${props.accessToken}`)
  }, [])

  return (
    <h1>Redirecting...</h1>
  )
} 

export const getServerSideProps: GetServerSideProps = async (req) => {

  const clientID = '7f49889ccabaa9274d88'
  const clientSecret = 'e520addce1e7e812a0b4622f473f37859e4ed084'
  
  const { query } = req

  const requestToken = query.code

  const response = await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,

    headers: {
      accept: 'application/json'
    }
  })

  const accessToken = response.data.access_token

  return {
    props: {
      accessToken: String(accessToken)
    }
  }
}