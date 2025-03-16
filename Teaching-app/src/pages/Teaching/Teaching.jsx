import React from 'react'
import "./Teaching.css"
import { BannerSection,TeachingPrograms,TeachingApproach,TeachingVolunteerList } from './TeachingData'

const Teaching = () => {
  return (
    <div className="TeachingBody">
      <div className="TeachingBannerSection">
        <div className="TeachingBannerImageBox">
          {BannerSection.image}
          {BannerSection.overlaytext}
        </div>
        {BannerSection.description}
      </div>

      <h2 className="TeachingHeadings">Our programs</h2>
      {TeachingPrograms.map((programObject,index) => index%2==0 ? (
        <div className="TeachingProgramsBox" key={index}>
          <div className="TeachingProgramsTextBox">
            {programObject.number}
            {programObject.name}
            {programObject.points}
          </ div>
          {programObject.image}
        </div>
        ) : (
          <div className="TeachingProgramsBox-odd">
          {programObject.image}
          <div className="TeachingProgramsTextBox-odd">
            {programObject.number}
            {programObject.name}
            {programObject.points}
          </ div>
        </div>
        ))}
      {TeachingApproach.heading}
      <div className="TeachingApproachBox">
        <div className="TeachingApproachTextBox">
          {TeachingApproach.points}
        </div>
        {TeachingApproach.image}
      </div>
      
      <h2 className="TeachingHeadings">Volunteer Experience</h2>
      <div className="TeachingVolunteerExperienceGrid">
        {TeachingVolunteerList.map((VolunteerObject,index3) => (
          <div className='TeachingVolunteerBox' key={index3}>
            {VolunteerObject.image}
            {VolunteerObject.name}
            {VolunteerObject.description}
          </div>
        ))}
      </div>
{/* 
      Testimonials 
      <div className="TeachingTestimonials">
        <h2 className="TeachingHeadings">Testimonials</h2>
        <p className="TeachingDescription">Lorem ipsum</p>
        <div className="TeachingTestimonialsGrid">
          <div className="TeachingTestimonialsBox">
            <img src={rose} alt="test" className="TeachingTestimonialsImage" />
            <span className="TeachingTestimonialsName">Lorem ipsum</span>
            <div className="TeachingTestimonialsDescription"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nisi maxime in sint ab fugit dolores, nemo sit. Quaerat exercitationem illo aspernatur deserunt repellat iusto illum at nulla rerum nostrum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, minus. Maiores aliquid quia provident facilis voluptatem soluta accusantium assumenda labore cum consequuntur rem, officia tempora veniam at in corrupti dolores.
            </div>
          </div>
          <div className="TeachingTestimonialsBox">
            <img src={rose} alt="test" className="TeachingTestimonialsImage" />
            <span className="TeachingTestimonialsName">Lorem ipsum</span>
            <div className="TeachingTestimonialsDescription"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nisi maxime in sint ab fugit dolores, nemo sit. Quaerat exercitationem illo aspernatur deserunt repellat iusto illum at nulla rerum nostrum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, minus. Maiores aliquid quia provident facilis voluptatem soluta accusantium assumenda labore cum consequuntur rem, officia tempora veniam at in corrupti dolores.
            </div>
          </div>
          <div className="TeachingTestimonialsBox">
            <img src={rose} alt="test" className="TeachingTestimonialsImage" />
            <span className="TeachingTestimonialsName">Lorem ipsum</span>
            <div className="TeachingTestimonialsDescription"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nisi maxime in sint ab fugit dolores, nemo sit. Quaerat exercitationem illo aspernatur deserunt repellat iusto illum at nulla rerum nostrum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, minus. Maiores aliquid quia provident facilis voluptatem soluta accusantium assumenda labore cum consequuntur rem, officia tempora veniam at in corrupti dolores.
            </div>
          </div>
          <div className="TeachingTestimonialsBox">Testimonial 2</div>
          <div className="TeachingTestimonialsBox">Testimonial 2</div>
          <div className="TeachingTestimonialsBox">Testimonial 2</div>
          <div className="TeachingTestimonialsBox">Testimonial 2</div>
        </div>
      </div> */}

    </div>
  )
}

export default Teaching