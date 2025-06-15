'use client';

import Navbar from '@/component/Navbar';
import Allproducts from './products/page';
import React, { useState } from "react";

export default function HomeClientWrapper({ data }) {
  const [search, setSearch] = useState("");

  const getSearchValue = (val) => {
    setSearch(val);
  };

  return (
    <div>
      <Navbar getSearchValue={getSearchValue} />
      <Allproducts searchStore={search} />
    </div>
  );
}
