import Link from "next/link";
import React from "react";

const MenuItem = (props) => {
  return (
    <div>
      <Link href={props.address} className="hover:text-amber-500">
        <props.Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{props.title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
