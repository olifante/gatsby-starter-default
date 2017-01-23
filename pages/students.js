import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from 'reflexbox'
import 'css/styles.css'

import {
    Avatar,
    Banner,
    ButtonOutline,
    Card,
    img,
    Container,
    Divider,
    Footer,
    Heading,
    NavItem,
    Space,
    Text,
    Toolbar,
} from 'rebass'

const students = [
    {
        "picture": "206b5b_dca63440c79646b4b1c4fec123ccc4a4-mv2.jpg",
        "name": "Ahmad Alarashi",
        "spoken languages": [
            "Arabic", "English"
        ],
        "programming languages": [
            "Ruby on Rails"
        ],
        "quote": "I will not despair because god is always with me."
    },
    {
        "picture": "206b5b_b984524801cf4542b9afe6022d7efacc-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Louna Al Bondakji",
        "spoken languages": [
            "English", "Arabic", "German", "French"
        ],
        "programming languages": [
            "HTML", "CSS", "Ruby on Rails"
        ],
        "quote": "There is always a light at the end of the tunnel."
    },
    {
        "picture": "206b5b_0d734257de1a4f56bd4bbc1edf2d8ed5-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Bassem Riahi",
        "spoken languages": [
            "Arabic", "English"
        ],
        "programming languages": [
            "PHP", "SQL", "Java"
        ]
    },
    {
        "picture": "206b5b_103fd3666b7a4c3784661a4660b50e78-mv2_d_4968_3725_s_4_2.jpg",
        "name": "Ehab Zain",
        "spoken languages": [
            "Arabic", "English"
        ],
        "programming languages": [
            "HTML", "CSS", "Ruby on Rails"
        ],
        "quote": "Only fools and dead people do not change their minds."
    },
    {
        "picture": "206b5b_e21b746f08f341e597be824a0ca348a1-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Ghaith Zamrik",
        "spoken languages": [
            "English", "Arabic"
        ],
        "programming languages": [
            "Ruby on Rails", "C++", "HTML"
        ],
        "quote": "A wise man once said nothing."
    },
    {
        "picture": "206b5b_ac7d6073385f4ef0b1bda78ec88025cb-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Munzer Khattab",
        "spoken languages": [
            "Arabic", "English"
        ],
        "programming languages": [
            "Ruby on Rails", "HTML", "CSS"
        ],
        "quote": "No pain, no gain."
    },
    {
        "picture": "206b5b_c2771e75b47a40dd912d81620372cd45-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Ahmadullah Sediqi",
        "spoken languages": [
            "Pashto", "Dari", "Persian", "English", "Urdu"
        ],
        "programming languages": [
            "Ruby on Rails"
        ],
        "quote": "Every one should know how to program a computer, because it teaches you how to think. (Steve Jobs)"
    },
    {
        "picture": "206b5b_7ec596f87bf24b0386ded7792081ca99-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Nkentso Ledimo",
        "spoken languages": [
            "English", "Sesotho", "Portuguese", "French", "German"
        ],
        "programming languages": [
            "HTML", "CSS", "Less", "Bootstrap", "JavaScript", "Ruby on Rails"
        ],
        "quote": "You don't learn to walk by following rules.You learn by doing, and by falling over."
    },
    {
        "picture": "206b5b_626db207fee749039a5ecb81a277ac1d-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Ammar Joukhaji",
        "spoken languages": [
            "Arabic", "English", "Turkish"
        ],
        "programming languages": [
            "HTML", "CSS", "Ruby on Rails"
        ],
        "quote": "I won't give in, no I won't back down. It's my choice to try to swim or to drown."
    },
    {
        "picture": "206b5b_8ec77312c1c04bcb9652dc65b78e9ed2-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Yazan Salmo",
        "spoken languages": [
            "English", "Arabic", "German"
        ],
        "programming languages": [
            "Ruby on Rails"
        ]
    },
    {
        "picture": "206b5b_4a4de1310e60428d92c77a8faffd978d-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Khaled Faour",
        "spoken languages": [
            "Arabic", "English", "German", "Turkish"
        ],
        "programming languages": [
            "HTML", "CSS", "Ruby On Rails"
        ],
        "quote": "When you can’t change the direction of the wind — adjust your sails. (H.Jackson Brown Jr.)"
    },
    {
        "picture": "206b5b_0a7227d6afce432081345e2a0931fcc0-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Bourak Maghrebi",
        "spoken languages": [
            "Arabic", "English", "Turkish", "German"
        ],
        "programming languages": [
            "C++", "Java", "HTML", "Ruby on Rails", "CSS"
        ],
        "quote": "Humanity knows no borders."
    },
    {
        "picture": "206b5b_a2ecaaabd4094817b38545731964570f-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Ammar Merie",
        "spoken languages": [
            "Arabic", "English", "German"
        ],
        "programming languages": [
            "Ruby on Rails"
        ]
    },
    {
        "picture": "206b5b_407d70d657d64ee3a7ce89471bd0193a-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Mohammad Emran",
        "spoken languages": [
            "English", "Persian", "Urdu", "Pashto"
        ],
        "programming languages": [
            "Ruby on Rails"
        ],
        "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."
    },
    {
        "picture": "206b5b_fa15ba6047a7495f89992df9bd434449-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Rami Rihawi",
        "spoken languages": [
            "English", "Arabic", "German"
        ],
        "programming languages": [
            "Javascript", "Ruby on Rails", "C++", "Java", "HTML", "CSS"
        ],
        "quote": "If you’re going to be thinking, you may as well think big."
    },
    {
        "picture": "206b5b_33592c1e71f94b96a2cfb4ab80f6e4e5-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Mohammad Sakka",
        "spoken languages": [
            "Arabic", "English", "German"
        ],
        "programming languages": [
            "Java", "C++", "JavaScript", "HTML", "CSS"
        ],
        "quote": "To arrive late is better than not to arrive at all."
    },
    {
        "picture": "206b5b_f6ea4a8b0cfa45e3ba19ce89eb116c80-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Omar Alshafai",
        "spoken languages": [
            "English", "Arabic", "German"
        ],
        "programming languages": [
            "Ruby on Rails", "Javascript", "CSS", "HTML"
        ]
    },
    {
        "picture": "206b5b_a46678f2f45245f994c1799156d0f4e4-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Anas Sankar",
        "spoken languages": [
            "Arabic", "English", "German"
        ],
        "programming languages": [
            "HTML"
        ],
        "quote": "Everything is okay in the end, if it's not ok, then it's not the end."
    },
    {
        "picture": "206b5b_a9385bc2c5cb48da9a56fbfb9a7a5265-mv2_d_4343_2897_s_4_2.jpg",
        "name": "Mohammad Khattab",
        "spoken languages": [
            "Arabic", "English"
        ],
        "programming languages": [
            "Ruby on Rails", "HTML"
        ],
        "quote": "Fight for my goal and do not give in or feel despair."
    },
    {
        "picture": "206b5b_0c84b98931324c4f9508bbc961a7b552-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Ammar Alhousaini",
        "spoken languages": [
            "Arabic", "English", "Turkish"
        ],
        "programming languages": [
            "Ruby on Rails", "HTML", "CSS"
        ]
    },
    {
        "picture": "206b5b_2622bc8ecc7444a08464acf7b82864ab-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Akram Alfawakheeri"
    },
    {
        "picture": "206b5b_f462280c23754412858057815560a5c1-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Ahmed Nadeem Jenbaz"
    },
    {
        "picture": "206b5b_3037899e1c9f4a818873f7ccda5ed098-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Ibrahim Algabarte"
    },
    {
        "picture": "206b5b_be9f3016c0c04301abbc557749263ece-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Wissam Ghozlan"
    },
    {
        "picture": "206b5b_1c78fb3f4dcd4b1d9ad469b5e1dbc32c-mv2_d_4416_2947_s_4_2.jpg",
        "name": "Khaled Alaswad"
    }
]

