import Error from '../../components/Error'

const Projects = () => ({
  component: import('./Projects'),
  error: Error,
  timeout: 3000
})

export default Projects
