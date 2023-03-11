import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './demo.css'

const Demo = (props) => {
  return (
    <div className="demo-container">
      <Helmet>
        <title>Demo - OnConf template</title>
        <meta property="og:title" content="Demo - OnConf template" />
      </Helmet>
      <section className="demo-hero">
        <div className="demo-background">
          <img
            alt="image"
            src="/playground_assets/circle-background.svg"
            className="demo-image"
          />
          <img
            alt="image"
            src="/playground_assets/line-background.svg"
            className="demo-image01"
          />
        </div>
        <header data-thq="thq-navbar" className="demo-navbar">
          <h2 className="demo-text">Haggethonners</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="demo-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="demo-nav"
            >
              <span className="navLink">The Problem</span>
              <span className="navLink">Demo Video</span>
              <span className="navLink">Solutions</span>
              <span className="navLink">Team</span>
            </nav>
            <button className="demo-register button">
              <span>Go Back</span>
              <svg viewBox="0 0 1024 1024" className="demo-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="demo-burger-menu">
            <svg viewBox="0 0 1024 1024" className="demo-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="demo-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="demo-nav1"
            >
              <div className="demo-container1">
                <h2 className="demo-text02">OnConf</h2>
                <div data-thq="thq-close-menu" className="demo-menu-close">
                  <svg viewBox="0 0 1024 1024" className="demo-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="demo-nav2"
              >
                <span className="navLink demo-text03">About</span>
                <span className="navLink demo-text04">Features</span>
                <span className="navLink demo-text05">Pricing</span>
                <span className="navLink demo-text06">Team</span>
                <span className="navLink demo-text07">Blog</span>
              </nav>
              <div className="demo-button-container">
                <button className="demo-login button">Login</button>
                <button className="button demo-register1">Register</button>
              </div>
              <div className="demo-icon-group">
                <div className="demo-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="demo-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="demo-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="demo-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/quote-background.svg"
              className="demo-background1"
            />
          </div>
        </header>
        <div className="demo-demo-area">
          <div className="demo-header">
            <div data-aos="fade-right" className="demo-heading">
              <h2 className="demo-title">Demo</h2>
              <p className="demo-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="demo-container2">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="demo-input input search"
            />
            <button className="demo-register2 button">
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>
      <section className="demo-solutions">
        <div className="demo-header01">
          <div className="demo-section-numeral">
            <div className="demo-divide"></div>
            <p className="demo-text09">01</p>
          </div>
          <div data-aos="fade-right" className="demo-heading1">
            <h2 className="demo-title01">Solutions</h2>
            <p className="demo-caption1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="demo-brands">
          <div className="demo-row">
            <div className="demo-item">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="demo-image02"
              />
              <div className="demo-details">
                <h3 className="demo-title02">Networking</h3>
                <p className="demo-description">
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
            <div className="demo-item1">
              <img
                alt="image"
                src="/playground_assets/why-2.svg"
                className="demo-image03"
              />
              <div className="demo-details1">
                <h3 className="demo-title03">Learning</h3>
                <p className="demo-description01">
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
            <div className="demo-item2">
              <img
                alt="image"
                src="/playground_assets/why-3.svg"
                className="demo-image04"
              />
              <div className="demo-details2">
                <h3 className="demo-title04">Developing</h3>
                <p className="demo-description02">
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
      <section className="demo-black">
        <section className="demo-join">
          <div className="demo-section-numeral1">
            <div className="demo-divide1"></div>
            <p className="demo-text10">02</p>
          </div>
          <h2 className="demo-title05">How DataCamp can get there?</h2>
        </section>
        <img
          alt="image"
          src="/playground_assets/black-vector.svg"
          className="demo-image05"
        />
        <section className="demo-more">
          <div className="demo-header02">
            <div data-aos="fade-right" className="demo-heading2">
              <h2 className="demo-title06">
                Changes in the UI that will foster a engaged community of
                learners
              </h2>
            </div>
          </div>
          <section className="demo-quotes">
            <div className="demo-row1">
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9c00bd26-2b25-4545-899a-3a589ead32e4/713dae73-3467-4dbe-9921-dcd8bee65881?org_if_sml=197516"
                className="demo-image06"
              />
              <div className="demo-row2">
                <div className="demo-details3">
                  <p className="demo-quote">
                    “Lorem ipsum dolor sit amet consectetur “
                  </p>
                  <span className="demo-author">The Guard</span>
                </div>
                <img
                  alt="image"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9c00bd26-2b25-4545-899a-3a589ead32e4/9ee768d7-be00-40fa-9b8c-cd2cf8068367?org_if_sml=115978"
                  className="demo-image07"
                />
              </div>
            </div>
            <div className="demo-row3">
              <div className="demo-details4">
                <p className="demo-quote1">
                  “Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet“
                </p>
                <span className="demo-author1">Wall Street News</span>
              </div>
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9c00bd26-2b25-4545-899a-3a589ead32e4/983070c2-7313-4855-9bbe-fc94c1b52a22?org_if_sml=149896"
                className="demo-image08"
              />
              <div className="demo-details5">
                <p className="demo-quote2">
                  “Duis aute irure dolor in reprehenderit in voluptate velit “
                </p>
                <span className="demo-author2">Inside Business</span>
              </div>
            </div>
          </section>
          <div className="demo-accordions">
            <div className="demo-accordion">
              <div className="demo-header03">
                <div className="demo-divide2"></div>
                <h3 className="demo-title07">Event information</h3>
              </div>
              <div className="demo-items">
                <div
                  data-role="accordion-container"
                  className="demo-element accordion"
                >
                  <div className="demo-content">
                    <span className="demo-header04">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="demo-description03"
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
                  <div className="demo-icon-container">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="demo-icon12"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="demo-icon14"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="demo-element1 accordion"
                >
                  <div className="demo-content1">
                    <span className="demo-header05">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="demo-description04"
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
                  <div className="demo-icon-container1">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="demo-icon16"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="demo-icon18"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="demo-element2 accordion"
                >
                  <div className="demo-content2">
                    <span className="demo-header06">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="demo-description05"
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
                  <div className="demo-icon-container2">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="demo-icon20"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="demo-icon22"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="demo-accordion1">
              <div className="demo-header07">
                <div className="demo-divide3"></div>
                <h3 className="demo-title08">Event information</h3>
              </div>
              <div className="demo-items1">
                <div
                  data-role="accordion-container"
                  className="demo-element3 accordion"
                >
                  <div className="demo-content3">
                    <span className="demo-header08">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="demo-description06"
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
                  <div className="demo-icon-container3">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="demo-icon24"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="demo-icon26"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="demo-element4 accordion"
                >
                  <div className="demo-content4">
                    <span className="demo-header09">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="demo-description07"
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
                  <div className="demo-icon-container4">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="demo-icon28"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="demo-icon30"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="demo-element5 accordion"
                >
                  <div className="demo-content5">
                    <span className="demo-header10">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="demo-description08"
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
                  <div className="demo-icon-container5">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="demo-icon32"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="demo-icon34"
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
      <footer className="demo-footer">
        <div className="demo-content6">
          <div className="demo-details6">
            <h2 className="demo-title09">About this website</h2>
            <p className="demo-description09">
              Product Calgary brings professionals together to connect, learn
              from each other, find opportunities, and find talent. We started
              as a meetup and have grown to be Alberta’s largest Product
              Management community.
            </p>
          </div>
          <div className="demo-socials">
            <img
              alt="image"
              src="/playground_assets/linkedin.svg"
              className="social"
            />
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="demo-link4"
            >
              <img
                alt="image"
                src="/playground_assets/instagram.svg"
                className="demo-image10 social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="demo-link5"
            >
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="demo-image11 social"
              />
            </a>
          </div>
          <span className="demo-copyright">
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

export default Demo
