const About = () => {
  return (
    <div>
      <div className="p-4 h-screen overflow-y-scroll">
        <hr className="border-t-[.9px] mb-5 border-gray-800" />
        <p className="front-end">
          A <strong>front-end</strong> developer,{' '}
          <strong>web3/smart contract deverloper</strong> with knowledge in{' '}
          <strong> Javascript, React, Nextjs</strong> and Hooks,
          <strong> CSS </strong>
          and frameworks(SCSS, Styled Components, Tailwind), I'm also a UI
          designer, proficient in designing user-centric applications
        </p>
        <br />
        <p className="analysis">
          A competent <strong>Business Developer</strong> with a year long
          experience delivering business critical projects and solutions for
          several sectors on transformation programmes. Full understanding of
          SDLC and applying both waterfall and agile (Scrum) framework and
          practical application and knowledge of the full business analysis
          activities in defining business needs, scopes, eliciting requirements
          and analysing requirements using both textual and UML representations,
          developments, testing and support.
        </p>
        <br />
        <p className="degree">
          I hold a degree in Business Information Systems from the University of
          Cape Coast, Ghana.
        </p>

        <div className="about_profile">{/* <Profile /> */}</div>
      </div>
    </div>
  )
}

export default About
