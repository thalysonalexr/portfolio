import Loading from '@/components/Loading'
import Error from '@/components/Error'

const Projects = () => ({
  component: import('./Projects'),
  loading: Loading,
  error: Error,
  delay: 200,
  timeout: 3000
})

export default Projects
