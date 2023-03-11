import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SectionNumeral from '../components/section-numeral'
import Speaker from '../components/speaker'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>OnConf template</title>
        <meta property="og:title" content="OnConf template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/playground_assets/circle-background.svg"
            className="home-image"
          />
          <img
            alt="image"
            src="/playground_assets/line-background.svg"
            className="home-image01"
          />
        </div>
        <header data-thq="thq-navbar" className="home-navbar">
          <h2 className="home-text">Haggethonners</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <span className="navLink">The Problem</span>
              <span className="navLink">Demo Video</span>
              <span className="navLink">Solutions</span>
              <span className="navLink">Team</span>
            </nav>
            <button className="home-register button">
              <span>Try the demo</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <h2 className="home-text02">OnConf</h2>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="navLink home-text03">About</span>
                <span className="navLink home-text04">Features</span>
                <span className="navLink home-text05">Pricing</span>
                <span className="navLink home-text06">Team</span>
                <span className="navLink home-text07">Blog</span>
              </nav>
              <div className="home-button-container">
                <button className="home-login button">Login</button>
                <button className="button home-register1">Register</button>
              </div>
              <div className="home-icon-group">
                <div className="home-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/quote-background.svg"
              className="home-background1"
            />
          </div>
        </header>
        <div className="home-hero-content">
          <h3 className="home-text08">
            <span className="home-text09">
              How can DataCamp
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text10">engage</span>
            <span className="home-text11">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text12">&amp;</span>
            <br className="home-text13"></br>
            <span className="home-text14">motivate</span>
            <span className="home-text15">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text16">more learners?</span>
            <br className="home-text17"></br>
          </h3>
          <div className="home-caption">
            <p className="home-caption1">
              <span>
                a solution by the Haggethoners
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>10—11 March 2023 Leuven</span>
            </p>
          </div>
        </div>
      </section>
      <section className="home-notes">
        <div className="home-first">
          <img
            alt="image"
            src="/playground_assets/notes-1-1400w.png"
            className="home-image02 image-notes"
          />
          <div data-aos="fade-up-right" className="home-content">
            <h2 className="home-header">
              <span className="home-text21">
                Some learners find it difficult to find time to learn.
              </span>
              <br></br>
              <span className="home-text23">
                What can DataCamp do about it?
              </span>
              <br></br>
            </h2>
            <div className="home-list">
              <div className="home-note">
                <div className="home-point"></div>
                <p className="home-text25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className="home-note1">
                <div className="home-point1"></div>
                <p className="home-text26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-second">
          <img
            alt="image"
            src="/playground_assets/notes-2-1400w.png"
            className="home-image03 image-notes"
          />
          <div data-aos="fade-up-left" className="home-content01">
            <h2 className="home-header01">
              <span className="home-text27">
                Others might find the courses too hard and tend to get stuck or
                progress too slowly.
              </span>
              <br></br>
              <span className="home-text29">How can DataCamp tackle this?</span>
              <br></br>
            </h2>
            <div className="home-note2">
              <div className="home-point2"></div>
              <p className="home-text31">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="home-third">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="home-image04"
          />
          <div data-aos="fade-up-left" className="home-content02">
            <h2 className="home-header02">
              <span className="home-text32">
                Others might find the courses too hard and tend to get stuck or
                progress too slowly.
              </span>
              <br></br>
              <span className="home-text34">How can DataCamp tackle this?</span>
              <br></br>
            </h2>
            <div className="home-note3">
              <div className="home-point3"></div>
              <p className="home-text36">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote">
        <div className="home-content03">
          <h2 className="home-quoted">
            “Technology is not a silver bullet. It’s only as good as the
            teachers … using it as one more tool to help inspire, and teach, and
            work through problems.”
          </h2>
          <div className="home-author">
            <div className="home-details">
              <span className="home-name">- Barack Obama</span>
            </div>
          </div>
        </div>
        <div className="home-background2"></div>
      </section>
      <section className="home-solutions">
        <div className="home-header03">
          <div className="home-section-numeral">
            <div className="home-divide"></div>
            <p className="home-text37">03</p>
          </div>
          <div data-aos="fade-right" className="home-heading">
            <h2 className="home-title">Solutions</h2>
            <p className="home-caption2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-brands">
          <div className="home-row">
            <div className="home-item">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="home-image05"
              />
              <div className="home-details1">
                <h3 className="home-title01">Networking</h3>
                <p className="home-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-item1">
              <img
                alt="image"
                src="/playground_assets/why-2.svg"
                className="home-image06"
              />
              <div className="home-details2">
                <h3 className="home-title02">Learning</h3>
                <p className="home-description01">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-item2">
              <img
                alt="image"
                src="/playground_assets/why-3.svg"
                className="home-image07"
              />
              <div className="home-details3">
                <h3 className="home-title03">Developing</h3>
                <p className="home-description02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-watch">
        <div className="home-content04">
          <h2 className="home-header04">Watch our Demo video</h2>
          <div className="home-video">
            <video
              src
              poster="/playground_assets/quotes-1-1400w.png"
              className="home-video1"
            ></video>
            <img
              alt="image"
              src="/playground_assets/play.svg"
              className="home-image08"
            />
          </div>
          <button className="button home-register2">
            <span>Try the demo</span>
            <svg viewBox="0 0 1024 1024" className="home-icon12">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </button>
        </div>
        <div className="home-container2"></div>
      </section>
      <section className="home-black">
        <section className="home-join">
          <div className="home-section-numeral1">
            <div className="home-divide1"></div>
            <p className="home-text39">04</p>
          </div>
          <h2 className="home-title04">How DataCamp can get there?</h2>
        </section>
        <img
          alt="image"
          src="/playground_assets/black-vector.svg"
          className="home-image09"
        />
        <section className="home-more">
          <div className="home-header05">
            <div data-aos="fade-right" className="home-heading1">
              <h2 className="home-title05">
                Changes in the UI that will foster a engaged community of
                learners
              </h2>
            </div>
          </div>
          <section className="home-quotes">
            <div className="home-row1">
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9c00bd26-2b25-4545-899a-3a589ead32e4/713dae73-3467-4dbe-9921-dcd8bee65881?org_if_sml=197516"
                className="home-image10"
              />
              <div className="home-row2">
                <div className="home-details4">
                  <p className="home-quote1">
                    “Lorem ipsum dolor sit amet consectetur “
                  </p>
                  <span className="home-author1">The Guard</span>
                </div>
                <img
                  alt="image"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9c00bd26-2b25-4545-899a-3a589ead32e4/9ee768d7-be00-40fa-9b8c-cd2cf8068367?org_if_sml=115978"
                  className="home-image11"
                />
              </div>
            </div>
            <div className="home-row3">
              <div className="home-details5">
                <p className="home-quote2">
                  “Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet“
                </p>
                <span className="home-author2">Wall Street News</span>
              </div>
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9c00bd26-2b25-4545-899a-3a589ead32e4/983070c2-7313-4855-9bbe-fc94c1b52a22?org_if_sml=149896"
                className="home-image12"
              />
              <div className="home-details6">
                <p className="home-quote3">
                  “Duis aute irure dolor in reprehenderit in voluptate velit “
                </p>
                <span className="home-author3">Inside Business</span>
              </div>
            </div>
          </section>
          <h2 className="home-title06">
            Search &amp; Recommendation engine Improvements
          </h2>
          <div className="home-accordions">
            <div className="home-accordion">
              <div className="home-items">
                <div
                  data-role="accordion-container"
                  className="home-element accordion"
                >
                  <div className="home-content05">
                    <span className="home-header06">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description03"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon14"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon16"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element1 accordion"
                >
                  <div className="home-content06">
                    <span className="home-header07">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description04"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container1">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon18"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon20"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element2 accordion"
                >
                  <div className="home-content07">
                    <span className="home-header08">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description05"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container2">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon22"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon24"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-accordion1">
              <div className="home-header09">
                <div className="home-divide2"></div>
                <h3 className="home-title07">Event information</h3>
              </div>
              <div className="home-items1">
                <div
                  data-role="accordion-container"
                  className="home-element3 accordion"
                >
                  <div className="home-content08">
                    <span className="home-header10">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description06"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container3">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon26"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon28"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element4 accordion"
                >
                  <div className="home-content09">
                    <span className="home-header11">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description07"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container4">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon30"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon32"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element5 accordion"
                >
                  <div className="home-content10">
                    <span className="home-header12">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description08"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container5">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon34"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon36"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></DangerousHTML>
            </div>
          </div>
        </section>
      </section>
      <section className="home-team">
        <div className="home-header13">
          <SectionNumeral></SectionNumeral>
          <div data-aos="fade-right" className="home-heading2">
            <h2 className="home-title08">Team</h2>
            <p className="home-caption3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-list1">
          <div className="home-row4">
            <div className="speaker home-row5">
              <Speaker rootClassName="speaker-root-class-name"></Speaker>
              <Speaker
                Image="/playground_assets/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name3"
              ></Speaker>
              <Speaker
                Image="/playground_assets/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name1"
              ></Speaker>
            </div>
          </div>
          <div className="home-row6">
            <div className="home-row7 speaker">
              <Speaker
                Image="/playground_assets/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name15"
              ></Speaker>
              <Speaker rootClassName="speaker-root-class-name14"></Speaker>
              <div className="home-speaker">
                <div className="home-container3"></div>
                <div className="home-deails">
                  <div className="home-position">
                    <div className="home-point4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-sponsors">
        <div className="home-header14">
          <div className="home-section-numeral2">
            <div className="home-divide3"></div>
            <p className="home-text40">03</p>
          </div>
          <div data-aos="fade-right" className="home-heading3">
            <h2 className="home-title09">Sponsors</h2>
            <p className="home-caption4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-brands1">
          <div className="brand">
            <img
              alt="image"
              src="/playground_assets/brand-1.svg"
              className="home-image13"
            />
          </div>
          <div className="brand home-brand1">
            <img
              alt="image"
              src="/playground_assets/brand-2.svg"
              className="home-image14"
            />
          </div>
          <div className="brand home-brand2">
            <img
              alt="image"
              src="/playground_assets/brand-3.svg"
              className="home-image15"
            />
          </div>
          <div className="home-brand3 brand">
            <img
              alt="image"
              src="/playground_assets/brand-4.svg"
              className="home-image16"
            />
          </div>
          <div className="home-brand4 brand">
            <img
              alt="image"
              src="/playground_assets/brand-5.svg"
              className="home-image17"
            />
          </div>
          <div className="home-brand5 brand">
            <img
              alt="image"
              src="/playground_assets/brand-6.svg"
              className="home-image18"
            />
          </div>
          <div className="home-brand6 brand">
            <img
              alt="image"
              src="/playground_assets/brand-7.svg"
              className="home-image19"
            />
          </div>
          <div className="home-brand7 brand">
            <img
              alt="image"
              src="/playground_assets/brand-8.svg"
              className="home-image20"
            />
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-content11">
          <div className="home-details7">
            <h2 className="home-title10">About this website</h2>
            <p className="home-description09">
              Product Calgary brings professionals together to connect, learn
              from each other, find opportunities, and find talent. We started
              as a meetup and have grown to be Alberta’s largest Product
              Management community.
            </p>
          </div>
          <div className="home-socials">
            <img
              alt="image"
              src="/playground_assets/linkedin.svg"
              className="social"
            />
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <img
                alt="image"
                src="/playground_assets/instagram.svg"
                className="home-image22 social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="home-image23 social"
              />
            </a>
          </div>
          <span className="home-copyright">
            <span>
              All Rights Reserved MIT License — Copyright © 2023 Arthur Tavares
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
