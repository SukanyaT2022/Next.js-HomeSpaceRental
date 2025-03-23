import SearchBarComp from '@/component/SearchBarComp'
import { hotelData } from '@/actions/apis';//from api bring data to home page

const page = async() => {
const data = await hotelData()//crate variable to store- api bring data to home page
console.log(data);//test if data already on home

return (
  <div>
    <p>Home page</p>
    <SearchBarComp/>
  </div>
  )
}

export default page