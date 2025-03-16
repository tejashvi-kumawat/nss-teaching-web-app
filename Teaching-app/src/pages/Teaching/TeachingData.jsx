import IntensiveCoachingCamps1 from "../../assets/IntensiveCoachingCamps1.jpeg"
import IntensiveCoachingCamps2 from "../../assets/IntensiveCoachingCamps2.jpeg"
import WeeklyAndSurpriseTests from "../../assets/WeeklyAndSurpriseTests.jpeg"
import MentorshipPrograms from "../../assets/MentorshipProgram.png"
import TeachingApproach1 from "../../assets/TeachingApproach1.jpeg"
import TeachingApproach2 from "../../assets/TeachingApproach2.jpeg"
import TeachingBanner from "../../assets/TeachingBanner.png"
import AboutUs_background from "../../assets/AboutUs_background.png";
import Volunteer1 from "../../assets/Volunteer1.jpeg"
import Volunteer2 from "../../assets/Volunteer2.jpeg"
import Volunteer3 from "../../assets/Volunteer3.jpeg"
import Volunteer4 from "../../assets/Volunteer4.jpeg"
import Volunteer5 from "../../assets/Volunteer5.jpeg"
import Volunteer6 from "../../assets/Volunteer6.jpeg"
import Volunteer7 from "../../assets/Volunteer7.jpeg"
import Volunteer8 from "../../assets/Volunteer8.jpeg"
import Volunteer9 from "../../assets/Volunteer9.jpeg"
import Volunteer10 from "../../assets/Volunteer10.jpeg"

export const BannerSection={
    image: <img className='TeachingBannerImage' src={TeachingBanner} alt="students studying" />,
    description: <p className="TeachingBannerDescription" >Our teaching focuses on transformative educational programs, 
        including coaching camps, tests, and mentorship. With innovative methods, we inspire students. </p>,
    overlaytext: <span className='TeachingBannerOverlayText'>Teaching</span>
}
export const BannerSection_About={
    image: <img className='TeachingBannerImage' src={AboutUs_background} alt="students studying" />,
    description: <p className="TeachingBannerDescription" >Our teaching focuses on transformative educational programs, 
        including coaching camps, tests, and mentorship. With innovative methods, we inspire students. </p>,
    overlaytext: <span className='TeachingBannerOverlayText'>About</span>
}


export const TeachingPrograms=[
    {
        number: <span className="TeachingProgramsNumberHeading">01</span>,
        name: <h2 className="TeachingProgramsNameHeading">Intensive coaching camps</h2>,
        image: (
            <div className="TeachingProgramsImageBox">
                <img src ={IntensiveCoachingCamps1} alt="Ongoing Lecture" className="TeachingProgramsImages"/>
                <img src={IntensiveCoachingCamps2} alt="Various Students" className="TeachingProgramsImages" />
            </div>
        ),
        points: (
            <ul className="TeachingProgramsOuterText">
                <li> <b> Duration: </b> 2-month rigorous sessions held annually in locations 
                    such as Narayan Bagar and Saikot.</li>
                <li> <b>Subjects covered:</b> Physics, Chemistry, Maths, Biology, and English </li>
                <li> <b>Daily schedule:</b>
                <ul className="TeachingProgramsInnerText">
                    <li><b>Morning class:</b> Core subjects (7:30 AM - 12:45 PM)</li>
                    <li><b>Afternoon tutorials: </b> 
                    Practice sessions and problem-solving (3:00 PM - 6:00 PM)</li>
                    <li><b>Evening doubt-solving: </b> 
                    Personalized attention to student queries (8:00 PM - 10:00 PM)</li>
                    <li><b>Counseling and English classes: </b>
                    Career guidance and soft skills development</li>
                </ul></li>
                <li><b>Focus: </b>
                Holistic academic preparation, critical thinking, and real-life application of concepts.</li>
            </ul>
            
        )
    },
    {
        number: <span className="TeachingProgramsNumberHeading-odd">02</span>,
        name: <h2 className="TeachingProgramsNameHeading-odd">Weekly and Surprise tests</h2>,
        image: (
            <div className="TeachingProgramsImageBox">
                <img src={WeeklyAndSurpriseTests} alt="Students taking a test" className="TeachingProgramsImages" />
            </div>
        ),
        points: (
            <ul className="TeachingProgramsOuterText">
                <li>Regular evaluations through:
                <ul className="TeachingProgramsInnerText">
                    <li> <b> Weekly tests: </b> 3-hour assessments every Sunday </li>
                    <li> <b> Surprise tests:</b> 
                    Conducted randomly during tutorials to ensure attentiveness </li>
                </ul></li>
                <li> <b>Purpose:</b> 
                <ul className="TeachingProgramsInnerText">
                    <li>Gauge student progress</li>
                    <li>Provide actionable feedback</li>
                    <li>Improve exam strategies and time management</li>
                </ul></li>
            </ul>    
        )
    },
    {
        number: <span className="TeachingProgramsNumberHeading">03</span>,
        name: <h2 className="TeachingProgramsNameHeading">Mentorship programs</h2>,
        image: (
            <div className="TeachingProgramsImageBox">
                <img src={MentorshipPrograms} alt="Ongoing Lecture" className="TeachingProgramsImages" />
            </div>
        ),
        points: (
            <ul className="TeachingProgramsOuterText">
                <li>Volunteers from premier institution,IIT Delhi, mentor students.</li>
                <li> Objectives:
                    <ul className="TeachingProgramsInnerText">
                        <li>Foster peer learning</li>
                        <li>Provide academic and emotional support</li>
                    </ul>
                </li>
            </ul>
        )
    }
]

