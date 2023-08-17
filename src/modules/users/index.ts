import { defineModule } from '@/utils'
import ListUsers from './routes/list-users.vue'

export default defineModule({
  id: 'users',
  name: 'users',
  routes: [
    {
      name: 'list-users',
      path: '',
      component: ListUsers
    }
  ]
})
