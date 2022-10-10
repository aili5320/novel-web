import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from'@/views/index'
import Login from'@/views/login'
import userRegister from '@/views/userRegister'
import Recharge from '@/views/recharge'
import AuthorLogin from '@/views/authorLogin'
import AuthorIndex from '@/views/authorIndex'
import AddBook from '@/components/author/addBook'
import EditBook from '@/components/author/editBook'

import BookInfo from '@/components/novel/bookInfo'
import Chapter from '@/components/novel/chapter'
import BookLists from '@/components/novel/bookLists'
import ContentsList from '@/components/novel/contentsList'


import AddChapter from '@/components/author/addChapter'
import Drafts from '@/components/author/drafts'
import UserSetting from '@/views/userSetting'
import AuthorRegister from '@/components/author/authorRegister'

import Fantasy from '@/components/novel/category/fantasy' //玄幻
import Martial from '@/components/novel/category/martial' //武侠
import Military from '@/components/novel/category/military' //军事
import Urban from '@/components/novel/category/urban' //都市
import Competitive from '@/components/novel/category/competitive' //同人
import Science from '@/components/novel/category/science' //科幻游戏
import Suspense from '@/components/novel/category/suspense' //同人
import Secondary from '@/components/novel/category/secondary' //二次元





Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    component:Index
  },
  {
    path: '/index',

    component:Index
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/userRegister',
    component:userRegister
  },
  {
    path:'/recharge',
    component:Recharge
  },
  {
    path:'/authorlogin',
    component:AuthorLogin
  },
  {
    path:'/authorindex',
    component:AuthorIndex
  },
  {
    path:'/addBook',
    component:AddBook
  },
  {
    path:'/editBook',
    component:EditBook
  },
  {
    path:'/bookInfo',
    component:BookInfo
  }
  ,{
    path:'/chapter',
    component:Chapter
  },{
    path:'/bookLists',
    component:BookLists
  }
  ,{
    path:'/contentsList',
    component:ContentsList
  }
  ,{
    path:'/addChapter',
    component:AddChapter
  }
  
  ,{
    path:'/drafts',
    component:Drafts
  },
  {
    path:'/userSetting',
    component:UserSetting
  }
  ,{
    path:'/fantasy',
    component:Fantasy
  }
  ,{
    path:'/martial',
    component:Martial
  }
  ,{
    path:'/military',
    component:Military 
  }
  ,{
    path:'/urban',
    component:Urban  
  }
  ,{
    path:'/competitive',
    component:Competitive  
  }
  ,{
    path:'/science',
    component:Science  
  }
  ,{
    path:'/Suspense',
    component:Suspense  
  }
  ,{
    path:'/secondary',
    component:Secondary  
  }
  ,{
    path:'/authorRegister',
    component:AuthorRegister  
  }
  
]

const router = new VueRouter({
  routes
})

export default router