export const TeachingApproach={
    heading: <h2 className="TeachingHeadings">Teaching Approach</h2>,
    points: (
        <ul className="TeachingProgramsOuterText">
            <li><b> Student-centric methods: </b>
            <ul className="TeachingProgramsInnerText">
                <li> Personalized teaching tailored to unique learning needs. </li>
                <li>Use of engaging techniques, such as hands-on activities and real-life examples.</li>
            </ul></li>
            <li><b> Interactive learning: </b>
            <ul className="TeachingProgramsInnerText">
                <li>Encouraging active participation through Q&A sessions</li>
                <li>Students solve problems on the blackboard to boost confidence and encourage peer learning</li>
            </ul></li>
            <li><b> Comprehensive curriculum: </b>
            <ul className="TeachingProgramsInnerText">
                <li>Focused on foundational and advanced topics in Physics, Chemistry, Maths, and Biology</li>
                <li>Counseling sessions cover career options in diverse 
                    fields such as engineering, media, and design</li>
                <li>Comprehensive English classes designed to enhance soft skills, 
                    expand vocabulary, and deepen understanding of the English language</li>
            </ul></li>
        </ul>
    ),
    image: (
        <div className="TeachingProgramsImageBox">
            <img src={TeachingApproach1} alt="students engaged in open discussion" className="TeachingProgramsImages" />
            <img src={TeachingApproach2} alt="students studying together" className="TeachingProgramsImages" />
        </div>
    )
}

