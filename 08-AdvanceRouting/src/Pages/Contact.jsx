import { Link, Outlet } from "react-router-dom"
const Contact = () => {
    return (
        <div className='h-100 bg-green-300 flex items-center flex-col gap-5 text-4xl text-black font-bold '>
            <Link className="bg-pink-300 p-3 m-1" to='/contact/mensContact'>Men's Contact</Link>
            <Link className="bg-pink-300 p-3 m-1" to='/contact/womensContact'>Women's Contact</Link>
            <Outlet/>
        </div>
    )
}

export default Contact
