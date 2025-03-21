import React, { useState, useEffect } from 'react'
import JPDabral from "../../assets/JP_Dabral.png"
import RajeevJain from "../../assets/Rajeev Jain.png"
import RajendraMohan from "../../assets/Rajendra Mohan.png"
import RajKumarKohli from "../../assets/Raj Kumar Kohli.png"
import NareshChand from "../../assets/Naresh Chand.png"
import Banner from "../../assets/TrusteesBanner.png"
import AboutUs_background_cover from "../../assets/AboutUs_background_cover.png";
import "./Trustees.css"
import { Link } from 'react-router-dom';
import ContributionBanner from '../../components/ContributionBanner/ContributionBanner.jsx'
import { useImagePreloader, LoadingIndicator } from '../../utils/ImagePreloader';
import VectorHome from "../../assets/Vector.png";
const allImages = [
  JPDabral,
  RajeevJain,
  RajendraMohan,
  RajKumarKohli,
  NareshChand,
  Banner,
  AboutUs_background_cover
];

const TrusteesList = [
  {
    id: 1,
    number: "01",
    name: "J.P. Dabral",
    image: JPDabral,
    points: (
      <ul className='Trustees-Object-Points'>
        <li className="Trustees-Points-TextPara">An MBA graduate from Delhi University and
          former Regional Marketing Manager at ITC</li>
        <li className="Trustees-Points-TextPara">A recipient of prestigious accolades, including the Ashoka Fellowship,
          CNN-IBN Real Heroes Award,
          International Green Apple Award, and Hindustan Times India Awaken Award</li>
        <li className="Trustees-Points-TextPara">Over 30 years of grassroots work dedicated to improving education, tackling
          bureaucratic challenges, and empowering communities in Uttarakhand</li>
      </ul>
    )
  },
  {
    id: 2,
    number: "02",
    name: "Rajeev Jain",
    image: RajeevJain,
    points: (
      <ul className='Trustees-Object-Points'>
        <li className="Trustees-Points-TextPara">Rajeev Jain, law graduate, works in consultancy and customised manufacturer of fancy lights,
          Jain scholar associated in several Jain organizations and philanthropic activities</li>
        <li className="Trustees-Points-TextPara">Engaged in various charitable and social initiatives.</li>
        <li className="Trustees-Points-TextPara">Actively associated with several Jain organizations</li>
      </ul>
    )
  },
  {
    id: 3,
    number: "03",
    name: "Rajendra Mohan",
    image: RajendraMohan,
    points: (
      <ul className='Trustees-Object-Points'>
        <li className="Trustees-Points-TextPara">Studied at Cambridge School, graduated from Shri Ram College,
          and joined the family business Sri Ram & Son (est. 1882)</li>
        <li className="Trustees-Points-TextPara">Founded the men's wear brand Pall Mall in 1988, curating fashion for discerning men</li>
        <li className="Trustees-Points-TextPara">Associated with Ramjas Educational Foundation, active in Rotary & Jaycees,
          enjoys golf and music</li>
      </ul>
    )
  },
  {
    id: 4,
    number: "04",
    name: "Raj Kumar Kohli",
    image: RajKumarKohli,
    points: (
      <ul className='Trustees-Object-Points'>
        <li className="Trustees-Points-TextPara">Alumnus of Shri Ram College of Commerce (SRCC), Delhi</li>
        <li className="Trustees-Points-TextPara">Importer and exporter of textiles and textile products</li>
      </ul>
    )
  },
  {
    id: 5,
    number: "05",
    name: "Naresh Chand",
    image: NareshChand,
    points: (
      <ul className='Trustees-Object-Points'>
        <li className='Trustees-Points-TextPara'>Importer and exporter of sandal wood and various other products.</li>
        <li className="Trustees-Points-TextPara">Committed to the upliftment of rural students through education</li>
      </ul>
    )
  }
]

const Trustees = () => {
  const { isLoading, loadingProgress } = useImagePreloader(allImages);

  if (isLoading) {
    return <LoadingIndicator progress={loadingProgress} />;
  }

  return (
    <>
      <div className='TrusteesBody'>
        <div className="TrusteesBannerSection">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Trustees</span>
          </div>
          <div className="TrusteesBannerImageBox">
            <img className='TrusteesBannerImage' src={Banner} alt="Trustees Banner" />
            <img src={AboutUs_background_cover} alt="" className="Trustees_background_cover" />
            <div className="TrusteesBannerOverlayText">
              <h2>Meet the visionaries behind the</h2>
              <h1>Himalayan Vidya Daan Trust</h1>
            </div>
          </div>
          <p className='TrusteesBannerDescription'>
            The trust is guided by five dedicated individuals who bring their unique
            expertise and unwavering commitment to the cause of education in Uttarakhand.
          </p>
        </div>
        {TrusteesList.map((TrustObject, index) => index % 2 === 0 ? (
          <div className="TrusteesContainer TrusteesContainer-even" key={index}>
            <div className="TrusteesTextBox">
              <span className="TrusteesNumberHeading">{TrustObject.number}</span>
              <h2 className="TrusteesTextHeading">
                <div className='Trusteestrust-object'>{TrustObject.name}</div>
              </h2>
              {TrustObject.points}
            </div>
            <div className="TrusteesTrustImageBox">
              <img className="TrusteesTrustImage" src={TrustObject.image} alt={TrustObject.name} />
            </div>
          </div>
        ) : (
          <div className="TrusteesContainer TrusteesContainer-odd" key={index}>
            <div className="TrusteesTrustImageBox">
              <img className="TrusteesTrustImage" src={TrustObject.image} alt={TrustObject.name} />
            </div>
            <div className="TrusteesTextBox">
              <span className="TrusteesNumberHeading-odd">{TrustObject.number}</span>
              <h2 className="TrusteesTextHeading">
                {TrustObject.name}
              </h2>
              {TrustObject.points}
            </div>
          </div>
        ))}
      </div>
      <ContributionBanner />
    </>
  );
};
export default Trustees;




// home thing
export const TrusteesHome = () => {
  return (
    <div className="TrusteesHomeBody">
      <h1 className='TrusteesHomeHeading'>Our trustees</h1>
      <p className='TrusteesHomeDescription'>Meet the visionaries behind the Himalayan Vidya Daan Trust</p>
      <div className="TrusteesHomeFlexbox">
        {TrusteesList.map((TrustHomeObject, index) => (
          <div className='TrusteesHomeFlex' key={TrustHomeObject.id}>
            <img className="TrusteesHomeImage" src={TrustHomeObject.image} alt={TrustHomeObject.name} />
            <h2 className="TrusteesHomeName">
              {TrustHomeObject.name}
              <img src={VectorHome} alt="Pointer" className="TrusteesHomePointer" />
            </h2>
            {index == 0 ? <h3 className="TrusteesHomeImageDescription">Founder and Chairperson</h3> : ''}
          </div>
        ))}
      </div>
    </div>
  )
}