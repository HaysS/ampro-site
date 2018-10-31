import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import YouTube from 'react-youtube';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import MainContent from "../layouts/MainContent/MainContent";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageImage from "../components/PageImage/PageImage";
import PageDescription from "../components/PageDescription/PageDescription";
import PageEmailForm from "../components/PageEmailForm/PageEmailForm";
import ProductVote from "../components/ProductVote/ProductVote";
import PaginatedContent from "../layouts/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import FancyButton from "../components/FancyButton/FancyButton";

const step1Header1 = 'Services & Products'
const step1Header2 = "We offer a huge variety of custom products"
const step1Text = "Whether you have you have your own design or you need one of our designers to create one for you, we guarantee that you will be satisfied with the finished product each and every time."
const step1BulletPoints = [
  'Political Campaign Supplies',
  'Banners',
  'Buttons',
  'Bumper Stickers',
]

const step2Header1 = 'See How You Can Easily Save'
const step2Header2 = 'Find Where You Can Save'
const step2Text = "Wondering where your money is going? We'll show you. "
const step2BulletPoints = [
    ['Get expert advice on how to maximize your finances.', 'We give you immediate ways to save.'],
    ['Get a step-by-step plan to improve.', 'Learn exactly how to save on your biggest expenses.'], 
    ['Stop doing all the math.', 'Minimize the time it takes for you to save money.'], 
  ]

const step3Header1 = 'Make Changes & Get Results'
const step3Header2 = ''
const step3Text = ''
const step3ImgUrl = './images/professional-cash-rain.gif'

const step4Header1 = 'Become an Exclusive Member.'
const step4Header2 = ''
const step4Text = './images/professional-cash-rain.gif'

const callToAction = 'GET ACCESS NOW!'

const titleLogoUrl = './logos/text-logo.png'
const numPadScreenUrl = './images/num-pad-screen.png'
const allAccountsScreenUrl = './images/all-accounts-screen.png'
const addTransactionScreenUrl = './images/add-transaction-screen.png'
const gifUrl = './images/political-signs-gif-trump.gif'
const iphone6Img = './images/iphone6.png'

const txPins = './images/tx-st-enamel-pins.png'
const variousPins = './images/various-enamel-pins.png'
const bushPins = './images/bush-enamel-pins.png'
const politicStickers = './images/politcal-stickers.png'
const politicButtons = './images/politcal-buttons.png'



const bulletList = (bulletPoints) => {
  const listElements = bulletPoints.map((bulletPoint) => {
    return(
      <li>
        <strong>{bulletPoint}</strong>
      </li>
    )
  })

  return(
    <ul style={{textAlign: 'left'}}>
      {listElements}
    </ul>
  )
}

const bulletList2Col = (bulletPoints) => {
  // console.log(bulletPoints.forEach((bulletPoint) => {console.log(bulletPoint)}))
  // const half_length = Math.ceil(bulletPoints.length / 2);    
  // const leftSide = bulletPoints.splice(0,half_length);
  // const rightSide = bulletPoints.splice(half_length, bulletPoints.length)

  return(
    <div>
      {/*
         style={{display: 'flex', flexDirection: 'row'}}
      <div style={{}}>
        {bulletList(leftSide)}
      </div>
      <div style={{}}>
        {bulletList(rightSide)}
      </div>
      */}
      {bulletList(bulletPoints)}
    </div>
  )
}

