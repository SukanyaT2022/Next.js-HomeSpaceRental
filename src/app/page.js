'use client';

import Navbar from '@/component/Navbar';
import Allproducts from './products/page';

export default function HomeClientWrapper({ data }) {
  const getSearchValue = (val) => {
    console.log(val);
  };

  return (
    <div>
      <Navbar getSearchValue={getSearchValue} />
      <Allproducts />
    </div>
  );
}