export default () => (
    <div>
        <Helmet
            title='ReDI School Students'
        />
        <Toolbar backgroundColor='#fff' color='#000' >
            <NavItem>
                <img src='/static/redi-school-logo-206b5b_40b9f2073c364120a38c225d5b3dabc8-mv2.jpg'
                    style={{
                        maxWidth: '239px',
                        height: 'auto',
                    }}
                />
            </NavItem>
            <Space auto />
            <NavItem children='Home' />
            <NavItem children='Courses' />
            <NavItem children='Students' />
            <NavItem children='Volunteers' />
            <NavItem children='Partners' />
            <NavItem children='About us' />
            <NavItem>
                <img src='/static/social-icons/facebook-icon-30646eb34311104aba036a018b9a226b.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/twitter-icon-d090c1c8997ee76d531500a6002f81a2.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/instagram-icon-d3645e6fa159b8ef24374656fc7b245a.png'
                />
            </NavItem>
        </Toolbar>
        <Container mb={1} p={1} backgroundColor='#CDE6ED'>
            <Heading
                my={1}
                level={1}
                big={false}
                children='This is where your digital career begins'
            />
            <Text
                my={1}
                size={3}
                children='We offer our students IT-skills training, mentorship and job training in partnership with tech-industry leaders.'
            />
            <ButtonOutline
                children='APPLY AS A STUDENT'
                color='black'
            />
        </Container>
        <Banner
            backgroundImage='/static/students/206b5b_fe97cae6fcaf4f44a596c33b9ac07758~mv2_d_4288_2848_s_4_2.jpg'
        >
        </Banner>
        <Container mt={1} p={1} backgroundColor='#CDE6ED'>
            <Heading
                level={1}
                children='HOW CAN I APPLY?'
                my={1}
            />
            <Flex
                wrap
                align='center'
            >
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_0cf9256972894e1ab890b0c908eb6157~mv2.png' />
                    </Box>
                    <Text>
                        READ COURSE LIST SEPT. 27
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_64ed82802e784569982a485e83c672c1~mv2.png' />
                    </Box>
                    <Text>
                        ATTEND INFO WEEK OCT. 5-12
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_ab706bb8ba904ca0a79253b54298f58d~mv2.png' />
                    </Box>
                    <Text>
                        ATTEND "TASTER CLASS" OCT. 8-9
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_e703537141bf4ab99bedf4ea6933447b~mv2.png' />
                    </Box>
                    <Text>
                        REGISTER FOR CLASS OCT. 12
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_ea825263eae545f9b98ce398c4a3a523~mv2.png' />
                    </Box>
                    <Text>
                        JOIN YOUR CLASS OCT. 17 - JAN. 31
                </Text>
                </Box>
            </Flex>
        </Container>
        <Container m={2} >
            <Flex
                wrap
                justify='space-between'
            >
                <Flex
                    column
                    style={{
                        width: 420,
                        minHeight: 384,
                    }}
                >
                    <Heading level={3} my={1} >
                        DO YOU WANT TO LEARN 21st CENTURY SKILLS?
​                    </Heading>
                    <Text pb={1} >
                        We provide several training courses in computer programming, digital entrepreneurship, business intelligence and user interface design - to name but a few. Each course is tailored to individual skill levels. For entry level classes, no IT knowledge is required. On top, you will be offered several workshops and networking opportunities, where you get to collaborate with our partners and alumni.
                   </Text>
                    <Text pb={1} >
                        During the course, you will meet tech industry leaders and growing companies to immerse yourself into the local startup and tech scene. Our education programmes are suited for both beginners and advanced students and designed to help you get a job in the tech- or startup industry.
                    </Text>
                    <Text pb={1} >
                        To support you in your studies we equip you with a laptop and a workstation in a co-working space with internet access, so you can work in project groups.
                    </Text>
                    <Space auto />
                    <Heading level={3} my={1} >
                        GET TO KNOW US AT OUR UPCOMING EVENTS!
​                    </Heading>
                    <Divider />
                    <ButtonOutline
                        children='VIEW EVENTS'
                        color='black'
                        m={2}
                    />
                </Flex>
                <Flex column
                    style={{
                        width: 420,
                        minHeight: 384,
                    }}
                >
                    <Heading level={3} my={1}>
                        AM I ELIGIBLE?
                    </Heading>
                    <Text pb={1}>
                        Do you live in Berlin, Germany?
                    </Text>
                    <Text pb={1}>
                        Are you highly motivated to learn digital skills?
                    </Text>
                    <Text pb={1}>
                        Do you have the time to commit to the three months programme?
                    </Text>
                    <Text pb={1}>
                        Do you speak English?
                    </Text>
                    <Text pb={1}>
                        Are you seeking asylum in Germany?
​                    </Text>
                    <Divider />
                    <ButtonOutline
                        children='APPLY AS A STUDENT'
                        color='black'
                    />
                    <Container my={2} p={2} backgroundColor='#777'
                    >
                        <img src='/static/students/206b5b_bcca47f7892141a28ac8f742bc45a6bf~mv2_d_4968_3725_s_4_2.jpg' />
                        <Heading
                            my={1}
                            level={3}
                            children='STILL HAVE QUESTIONS?'
                            color='black'
                        />
                        <Text pb={1}
                            size={3}
                            children='Please write an e-mail to Mireia, our Student and Volunteeer Liaison.'
                            color='black'
                        />
                        <Divider />
                        <ButtonOutline
                            children='SEND EMAIL'
                            color='black'
                        />
                    </Container>
                </Flex>
            </Flex>
            <Space auto />
            <Heading level={2} align='center' my={1} >
                MEET SOME OF OUR STUDENTS
            </Heading>
            <Space auto />
            <Flex wrap justify='space-between' align='center'>
                {
                    students.map((student, idx) => (
                        <Avatar
                            key={idx}
                            size={150}
                            src={'/static/students/students/' + student.picture}
                            alt={student.name}
                        />
                    ))
                }
            </Flex>
        </Container>
        <Footer m={2} >
            <NavItem
                small={true}
                children='© 2016 By ReDI School'
            />
            |
            <NavItem>
                <a href='#'>IMPRINT & CONTACT</a>
            </NavItem>
            <Space auto />
            <NavItem>
                <img src='/static/social-icons/facebook-icon-30646eb34311104aba036a018b9a226b.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/twitter-icon-d090c1c8997ee76d531500a6002f81a2.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/instagram-icon-d3645e6fa159b8ef24374656fc7b245a.png'
                />
            </NavItem>
        </Footer>
    </div >
)
