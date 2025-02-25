import React from 'react'

export default function Header() {
  return (
    <div className="flex py-2 px-4 bg-base-100 justify-between shadow-md">
      <a className="btn btn-ghost text-xl">Kanban Board</a>
      <div className='flex gap-2'>
        <button className='btn btn-primary'>Login</button>
        <button className='btn btn-primary'>Register</button>
      </div>
    </div>
  );
}
