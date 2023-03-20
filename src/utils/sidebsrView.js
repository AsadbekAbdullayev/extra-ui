// let  SidebarView = {
//     home:{'create':true,'delete':true,'edit':true},
//     trailer:{'create':true,'delete':true,'edit':true},
//     truck:{'create':true,'delete':true,'edit':true}
// };

import Button from '../component/Button';
import Dropdown from '../component/Dropdown';
import Pagination from '../component/Pagination';
import Uploader from '../component/Uploader';
import Generic from '../view/generic';
export const SidebarData = [
  {
    id: 1,
    path: '/Button',
    name: 'Button',
    child: [],

    Component: Button,
  },
  {
    id: 9,
    path: '/Input',
    name: 'Input',
    child: [],
    Component: Button,
  },
  {
    id: 2,
    path: '/Dropdown',
    name: 'Dropdown',
    Component: Dropdown,

    child: [],
  },

  {
    id: 51,
    path: '/Pagination',
    name: 'Pagination',
    child: [],
    Component: Pagination,
  },
  {
    id: 4,
    path: '/Steps',
    name: 'Steps',
    child: [],
    Component: Generic,
  },
  {
    id: 6,
    path: '/Checkbox',
    name: 'Checkbox',
    child: [],
    Component: Generic,
  },
  {
    id: 7,
    path: '/DatePicker',
    name: 'DatePicker',
    child: [],
    Component: Generic,
  },
  {
    id: 8,
    path: '/Form',
    name: 'Form',
    child: [],
    Component: Generic,
  },

  {
    id: 10,
    path: '/Radio',
    name: 'Radio',
    child: [],
    Component: Generic,
  },
  {
    id: 11,
    path: '/Rate',
    name: 'Rate',
    child: [],
    Component: Generic,
  },
  {
    id: 12,
    path: '/Select',
    name: 'Select',
    child: [],
    Component: Generic,
  },
  {
    id: 13,
    path: '/Switch',
    name: 'Switch',
    child: [],
    Component: Generic,
  },

  {
    id: 15,
    path: '/Upload',
    name: 'Upload',
    child: [],
    Component: Uploader,
  },
  {
    id: 16,
    path: '/Badge',
    name: 'Badge',
    child: [],
    Component: Generic,
  },
  {
    id: 17,
    path: '/Card',
    name: 'Card',
    child: [],
    Component: Generic,
  },
  {
    id: 18,
    path: '/Collapse',
    name: 'Collapse',
    child: [],
    Component: Generic,
  },
  {
    id: 19,
    path: '/Popover',
    name: 'Popover',
    child: [],
    Component: Generic,
  },
  {
    id: 20,
    path: '/Segmented',
    name: 'Segmented',
    child: [],
    Component: Generic,
  },
  {
    id: 21,
    path: '/Table',
    name: 'Table',
    child: [],
    Component: Generic,
  },
  {
    id: 22,
    path: '/Tooltip',
    name: 'Tooltip',
    Component: Generic,
    child: [],
  },
  {
    id: 23,
    path: '/Alert',
    name: 'Alert',
    Component: Generic,
    child: [],
  },
  {
    id: 24,
    path: '/Message',
    name: 'Message',
    Component: Generic,
    child: [],
  },
  {
    id: 25,
    path: '/Notification',
    name: 'Notification',
    Component: Generic,
    child: [],
  },
  {
    id: 26,
    path: '/Progress',
    name: 'Progress',
    Component: Generic,
    child: [],
  },
  {
    id: 27,
    path: '/Modal',
    name: 'Modal',
    Component: Generic,
    child: [],
  },
  {
    path: '/docs',
    Component: Generic,
    name: 'Docs',
    hidden: true,
    children: [],
  },
  {
    path: '/Components',
    Component: Generic,
    name: 'Components',
    hidden: true,
    children: [],
  },
  {
    path: '/Resources',
    Component: Generic,
    name: 'Resources',
    hidden: true,
    children: [],
  },
  {
    path: '/Docs',
    Component: Generic,
    name: 'Docs',
    hidden: true,
    children: [],
  },

  {
    path: '/Blog',
    Component: Generic,
    name: 'Blog',
    hidden: true,
    children: [],
  },
];
