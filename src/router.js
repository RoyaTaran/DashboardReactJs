import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Users from './pages/users/Users'
import NewUser from './pages/NewUser/NewUser'
import MainProduct from './pages/MainProduct/MainProduct'
import CreateProduct from './pages/CreateProduct/CreateProduct'

let Routers = [
    {path:'/' , element:<Home />},
    {path:'/products' , element: <Products />},
    {path:'/product/:productId' , element: <MainProduct />},
    {path:'/users' , element:<Users />},
    {path:'/newuser' , element:<NewUser />},
    {path:'/productcreate' , element:<CreateProduct />},
]


export default Routers