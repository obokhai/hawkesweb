import React from 'react'
import Header from './Header'
import TeamHeader from './TeamHeader'
const TeamMember = ({name,par1, par2 }) => {
  return (
    <>
    <TeamHeader className='mx-auto' title={name} showBorder={false}/>
        <div className='p-16 space-y-8 lg:leading-14 font-light text-lg'>
            <p>{par1}
            </p>

            <p>{par2}
            </p>
        </div>
        </>
  )
}

export default TeamMember