import Loading from '@/components/Loading'
import Error from '@/components/Error'

const Skills = () => ({
  component: import('./Skills'),
  loading: Loading,
  error: Error,
  delay: 200,
  timeout: 3000
})

export default Skills
