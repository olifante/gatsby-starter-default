import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from 'reflexbox'
import 'css/styles.css'

import {
    Banner,
    ButtonOutline,
    Container,
    Divider,
    Footer,
    Heading,
    NavItem,
    Space,
    Text,
    Toolbar,
    Blockquote,
} from 'rebass'

const partners = [
    {
        filepath: '/static/partners/cnn-206b5b_f9eb2f6b61e14af381fd40d97c0a6d61~mv2.png',
        name: 'CNN'
    }, {
        filepath: '/static/partners/handelsblatt-206b5b_baa1962353b54babb53ff0d431f8ae9c~mv2.png',
        name: 'Handelsblatt'
    }, {
        filepath: '/static/partners/forbes-206b5b_85be8c14daff4dbc9b53e51c929aa312~mv2.png',
        name: 'Forbes'
    }, {
        filepath: '/static/partners/the-guardian-206b5b_a1bff4122a704edba4305e4ca73e915c~mv2.jpg',
        name: 'The Guardian'
    }, {
        filepath: '/static/partners/die-zeit-206b5b_3a6744be26374afe98174d41937dc6d6~mv2.png',
        name: 'Die Zeit'
    }, {
        filepath: '/static/partners/bloomberg-206b5b_5079153fccce407985051f88d56495ef~mv2.jpg',
        name: 'Bloomberg'
    }, {
        filepath: '/static/partners/washington-post-206b5b_6d848b48c8844bd597fb8345f46aa906~mv2.jpg',
        name: 'Washington Post'
    }, {
        filepath: '/static/partners/welt-n24-206b5b_7ee4cf0f2ead4fa8a7b804dbf7f202c7~mv2.png',
        name: 'Die Welt'
    }, {
        filepath: '/static/partners/ajplus-206b5b_76f5324b0a1d4481bf0dbdd5e7254c26~mv2.png',
        name: 'AJ+'
    }, {
        filepath: '/static/partners/tedx-innovations-206b5b_009aec41271c410bb79c07c2820c2f70~mv2.jpg',
        name: 'TEDx ,Innovations'
    }, {
        filepath: '/static/partners/co-exist-206b5b_981ef7b40f764642ad396d71646e0df8~mv2.png',
        name: 'Co-exist'
    }, {
        filepath: '/static/partners/deutsche-welle-206b5b_05500378376d46f0bb3342c0b0a12ad8~mv2.jpg',
        name: 'Deutsche Welle'
    },
]

export default () => (
    <div>
        <Helmet
            title='Welcome to ReDI School'
            />
        <Toolbar backgroundColor='#fff' color='#000'>
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
        <Banner
            backgroundImage='/static/banners/redi-school-hero-image-206b5b_cea26d3ad6714acf944c096a9cf3d254~mv2.jpg'
            >
            <Container m={1} backgroundColor='rgba(127, 127, 127, 0.5)'>
                <Heading
                    level={1}
                    big={true}
                    children='ReDI School'
                    />
                <Text
                    size={3}
                    children='Using technology to break down barriers and connect the leaders of tomorrow.'
                    />
                <ButtonOutline
                    children='APPLY AS A STUDENT'
                    color="white"
                    />
                <Space auto />
                <ButtonOutline
                    children='JOIN AS A VOLUNTEER'
                    color="white"
                    />
                <Space />
            </Container>
        </Banner>
        <Container m={2} >
            <Flex
                wrap
                justify='space-between'
                >
                <Flex
                    column
                    style={{
                        width: 320,
                        minHeight: 384,
                    }}
                    >
                    <Space auto />
                    <Heading level={3} >
                        ReDI School of Digital Integration is a non-profit digital school for tech-interested newcomers applying for asylum in Germany.
                    </Heading>
                    <Space auto />
                    <Text>
                        We offer our students high-quality training and the chance to collaborate with the start-up and digital industry.
                    </Text>
                    <Space auto />
                    <Text>
                        Our aim is to provide our students with valuable digital skills and a strong network of tech leaders, students and alumni to help create new opportunities for all.
                    </Text>
                    <Space auto />
                </Flex>
                <Flex column>
                    <Space auto />
                    <Heading level={2}>
                        CO-CREATE WITH US
                    </Heading>
                    <Space auto />
                    <Divider />
                    <Space auto />
                    <ButtonOutline
                        color='black'
                        children='CONTACT US'
                        />
                    <Space auto />
                </Flex>
            </Flex>
            <Space auto />
            <Banner
                backgroundImage='/static/banners/teacher-206b5b_9f4b42eec3df4e628e86334146b5752f~mv2_d_2048_1360_s_2.jpg'
                >
                <Blockquote source='Sebastian Probst Eide, Teacher and CTO of a Berlin based Startup'>
                    Our students are an amazingly talented, resourceful and motivated group. Through this project we help them realize their potential, and give them a clear path into the future. I feel honoured to be allowed to contribute to their growth.
                </Blockquote>
            </Banner>
            <Space auto />
            <Heading level={2} align='center'>
                As seen on
            </Heading>
            <Space auto />
            <Flex wrap justify='space-between' align='center'>
                {
                    partners.map((partner, idx) => (
                        <Box p={1}>
                            <img
                                src={partner.filepath}
                                alt={partner.name}
                                style={{
                                    width: '200px',
                                    height: 'auto'
                                }} />
                        </Box>
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
