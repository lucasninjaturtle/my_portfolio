import React from "react";
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from "../components/layout";
import BgImage from 'gatsby-background-image';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 45% 0;

  @media only screen and (min-width: 770px) {
    width: 65%;
    height: 100vh;
    padding: 0;
  }
`

const StyledLink = styled.a`
  padding:3rem;
`

const AboutHeader = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 1.3rem;

  & > h2 {
    margin-right: 5%;
  }
`

const MyStyledImage = styled(BgImage)`
  width: 180px;
  height: 180px;
  margin: 2%;
  float: right;

  &:before {
    border-radius: 50%;
  }

  @media only screen and (min-width: 770px) {
    width: 220px;
    height: 220px;
  }
`
const LinkIcon = styled(FontAwesomeIcon)`
  margin: 0 5% 0 0;
  font-size: 1.3rem;
`

const About = ({ data }) => (
  
  <Layout pageTitle="About Me">
    <AboutWrap>
      <div>
        <AboutHeader>
          <h2>Hi!/Hola!</h2>
          <span>My name is Lucas</span>
          <StyledLink href='https://github.com/lucasninjaturtle' target="_blank" rel="noopener noreferrer">
                <LinkIcon icon={faGithub}/>
              
              </StyledLink>
              <StyledLink href='https://www.linkedin.com/in/laguero/' target="_blank" rel="noopener noreferrer">
                
                <LinkIcon icon={faLinkedin}/>
              </StyledLink>
        </AboutHeader>
        <MyStyledImage id="my-photo" fluid={data.file.childImageSharp.fluid} />
        <p>I'm a Full stack developer. Before I became a programmer I've worked for over 10 years on implementation projects and maintenance on ERP systems as functional/technical consultant and Team Leader. I changed my rol because I feel very passionate about technology, developing and solving problems with it.</p>
        
      </div>
      
    </AboutWrap>
    
  </Layout>
)

export const pageQuery = graphql`
  query {
    file(name: {eq: "me"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About;
