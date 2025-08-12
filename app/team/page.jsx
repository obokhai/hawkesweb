import React from 'react'
import Link from 'next/link';
import Header from '../components/Header'

// Updated teamMembers array with name and url
const teamMembers = [
  { name: "TEMITAYO OJELEKE", url: "/team/temitayo" },
  { name: "FADEKE AJAO", url: "/team/fadeke" },
  { name: "HENRY MEJULU", url: "/team/henry" },
  { name: "DIPO TORHUKERHIJO", url: "/team/dipo" },
  { name: "CHINONYELUM IGBOEKWE", url: "/team/chinonyelum" },
  { name: "VICTORY OSAREME ISEGOHIMHEN", url: "/team/victory" },
  { name: "OPRITE PEPPLE ROWLAND", url: "/team/oprite" },
  { name: "AANOULUWAPO AWODEINDE", url: "/team/aanu0luwa" },
];

const Team = () => {
  return (
    <>
      <Header
        title="Our Team"  
        description="Our team is made up of experienced, dedicated legal professionals who are passionate about delivering exceptional service. At Hawkes, we work collaboratively to provide clients with clear advice and strong representation."
        imageSrc="/about-bg.png"
        showBorder={true}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 px-16 py-12 bg-white">
        {teamMembers.map((member) => (
          <Link
            key={member.name}
            href={member.url}
            className="border border-gray-200 rounded-lg py-6 px-4 text-center font-semibold text-[#22314a] text-base bg-white shadow-sm hover:bg-gray-50 transition"
          >
            {member.name}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Team