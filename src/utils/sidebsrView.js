// let  SidebarView = {
//     home:{'create':true,'delete':true,'edit':true},
//     trailer:{'create':true,'delete':true,'edit':true},
//     truck:{'create':true,'delete':true,'edit':true}
// };
import Generic from '../view/generic';
import Button from '../component/Button';
import Dropdown from '../component/Dropdown';
import Pagination from '../component/Pagination';
import Uploader from '../component/Uploader';
import Modal from '../component/Modal';
import Carousel from '../component/Carousel';
import Input from '../component/Input';
import Steps from '../component/Steps';
import Checkbox from '../component/Checkbox';
import Form from '../component/Form';
import Switch from '../component/Switch';
import Rate from '../component/Rate';
import Card from '../component/Card';
import Collapse from '../component/Collapse';
import Table from '../component/Table';
import Tooltip from '../component/Tooltip';
import Progress from '../component/Progress';
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
    Component: Input,
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
    id: 27,
    path: '/Modal',
    name: 'Modal',
    Component: Modal,
    child: [],
  },
  {
    id: 4,
    path: '/Steps',
    name: 'Steps',
    child: [],
    Component: Steps,
  },
  {
    id: 4,
    path: '/Carousel',
    name: 'Carousel',
    child: [],
    Component: Carousel,
  },
  {
    id: 6,
    path: '/Checkbox',
    name: 'Checkbox',
    child: [],
    Component: Checkbox,
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
    Component: Form,
  },

  {
    id: 11,
    path: '/Rate',
    name: 'Rate',
    child: [],
    Component: Rate,
  },

  {
    id: 13,
    path: '/Switch',
    name: 'Switch',
    child: [],
    Component: Switch,
  },

  {
    id: 15,
    path: '/Upload',
    name: 'Image Uploader',
    child: [],
    Component: Uploader,
  },

  {
    id: 17,
    path: '/Card',
    name: 'Card',
    child: [],
    Component: Card,
  },
  {
    id: 18,
    path: '/Collapse',
    name: 'Collapse',
    child: [],
    Component: Collapse,
  },

  {
    id: 21,
    path: '/Table',
    name: 'Table',
    child: [],
    Component: Table,
  },
  {
    id: 22,
    path: '/Tooltip',
    name: 'Tooltip',
    Component: Tooltip,
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
    Component: Progress,
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
