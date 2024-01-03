import Link from 'next/link'
import React from 'react'

const OneNav = () => {
  return (
    <div className="container flex mx-auto justify-between w-screen">
      <Link href={"/"}>Home</Link>
      <Link href={"/settings"}>settings</Link>
    </div>
  );
}

export default OneNav