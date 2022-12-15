import React, { useState } from 'react';

function SidebarLinkGroup({
  children,
  activecondition,
}) {

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <li className={`px-3 py-2 mb-0.5 last:mb-0 ${activecondition ? 'bg-amber-700 rounded-2xl' : "hover:bg-amber-300 hover:rounded-2xl"}`}>
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;