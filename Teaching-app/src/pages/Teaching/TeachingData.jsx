import { useState, useEffect } from 'react';
import IntensiveCoachingCamps1 from "../../assets/IntensiveCoachingCamps1.jpeg";
import IntensiveCoachingCamps2 from "../../assets/IntensiveCoachingCamps2.jpeg";
import WeeklyAndSurpriseTests from "../../assets/WeeklyAndSurpriseTests.jpeg";
import MentorshipPrograms from "../../assets/MentorshipProgram.png";
import TeachingApproach1 from "../../assets/TeachingApproach1.jpeg";
import TeachingApproach2 from "../../assets/TeachingApproach2.jpeg";
import TeachingBanner from "../../assets/TeachingBanner.png";
import AboutUs_background from "../../assets/AboutUs_background.png";
import Volunteer1 from "../../assets/Volunteer1.jpeg";
import Volunteer2 from "../../assets/Volunteer2.jpeg";
import Volunteer3 from "../../assets/Volunteer3.jpeg";
import Volunteer4 from "../../assets/Volunteer4.jpeg";
import Volunteer5 from "../../assets/Volunteer5.jpeg";
import Volunteer6 from "../../assets/Volunteer6.jpeg";
import Volunteer7 from "../../assets/Volunteer7.jpeg";
import Volunteer8 from "../../assets/Volunteer8.jpeg";
import Volunteer9 from "../../assets/Volunteer9.jpeg";
import Volunteer10 from "../../assets/Volunteer10.jpeg";
import Testimonial1 from "../../assets/Testimonial1.png"
import Testimonial2 from "../../assets/Testimonial2.png"
import Testimonial3 from "../../assets/Testimonial3.png"
import Testimonial4 from "../../assets/Testimonial4.png"
import Testimonial5 from "../../assets/Testimonial5.png"

// Define all your data exports as they were in the original file
export const BannerSection = {
    image: <img className='TeachingBannerImage' src={TeachingBanner} alt="students studying" />,
    description: <p className="TeachingBannerDescription" >Our teaching focuses on transformative educational programs,
        including coaching camps, tests, and mentorship. With innovative methods, we inspire students. </p>,
    overlaytext: <span className='TeachingBannerOverlayText'>Teaching</span>
}

export const BannerSection_About = {
    image: <img className='TeachingBannerImage' src={AboutUs_background} alt="students studying" />,
    description: <p className="TeachingBannerDescription" >Our teaching focuses on transformative educational programs,
        including coaching camps, tests, and mentorship. With innovative methods, we inspire students. </p>,
    overlaytext: <span className='TeachingBannerOverlayText'>About Us</span>
}

