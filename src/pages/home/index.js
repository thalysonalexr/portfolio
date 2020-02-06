import Error from '../../components/Error'

const Home = () => ({
  component: import('./Home'),
  error: Error,
  timeout: 3000
})

export default Home
