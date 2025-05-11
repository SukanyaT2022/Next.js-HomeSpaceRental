import NavBar from "@/component/NavBar";
import Image from "next/image";
import { hotelData } from '@/actions/apis';
import SearchBarComp from '@/component/SearchBarComp'
//@ import from product folders to this page.js file
import Allproducts from "./products/page"  
// this page is landing page or  home page
export default async function Home() {
  const data = await hotelData()//crate variable to store- api bring data to home page
  console.log(data);//test if data already on home
  
  return (
    <div className="">
          <SearchBarComp />
          <Allproducts />
    </div>
  );
}
