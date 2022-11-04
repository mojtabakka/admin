import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
// import * as IoIcons from 'react-icons/io'
const items = [
    {
      name: 'home',
      label: "Home",
      icon:<AiIcons.AiFillHome/>,
      items: [
        {
          name: 'statements',
          label: 'Statements',
          icon:<AiIcons.AiOutlineComment/>
        },
        {
          name: 'reports',
          label: 'Reports',
          icon: <MdIcons.MdReport/>,
          items: [
            {
              name: 'statements',
              label: 'Statements',
              icon:<AiIcons.AiOutlineComment/>
            },
            {
              name: 'reports',
              label: 'Reports',
              icon: <MdIcons.MdReport/>,
            },
          ],
        },
      ],
    },

    {
      name: 'setting',
      label: "Setting",
      icon:<AiIcons.AiOutlineSetting/>,
    },
    {
      name: 'billing',
      label: "Billing",
      icon:<MdIcons.MdOutlineAccountBalanceWallet/>
    },
    {
      name: 'home',
      label: "Home",
      icon:<RiIcons.RiBillLine/>
    },
    {
      name: 'home',
      label: "Home",
      icon:<RiIcons.RiBillLine/>,
      items: [
        {
          name: 'statements',
          label: 'Statements',
          icon:<RiIcons.RiBillLine/>
        },
        {
          name: 'reports',
          label: 'Reports',
          icon:<RiIcons.RiBillLine/>,
        },
      ],
    },
  ]

  const colors = [
    { backgroundColor: 'white', color: "blue" },
    { backgroundColor: '#08A45C', color: "white" },
    { backgroundColor: 'red', color: "white" },
    { backgroundColor: 'purple', color: "blue" },
    { backgroundColor: 'gray', color: "black" },
    { backgroundColor: 'gray', color: "black" }
]

  export {colors,items}