"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = ({setManufacturer,setModel}:any) => {
  const [searchManufacturer, setSearchManuFacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
      return alert("Please provide some input");
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManuFacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={40}
          height={40}
          className='absolute w-[32px] h-[32px] ml-4'
          alt='motorcycle model'
        />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input pl-5'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;