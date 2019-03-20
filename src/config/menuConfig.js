
const menuList = [
    {
        title:'Home',
        key:'/admin/home'
    },
    {
        title:'UI',
        key:'/admin/ui',
        children:[
            {
                title:'Buttons',
                key:'/admin/ui/buttons',
            },
            {
                title:'Modals',
                key:'/admin/ui/modals',
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings',
            },
            {
                title:'Notifications',
                key:'/admin/ui/notifications',
            },
            {
                title:'Global Message',
                key:'/admin/ui/messages',
            },
            {
                title:'Tabs',
                key:'/admin/ui/tabs',
            },
            {
                title:'Gallery',
                key:'/admin/ui/gallery',
            },
            {
                title:'Carousel',
                key:'/admin/ui/carousel',
            }
        ]
    },
    {
        title:'User',
        key:'/admin/form',
        children:[
            {
                title:'Log In',
                key:'/admin/form/login',
            },
            {
                title:'Register',
                key:'/admin/form/register',
            }
        ]
    },
    {
        title:'Tables',
        key:'/admin/table',
        children:[
            {
                title:'Basic Tables',
                key:'/admin/table/basic',
            },
            {
                title:'Advanced Tables',
                key:'/admin/table/high',
            }
        ]
    },
    {
        title:'Text',
        key:'/rich'
    },
    {
        title:'City Management',
        key:'/admin/city'
    },
    {
        title:'Order',
        key:'/admin/order',
        btnList:[
            {
                title:'订单详情',
                key:'/order/detail'
            },
            {
                title:'结束订单',
                key:'/order/finish'
            }
        ]
    },
    {
        title:'Personnel',
        key:'/user'
    },
    {
        title:'Bikes Map',
        key:'/bikeMap'
    },
    {
        title:'Charts',
        key:'/charts',
        children:[
            {
                title:'Bar Chart',
                key:'/charts/bar'
            },
            {
                title:'Pie Chart',
                key:'/charts/pie'
            },
            {
                title:'Line Chart',
                key:'/charts/line'
            },
        ]
    },
    {
        title:'Permission Control',
        key:'/permission'
    },
];
export default menuList;