export const TeachingVolunteerList=[
    {
        image: <img src={Volunteer1} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">Kalyani Charan</h3>,
        description: <p className="TeachingVolunteerText">
            I was incredibly excited to teach JEE-level mathematics to students while staying near the serene Alakhnanda River. But the experience turned out to be even more beautiful and memorable than I could have ever imagined. Teaching eager minds with such a strong passion for learning and growth was truly inspiring. The bond I formed with the students, as well as the insights I gained about the local environment from Dabral sir, made it all the more enriching. Every moment spent there felt special, and the energy, enthusiasm, and warmth of the place left a lasting impression on me. It's an experience I will always cherish, and would always like to go again.
            </p>
    },
    {
        image: <img src={Volunteer2} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Swastik Naik
            </h3>,
        description: <p className="TeachingVolunteerText">
            As a volunteer in the Uttarakhand Teaching Programme under NSS IIT Delhi, I had an amazing experience teaching and mentoring 9th-12th grade students in Chamoli. The students were hardworking, dedicated, and full of energy, which made teaching them a joy. I loved the friendly environment and enjoyed spending time with the children, not just during classes but also during games and conversations. This program gave me a chance to bond with the students and make a positive impact on their journey. It was a truly rewarding experience, and I encourage everyone to take part in such initiatives to learn and give back.
            </p>
    },
    {
        image: <img src={Volunteer3} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Divyam Goyal
            </h3>,
        description: <p className="TeachingVolunteerText">
            During my summer break, I volunteered with the Uttarakhand Teaching Project in Saikot village, teaching mathematics to 10th and 12th-grade students. The experience was truly transformative. I was deeply moved by the students' unwavering dedication and thirst for knowledge, despite the challenges they faced. Their enthusiasm and resilience were inspiring, making the teaching experience incredibly rewarding. As I adapted my teaching methods to suit their needs, I grew both personally and professionally. The connections I formed with the students were invaluable, leaving a lasting impact on my perspective towards education and community service. This wonderful experience reinforced my commitment to making a positive difference through education
            </p>
    },
    {
        image: <img src={Volunteer4} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Shivani Meena
            </h3>,
        description: <p className="TeachingVolunteerText">
            I'm Shivani Meena, and I had the privilege of volunteering at a summer teaching camp. It was a uniquely self-revelatory experience. Not only did I enhance my own knowledge and skills, but I also had the opportunity to learn about the vibrant lifestyles of the people in Uttarakhand and the challenges they face amidst the rugged mountain terrain. I was deeply inspired by the students' eagerness to learn and grow. Overall, it was an inspiring, enriching, and unforgettable experience. I would be thrilled to volunteer again and continue learning alongside these amazing students.
            </p>
    },
    {
        image: <img src={Volunteer5} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Vikas Meena
            </h3>,
        description: <p className="TeachingVolunteerText">
            Volunteering in Narayan Bagar was a transformative experience. Teaching and mentoring students to prepare for competitive exams like JEE and NEET was deeply rewarding. Witnessing their determination and eagerness to learn inspired me. Despite initial challenges like limited resources and infrastructure, the collective efforts of the team, local educators, and students created a positive learning environment. The exposure to Uttarakhand's unique culture enriched the experience further. This opportunity not only enhanced my teaching skills but also deepened my commitment to contributing to society through education. It was truly a fulfilling journey of learning and giving back.
            </p>
    },
    {
        image: <img src={Volunteer6} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Bhavneesh
            </h3>,
        description: <p className="TeachingVolunteerText">
            I am Bhavneesh yadav from IIT Delhi, in summer of 2023 I got the opportunity to teach student from 9-12 th class in Uttarakhand. It was a one in a life time experience for me as it made me reflect on my career choice and view on social services. Student there were interactive and had eager to learn nee things, bond we created was much more of big brother type rather than typical student and teacher. Till this day I receive calls from student for guidance showing their eagerness to grow.
            </p>
    },
    {
        image: <img src={Volunteer7} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Neeraj
            </h3>,
        description: <p className="TeachingVolunteerText">
            My experience at the Uttarakhand teaching project was incredibly fulfilling. As a teacher and administrative head, I had the privilege of working with village students who were eager to learn, especially since they were being taught by IIT Delhi students. Their enthusiasm and dedication were truly inspiring, making teaching them a joyful and rewarding experience.
            I feel fortunate to have been part of this wonderful initiative, started by JP Dabral sir, whose vision for improving rural education is truly commendable. This opportunity not only allowed me to contribute to their growth but also left a lasting impact on me. I sincerely hope these bright students achieve great success in life.
            </p>
    },
    {
        image: <img src={Volunteer8} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Rishabh Chirania
            </h3>,
        description: <p className="TeachingVolunteerText">
            I volunteered in Chamoli district, teaching biology to 10th and 12th-grade students. The experience was enriching, both academically and personally. The beautiful environment and close-knit community allowed me to form strong bonds with students, sharing meals, playing, and even trekking together. One of the most rewarding parts was mentoring a student for life, guiding them beyond just academics. This experience not only helped me achieve my educational goals but also created lasting friendships and valuable memories.
            </p>
    },
    {
        image: <img src={Volunteer9} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Yash Gupta
            </h3>,
        description: <p className="TeachingVolunteerText">
            Uttrakhand Teaching camp was great. It was a unique life experience where I got the opportunity to teach the village students, at ground level. After Staying with them for so many days I realized the problems they encounter in their studies. I wish to contribute in every little way possible!
            </p>
    },
    {
        image: <img src={Volunteer10} alt="Volunteers" className="TeachingVolunteerImage" />,
        name: <h3 className="TeachingVolunteerHeading">
            Mitashi Jain
            </h3>,
        description: <p className="TeachingVolunteerText">
            I would like to express my sincere gratitude to NSS for giving me this opportunity to spend two enriching weeks in a serene village in Uttarakhand, teaching physics to classes 9 and 11.. 
Living amidst nature, away from the city's hustle, was both refreshing and humbling.The children's eagerness to learn and their dreams inspired me to give my best in empowering them academically and personally. Their resilience and curiosity taught me invaluable lessons, making this experience deeply transformative.
I felt a heartfelt connection with a community that welcomed me like family.
This unforgettable experience will remain a cherished chapter of my life, inspiring me to continue making a positive impact wherever I go.
            </p>
    }
]