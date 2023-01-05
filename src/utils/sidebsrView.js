// let  SidebarView = {
//     home:{'create':true,'delete':true,'edit':true},
//     trailer:{'create':true,'delete':true,'edit':true},
//     truck:{'create':true,'delete':true,'edit':true}
// };  


import Button from '../component/Button';
import Generic from '../view/generic';
export const SidebarData = [
    {
      id:1,
      path:'/Button',
      name:'Button',
      child:[],
      
      component: Button,
    },
    {
      id:2,
      path:'/Dropdown',
      name:'Dropdown',
      child:[
        
      ],
    },
    {
      id:3,
      path:'/Menu',
      name:'Menu',
      child:[],
      component: Button,

    },
    {
      id:51,
      path:'/Pagination',
      name:'Pagination',
      child:[
       
      ],
      component: Button,

    },
    {
      id:4,
      path:'/Steps',
      name:'Steps',
      child:[],
      component: Button,
    },
    {
      id:5,
      path:'/AutoComplete',
      name:'AutoComplete',
      child:[],
      component: Button,
    },
    {
      id:6,
      path:'/Checkbox',
      name:'Checkbox',
      child:[],
      component: Button,
    },
    {
      id:7,
      path:'/DatePicker',
      name:'DatePicker',
      child:[],
      component: Button,
    },
    {
      id:8,
      path:'/Form',
      name:'Form',
      child:[],
      component: Button,
    },
    {
      id:9,
      path:'/Input',
      name:'Input',
      child:[],
      component: Button,
    },
    {
      id:10,
      path:'/Radio',
      name:'Radio',
      child:[],
      component: Button,
    },
    {
      id:11,
      path:'/Rate',
      name:'Rate',
      child:[],
      component: Button,
    },
    {
      id:12,
      path:'/Select',
      name:'Select',
      child:[],
      component: Button,
    },
    {
      id:13,
      path:'/Switch',
      name:'Switch',
      child:[],
      component: Button,
    },
    {
      id:14,
      path:'/Transfer',
      name:'Transfer',
      child:[],
    },
    {
      id:15,
      path:'/Upload',
      name:'Upload',
      child:[],
      component: Button,
    },
    {
      id:16,
      path:'/Badge',
      name:'Badge',
      child:[],
      component: Button,
    },
    {
      id:17,
      path:'/Card',
      name:'Card',
      child:[],
      component: Button,
    },
    {
      id:18,
      path:'/Collapse',
      name:'Collapse',
      child:[],
      component: Button,
    },
    {
      id:19,
      path:'/Popover',
      name:'Popover',
      child:[],
      component: Button,
    },
    {
      id:20,
      path:'/Segmented',
      name:'Segmented',
      child:[],
      component: Button,
    },
    {
      id:21,
      path:'/Table',
      name:'Table',
      child:[],
      component: Button,
    },
    {
      id:22,
      path:'/Tooltip',
      name:'Tooltip',
      component: Button,
      child:[],
    },
    {
      id:23,
      path:'/Alert',
      name:'Alert',
      component: Button,
      child:[],
    },
    {
      id:24,
      path:'/Message',
      name:'Message',
      component: Button,
      child:[],
    },
    {
      id:25,
      path:'/Notification',
      name:'Notification',
      component: Button,
      child:[],
    },
    {
      id:26,
      path:'/Progress',
      name:'Progress',
      component: Button,
      child:[],
    },
    {
      id:27,
      path:'/Modal',
      name:'Modal',
      component: Button,
      child:[],
    },
    {
      path: "/docs",
      component: Generic,
      name: "Docs",
      hidden: true,
      children: [],
  },
  {
      path: "/Components",
      component: Generic,
      name: "Components",
      hidden: true,
      children: [],
  },
  {
      path: "/Resources",
      component: Generic,
      name: "Resources",
      hidden: true,
      children: [],
  },
  {
      path: "/Docs",
      component: Generic,
      name: "Docs",
      hidden: true,
      children: [],
  },

  {
    path: "/Blog",
    component: Generic,
    name: "Blog",
    hidden: true,
    children: [],
},
  ];