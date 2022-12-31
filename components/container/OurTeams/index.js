import React, { useCallback, useEffect, useState } from 'react';
import Gap from '../../Gap';
import TeamCard from '../../TeamCard';
import { getTeams } from '../../../config/api/client';
const OurTeams = () => {
  const [ourTeams, setOurTeams] = useState([]);
  const getOurTeams = useCallback(async () => {
    const data = await getTeams();
    setOurTeams(data.teams);
  }, [getTeams]);

  useEffect(() => {
    getOurTeams();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-100px">
      <h2 className="font-primary font-medium text-lg md:text-xl lg:text-2xl xl:text-4xl">
        Meet Our Team
      </h2>
      <Gap height="h-50px" />
      <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-8 ">
        {console.log(ourTeams[0])}
        {ourTeams.map((team) => {
          return (
            <TeamCard
              key={team._id}
              name={team.name}
              role={team.role.name}
              imgUrl="/images/raffcodes.png"
              col="start"
            />
          );
        })}

        {/* <TeamCard
          name="Rafly Masloman"
          role="Full Stack Developer"
          imgUrl="/images/raffcodes.png"
          col="center"
        />
        <TeamCard
          name="Rafly Masloman"
          role="Full Stack Developer"
          imgUrl="/images/raffcodes.png"
          col="end"
        /> */}
      </div>
    </div>
  );
};

export default OurTeams;
