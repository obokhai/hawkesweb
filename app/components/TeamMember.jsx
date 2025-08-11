import React from 'react'
import Header from './Header'
const TeamMember = ({name,par1, par2 }) => {
  return (
    <>
    <Header title={name} showBorder={false}/>
        <div className='p-16 space-y-8 font-light text-lg'>
            <p>{par1}
            </p>

            <p>{par2}
            </p>
        </div>
        </>
  )
}

export default TeamMember