const youtubeEmbed = () => {
    const aspectRatio = 16/9
    const height = 465
    const width = height / aspectRatio

    const opts = {
        height: height,
        width: width,
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    return(
        <YouTube
          videoId="xjnxMlR_nFo"
          opts={opts}
          onReady={() => {}}
        />
    )
  }

class IndexTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  showSignup() {    
    if(this.state.width < 768)
      return(
        <div id="signup" style={styles.signupSmall}>
          <h2 style={{color: "black", paddingBottom: '20px'}}>{callToAction}</h2>
          <PageEmailForm />
        </div>
      )
    else
      return(
        <div id="signup" style={styles.signup}>
          <h2 style={{color: "black", paddingBottom: '20px'}}>{callToAction}</h2>
          <PageEmailForm />
        </div>
      )
  }

  render() {
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pathContext;
    const authorsEdges = this.props.data.authors.edges;

    return (

      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={nodes} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template" style={{background: 'black'}}>
            {/* The big featured header */}
            <MainHeader cover={config.siteCover} >
              {/*
              <MainNav overlay={config.siteCover}>
              </MainNav>
              */}
              <div className="vertical" style={{background: 'linear-gradient(to right bottom, #fff, #a0a3ff)'}}>
                <div className="main-header-content inner">
                  <PageImage imageUrl={titleLogoUrl} widthPx={500} />
                  <div className="row">
                    <div className="col left">
                      <PageDescription text={config.siteDescription} />
                      <h3 style={{color: '#7A1F21'}}>
                        CALL ME: (512) 288 - 0070
                        <br />
                        Email: hank@am-pro.me
                      </h3>
                      <Link
                        to="signup"
                        data-offset="-45"
                        spy
                        smooth
                        duration={500}
                      >
                        <FancyButton className={"big-text rounded-border"} text={"Get a Free Quote, Right Now."} />
                      </Link>
                    </div>
                    <div className="col right">
                      <PageImage imageUrl={gifUrl} widthPx={650} rounded={true}/>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="scroll-down icon-arrow-left"
                to="content"
                data-offset="-45"
                spy
                smooth
                duration={500}>
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>
            <MainContent>
              <div id="description" style={styles.mainDiv}>
                <div  style={styles.mainCol}>
                  <h2 className="step-header" style={styles.stepHeader}>{step1Header1}</h2>
                  <hr style={styles.regLine}/>
                  <div className="row">
                    <div className="small-col small-left">
                      <div className="parent stacked-img">
                        <div className="gifImage stacked-img">
                          {/*youtubeEmbed()*/}
                          <img src={addTransactionScreenUrl} className="top-stacked-img" />
                        </div>
                        <div className="image2 stacked-img">
                          <img src={iphone6Img} className="stacked-img" />
                        </div>
                      </div>
                    </div>
                    <div className="small-col small-right text">
                        <h3>{step1Header2}</h3>
                        <p style={{}}>{step1Text}</p>
                        {bulletList2Col(step1BulletPoints)}
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
            <MainContent>
              <div id="portfolio" style={styles.mainDiv}>
                <div  style={styles.mainCol}>
                  <h2 className="step-header" style={styles.stepHeader}>{step2Header2}</h2>
                  <hr style={styles.regLine}/>
                  <div className="row">
                    <div className="small-col small-left">
                          <PageImage imageUrl={politicButtons} width ={400}/>
                          <PageImage imageUrl={txPins} width ={400}/>
                          <PageImage imageUrl={bushPins} width ={400}/>
                    </div>
                    <div className="small-col small-right">
                          <PageImage imageUrl={politicStickers} width ={400}/>
                          <PageImage imageUrl={variousPins} width ={400}/>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
            <MainContent>
              <div id="testimonials" style={styles.mainDiv}>
                <div  style={styles.mainCol}>
                  <h2 className="step-header" style={styles.stepHeader}>{step4Header1}</h2>
                  {/*
                  <h2 style={styles.stepHeader}>{step4Header2}</h2>
                  */}
                  <br />
                    {this.showSignup()}
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
            {/*
            <MainContent>
             <div id="content" style={styles.mainDiv}>
                <div style={styles.mainCol}>
                <div className="row">
                    <div className="small-col small-left">
                      <PageImage imageUrl={'./images/instructor.jpg'} widthPx={350} rounded={true}/>
                    </div>
                    <div className="small-col small-right">
                      <h2 style={{color: "black", paddingBottom: '20px'}}>Hays Stanford</h2>
                      My name is Hays Stanford and I'll be your instructor. You will be provided with step-by-step details on how to build the projects you and your fellow students choose. 
                      <br /><br />
                      I will show you how to break a product idea into small, managable bits. We will then execute each of the steps until the idea has been brought to life.
                    </div>
                  </div>
                  
                  <hr style={styles.regLine}/>
                    {this.showSignup()}
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
          */}
          </div>

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

const styles = {
  mainDiv: {
    textAlign: 'center', 
    maxWidth: "100%", 
    margin: "auto",
    paddingTop: '0px',
  },
  stepHeader: {
    color: "black",
  },
  mainCol: {
    textAlign: 'center', 
    background: "rgba(255, 255, 255, 1)", 
    width: "90%", 
    margin: "auto",
    padding: "3.5% 6%",
  },
  regLine: {
    height: '3px', 
    background: "#dddddd", 
    width: "70%", 
    margin: "40px auto"
  },
  signup: {
    margin: 'auto',
    maxWidth: '1000px',
    padding: '2.5% 0%',
    background: '#d6d6d6'
  },
  signupSmall: {
    margin: 'auto',
    maxWidth: '100%',
    padding: '2.5% 0%',
    background: '#fff'
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          id
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default IndexTemplate;
