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

import students from '../students.json'

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
