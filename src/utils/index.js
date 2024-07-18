import { Link } from "react-router-dom"
import { Capsule, Douglas, Europa, Launch, Mark, Mars, Moon, Spaceport, Titan, Victor, Women } from "../assets"

export const navbar=[
    {   
        num:"00",
        li:"HOME",
        link:"/"
    },
    {   
        num:"01",
        li:"DESTINATION",
        link:"/destination/0"
    },
    {   
        num:"02",
        li:"CREW",
        link:"/crew"
    },
    {   
        num:"03",
        li:"TECHNOLOGY",
        link:"/technology"
    }
]

export const heroText=[

    {
        h2:"SO, YOU WANT TO TRAVEL TO",
        h1:"SPACE",
        p:"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
    }
]

export const destinationNavbar=[
    {
        span:"MOON",
        img:Moon,
        h2:"MOON",
        p:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 KM",
        time:"3 DAYS"
    
    },
    {
        span:"MARS",
        img:Mars,
        h2:"MARS",
        p:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:"225 MIL. km",
        time:"9 MON"
    },
    {
        span:"EUROPA",
        img:Europa,
        h2:"EUROPA",
        p:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance:"628 MIL. km",
        time:"3 YEARS"
    },
    {
        span:"TITAN",
        img:Titan,
        h2:"TITAN",
        p:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 BIL. km",
        time:"7 YEARS"
    }
]

export const crewText=[
    {
        img:Douglas,
        status:"COMMANDER",
        name:"DOUGLAS HURLEY",
        p:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
        img:Mark,
        status:"MISSION SPECIALIST ",
        name:"MARK SHUTTLEWORTH",
        p:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
        img:Victor,
        status:"PILOT",
        name:"Victor Glover",
        p:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
        img:Women,
        status:"Flight Engineer",
        name:"Anousheh Ansari",
        p:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    }
]


export const TechnologyText=[
    {
        img:Launch,
        title:"LAUNCH VEHICLE",
        p:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
        img:Spaceport,
        title:"SPACEPORT",
        p:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
        img:Capsule,
        title:"SPACE CAPSULE",
        p:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }
]