export const TeachingPrograms = [
    {
        number: <span className="TeachingProgramsNumberHeading">01</span>,
        name: <h2 className="TeachingProgramsNameHeading">Intensive coaching camps</h2>,
        image: (
            <div className="TeachingProgramsImageBox">
                <img src={IntensiveCoachingCamps1} alt="Ongoing Lecture" className="TeachingProgramsImages" />
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

export const TeachingApproach = {
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

export const TeachingTestimonials = [
    {
        image: <img src={Testimonial1} alt="Sneha Kandari Testimonial" className="TeachingTestimonialsImage" />,
        name: <span className="TeachingTestimonialsName">
            Sneha Kandari
        </span>,
        description: <div className="TeachingTestimonialsDescription" >
            I am Sneha Kandari, and I had the privilege of attending the program in Narayan Bagar in 2023 and
            in Saikot in 2024. Thanks to the coaching and support I received, I made it to the merit list of
            the 10th Class Board exams in 2024. Not only that, but my marks in school improved significantly,
            and I feel more confident in my studies now. Because of the continuous support I have got I am now
            determined to crack JEE and seek admission in IIT.
        </div>
    },
    {
        image: <img src={Testimonial2} alt="Harshita Rawat Testimonial" className="TeachingTestimonialsImage" />,
        name: <span className="TeachingTestimonialsName">
            Harshita Rawat
        </span>,
        description: <div className="TeachingTestimonialsDescription" >
            My name is Harshita Rawat, and I'm a Class 9 student. I attended the program in Narayan Bagar and
            Saikot, and it completely changed my academic journey. I used to be a low scorer, but after participating
            in the program, I've been consistently scoring over 90%. Now, I even help my fellow students by
            teaching them how to solve numerical problems in maths, physics, and chemistry. This program has
            truly boosted my confidence and love for learning.
        </div>
    },
    {
        image: <img src={Testimonial3} alt="Khushi Bisht Testimonial" className="TeachingTestimonialsImage" />,
        name: <span className="TeachingTestimonialsName">
            Khushi Bisht
        </span>,
        description: <div className="TeachingTestimonialsDescription" >
            My name is Khushi Bisht, and I'm now a Class 12 student at GIC, Garhkot, Chamoli. I attended the program
            in Narayan Bagar and Saikot, and it has been a turning point in my life. I used to be a mediocre student,
            scoring between 40-50%, but now I rank first in my class and consistently score 90%. In the teaching program
            we got very good counselling and came to know of various opportunities that we can avail. This year I
            will attempt for JEE also.
            Numerous students who have participated in our program have achieved outstanding success, securing
            admissions to prestigious institutions such as the National Defence Academy (NDA), Govind
            Ballabh Pant University, NIT Srinagar, B.Sc. Nursing and B. Pharma programs, among others.
        </div>
    },
    {
        image: <img src={Testimonial4} alt="Chitranshi Negi Testimonial" className="TeachingTestimonialsImage" />,
        name: <span className="TeachingTestimonialsName">
            Chitranshi Negi
        </span>,
        description: <div className="TeachingTestimonialsDescription" >
            I am Chitranshi Negi I attended these classes during summer vacation in 2024 at saikot and had the great
            experience of exploring things and learning things in new way. Before this camp I was a
            totally different person who don't know how to study and be focused but this camp taught me soo
            many new things and opportunities , I got to know about exams and job opportunities .This camp told
            me soo many way to explore things .This camp still helps me in my studies, provided me a
            mentor who tracks my progress every week and help me with the problems.
        </div>
    },
    {
        image: <img src={Testimonial5} alt="Aditya Sharma Testimonial" className="TeachingTestimonialsImage" />,
        name: <span className="TeachingTestimonialsName">
            Aditya Sharma
        </span>,
        description: <div className="TeachingTestimonialsDescription" >
            I am Aditya, a JEE 2025 aspirant, and this program has been a game-changer for me. It gave my
            preparation a significant boost, helping me build confidence and improve my grades at school.
            It also motivated me to go beyond academics, and with this newfound confidence, I cracked the
            Young Innovators Internship at Scalar Institute of Technology. This program has strengthened
            my determination to give my best and achieve my dream of getting into IIT.
            Highly recommended for serious aspirants!
        </div>
    },
]

export const TeachingVolunteerList = [
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
export const useImagePreloader = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    // List of all image sources to preload
    const imageSources = [
        IntensiveCoachingCamps1, IntensiveCoachingCamps2, WeeklyAndSurpriseTests,
        MentorshipPrograms, TeachingApproach1, TeachingApproach2, TeachingBanner,
        AboutUs_background, Volunteer1, Volunteer2, Volunteer3, Volunteer4,
        Volunteer5, Volunteer6, Volunteer7, Volunteer8, Volunteer9, Volunteer10
    ];

    const totalImages = imageSources.length;

    useEffect(() => {
        // Preload all images when this hook is used
        const imagePromises = imageSources.map(src => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    setLoadedCount(prevCount => prevCount + 1);
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${src}`);
                    // Still resolve so one failing image doesn't prevent the page from loading
                    setLoadedCount(prevCount => prevCount + 1);
                    resolve();
                };
            });
        });

        // When all images are loaded, update state
        Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
        });
    }, []);

    return { imagesLoaded, loadedCount, totalImages };
};

// Helper component to use in your pages
export const LoadingIndicator = ({ loadedCount, totalImages }) => {
    const percentage = Math.round((loadedCount / totalImages) * 100);

    return (
        <div className="loading-container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: '#f5f5f5'
        }}>
            <h2>Loading content...</h2>
            <div style={{
                width: '300px',
                height: '20px',
                backgroundColor: '#e0e0e0',
                borderRadius: '10px',
                overflow: 'hidden',
                margin: '20px 0'
            }}>
                <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    backgroundColor: '#4caf50',
                    transition: 'width 0.3s ease'
                }}></div>
            </div>
            <p>{percentage}% loaded ({loadedCount}/{totalImages} images)</p>
        </div>
    );
};