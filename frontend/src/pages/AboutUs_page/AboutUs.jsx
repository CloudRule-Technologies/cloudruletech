
import logo from "../../assets/Logo.jpeg";
import missionImg from "../../assets/Mission.png";
import visionImg from "../../assets/Vision.png";
import isac from "../../assets/Isac-Profile.jpeg";
import praveen from "../../assets/Praveen-Profile.jpeg";
import sailendra from "../../assets/Sailendra -Profile.jpeg";
import sujitha from "../../assets/Sujitha-Profile.jpeg";
import prakalya from "../../assets/Prakalya-Profile.jpeg";
import viji from "../../assets/Viji-Profile.png";




const AboutUs = () => {
    const services = [
        {
            title: "IT Solutions & Software Development",
            desc: "We design and develop robust, scalable, and secure software solutions tailored to business needs. From custom applications to enterprise systems, we help organizations transform digitally."
        },
        {
            title: "Web & Digital Platform Development",
            desc: "We build responsive websites and high-performance digital platforms using modern technologies, ensuring seamless user experience and long-term scalability."
        },
        {
            title: "Industry-Focused Training Programs",
            desc: "We provide hands-on training for school and college students, covering in-demand technologies and practical skills aligned with industry standards."
        },
        {
            title: "Internships & Real-World Projects",
            desc: "Our internship programs offer real-time project exposure, enabling students to apply theoretical knowledge to practical challenges and gain industry readiness."
        }
    ];

    const headTeam = [
        { role: "Chief Executive Officer", name: "Sathya Priya" },
        { role: "Director", name: "Karthikeyan" },
        { role: "Joint Managing Director", name: "Preethi" }
    ];

    const techTeam = [
        { role: "Fullstack Developer", name: "Sailendra Prasath", image: sailendra },
        { role: "Fullstack Developer", name: "Isac Newton", image: isac, imgStyle: { objectPosition: "50% 15%" } },
        { role: "Fullstack Developer", name: "Praveen Sethuvel", image: praveen },
        { role: "Fullstack Developer", name: "Sujitha", image: sujitha },
        { role: "Business Development Manager", name: "Viji Kannan", image: viji },
        { role: "Digital Marketing", name: "Prakalya", image: prakalya }

    ];

    return (
        <div className="w-full py-[160px] px-5 bg-[#121212] font-sans overflow-x-hidden text-white max-lg:py-20 max-lg:pb-10 max-md:py-[60px] max-sm:py-10 max-sm:px-[15px]">
            <h1 className="text-center text-[clamp(3rem,5vw+1rem,5rem)] font-bold mb-20 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_forwards] max-md:mb-[50px] max-sm:mb-10">About Us</h1>

            {/* About Section */}
            <div className="flex items-center justify-center gap-[100px] max-w-[1200px] mx-auto mb-[150px] opacity-0 animate-[fadeIn_1s_ease-out_forwards] last:mb-0 max-lg:gap-[50px] max-md:flex-col max-md:text-center max-md:gap-10 max-md:mb-[100px] [&:nth-child(2)]:delay-200 group">
                <div className="flex-1 flex justify-center items-center overflow-hidden relative rounded-[4px] max-sm:h-[280px]">
                    <img src={logo} alt="Cloudrule Technology" className="w-full h-[350px] object-cover transition-all duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] max-md:h-[300px] max-sm:h-[250px]" />
                </div>
                <div className="flex-1 max-w-[500px] p-5 border-l border-white/10 max-md:border-none max-md:text-center max-md:p-0 max-md:max-w-full">
                    <h2 className="text-[3.5rem] leading-[1.1] font-bold text-white mb-[30px] tracking-tight relative inline-block max-lg:text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] after:content-[''] after:absolute after:-bottom-[10px] after:left-0 after:w-[60px] after:h-[2px] after:bg-white after:transition-[width] after:duration-300 group-hover:after:w-full max-md:after:left-1/2 max-md:after:-translate-x-1/2">Cloudrule Technology</h2>
                    <p className="text-[1.1rem] leading-[1.8] text-white font-light mb-0">
                        Cloudrule Technology Private Limited is a technology-driven company delivering innovative
                        IT solutions and scalable digital platforms. We also empower school and college students
                        through industry-focused training, internships, and real-world projects to build skilled professionals.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="flex items-center justify-center gap-[100px] max-w-[1200px] mx-auto mb-[150px] opacity-0 animate-[fadeIn_1s_ease-out_forwards] last:mb-0 max-lg:gap-[50px] max-md:flex-col-reverse max-md:text-center max-md:gap-10 max-md:mb-[100px] [&:nth-child(3)]:delay-400 group">
                <div className="flex-1 max-w-[500px] p-5 border-r border-white/10 text-right max-md:border-none max-md:text-center max-md:p-0 max-md:max-w-full">
                    <h2 className="text-[3.5rem] leading-[1.1] font-bold text-white mb-[30px] tracking-tight relative inline-block max-lg:text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] after:content-[''] after:absolute after:-bottom-[10px] after:right-0 after:left-auto after:w-[60px] after:h-[2px] after:bg-white after:transition-[width] after:duration-300 group-hover:after:w-full max-md:after:left-1/2 max-md:after:-translate-x-1/2 max-md:after:right-auto">Our Mission</h2>
                    <p className="text-[1.1rem] leading-[1.8] text-white font-light mb-0">
                        To provide reliable and scalable IT solutions,empower students
                        with industry-relevant skills through hands-on learning,bridge the gap between
                        academia and industry, and build long-term strategic partnerships.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center overflow-hidden relative rounded-[4px] max-sm:h-[280px]">
                    <img src={missionImg} alt="Our Mission" className="w-full h-[350px] object-cover transition-all duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] max-md:h-[300px] max-sm:h-[250px]" />
                </div>
            </div>

            {/* Vision Section */}
            <div className="flex items-center justify-center gap-[100px] max-w-[1200px] mx-auto mb-[150px] opacity-0 animate-[fadeIn_1s_ease-out_forwards] last:mb-0 max-lg:gap-[50px] max-md:flex-col max-md:text-center max-md:gap-10 max-md:mb-[100px] group">
                <div className="flex-1 flex justify-center items-center overflow-hidden relative rounded-[4px] max-sm:h-[280px]">
                    <img src={visionImg} alt="Our Vision" className="w-full h-[350px] object-cover transition-all duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] max-md:h-[300px] max-sm:h-[250px]" />
                </div>
                <div className="flex-1 max-w-[500px] p-5 border-l border-white/10 max-md:border-none max-md:text-center max-md:p-0 max-md:max-w-full">
                    <h2 className="text-[3.5rem] leading-[1.1] font-bold text-white mb-[30px] tracking-tight relative inline-block max-lg:text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] after:content-[''] after:absolute after:-bottom-[10px] after:left-0 after:w-[60px] after:h-[2px] after:bg-white after:transition-[width] after:duration-300 group-hover:after:w-full max-md:after:left-1/2 max-md:after:-translate-x-1/2">Our Vision</h2>
                    <p className="text-[1.1rem] leading-[1.8] text-white font-light mb-0">
                        To become a trusted technology partner by driving digital transformation
                        for businesses and educational institutions while nurturing future-ready
                        talent through practical learning and innovation
                    </p>
                </div>
            </div>

            {/* What We Do Section */}
            <div className="max-w-[1200px] mx-auto mb-[150px] px-5 opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-[600ms]">
                <div style={{ textAlign: "center" }}>
                    <h2 className="text-[3.5rem] leading-[1.1] font-bold text-white mb-[30px] tracking-tight relative inline-block max-lg:text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] after:content-[''] after:absolute after:-bottom-[10px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full">What We Do</h2>
                </div>
                <div className="grid grid-cols-2 gap-10 mt-[60px] max-md:grid-cols-1 max-md:gap-[30px]">
                    {services.map((service, index) => (
                        <div className="bg-white/3 border border-white/10 p-10 transition-all duration-300 h-full flex flex-col justify-start relative overflow-hidden group hover:bg-white/5 hover:-translate-y-[5px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[2px] before:h-0 before:bg-white before:transition-[height] before:duration-400 group-hover:before:h-full max-sm:p-[30px]" key={index}>
                            <h3 className="text-[1.8rem] font-semibold text-white mb-5 pb-[15px] border-b border-white/10 max-sm:text-[1.5rem]">{service.title}</h3>
                            <p className="text-[1.1rem] leading-[1.8] text-[#cccccc] font-light">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Team Section */}
            <div className="max-w-[1200px] mx-auto mb-[150px] mt-[50px] px-0 opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-[800ms]">
                <div style={{ textAlign: "center" }}>
                    <h2 className="text-[3.5rem] leading-[1.1] font-bold text-white mb-[30px] tracking-tight relative inline-block max-lg:text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] after:content-[''] after:absolute after:-bottom-[10px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full">Our Leadership</h2>
                </div>
                <div className="grid grid-cols-3 gap-10 mt-[60px] max-md:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
                    {headTeam.map((member, index) => (
                        <div className="bg-white/3 border border-white/10 rounded-[4px] overflow-hidden transition-all duration-300 flex flex-col relative group hover:bg-white/5 hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]" key={index}>
                            <div className="w-full h-[350px] overflow-hidden max-sm:h-[280px]">
                                <img src={logo} alt={member.role} className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105" />
                            </div>
                            <div className="p-[25px] text-center border-t border-white/5">
                                <h3 className="text-[1.5rem] font-semibold text-white mb-2">{member.role}</h3>
                                <p className="text-[1.1rem] text-[#bbbbbb] font-light tracking-wide">{member.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Technical Team Section */}
            <div className="max-w-[1200px] mx-auto mb-[150px] mt-[50px] px-0 opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-[800ms]">
                <div style={{ textAlign: "center" }}>
                    <h2 className="text-[3.5rem] leading-[1.1] font-bold text-white mb-[30px] tracking-tight relative inline-block max-lg:text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] after:content-[''] after:absolute after:-bottom-[10px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full">Our Technical Team</h2>
                </div>
                <div className="grid grid-cols-3 gap-10 mt-[60px] max-md:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1">
                    {techTeam.map((member, index) => (
                        <div className="bg-white/3 border border-white/10 rounded-[4px] overflow-hidden transition-all duration-300 flex flex-col relative group hover:bg-white/5 hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]" key={index}>
                            <div className="w-full h-[350px] overflow-hidden max-sm:h-[280px]">
                                <img
                                    src={member.image}
                                    alt={member.role}
                                    className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                                    style={member.imgStyle || {}}
                                />
                            </div>
                            <div className="p-[15px_5px] text-center border-t border-white/5">
                                <h3 className="text-[1.2rem] font-semibold text-white mb-2">{member.role}</h3>
                                <p className="text-[1.1rem] text-[#bbbbbb] font-light tracking-wide">{member.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
