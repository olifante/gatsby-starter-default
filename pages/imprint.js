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
        <Container m={1} backgroundColor='#CDE6ED'>
            <Heading
                level={1}
                big={true}
                children='Contact & Imprint'
                />
            <Text
                size={3}
                children='We are looking forward to hearing from you.'
                />
            <ButtonOutline
                children='CONTACT US'
                color="black"
                />

        </Container>
        <Banner
            backgroundImage='/static/banners/206b5b_681e6b87fe394df28148acd6e86ec8c8~mv2_d_7360_4912_s_4_2.jpg'
            >
        </Banner>

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
                    ReDI School of Digital Integration gGmbH
                </Heading>
                <Space auto />
                <Text>
                    Lückhoffstr. 24
                    <br />
                    14129 Berlin
                    <br />
                    Germany
                    <br />
                    Phone.: +49 (0)176 98 23 33 42
                    <br />
                    E-Mail: hello@redi-school.org
                    <br />
                    Online: www.redi-school.org
                    <br />
                    <br />
                    Managing director: Anne Kjaer Riechert
                    <br />
                    Commercial Register: Amtsgericht Berlin Charlottenburg HRB: 174213
                    <br />
                    Registered Office: Berlin
                    <br />
                    USt-IdNr.: DE304512647
                    <br />
                    <br />
                    Visiting address:
                    <br />
                    <br />
                    hub:raum, Winterfeldtstraße 21,
                    <br />
                    10781 Berlin, Germany - See map
​                    <br />
                    <br />
                    * ReDI School of Digital Integration gGmbH does not take any responsibility for the content of linked pages.
                </Text>
                <Space auto />
                <Text>
                    Our aim is to provide our students with valuable digital skills and a strong network of tech leaders, students and alumni to help create new opportunities for all.
                </Text>
                <Space auto />
            </Flex>
            <Flex column>
                <img src="/static/206b5b_09a912e25ea14dddbb1673f21488b5bd~mv2.png" />
            </Flex>
        </Flex>


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
