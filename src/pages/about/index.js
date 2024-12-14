import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  // services,
} from "../../content_option";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">{dataabout.title}</h2>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">Employer History</h2>
          </Col>
          <Col lg="7">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h2>TASK SOURCE</h2>
                  <p> React Developer / Nextjs Developer</p>
                  <div className="employer_container">
                    <ul className="">
                      <li>Lead and trained a group of developers and gave them training in react ecosystem.</li>
                      <li>Collaborate with cross-functional teams to identify and prioritize features and requirements.</li>
                      <li>Conduct code reviews and provide feedback to improve code quality.</li>
                      <li>Contributed to the improvement of existing codebase by refactoring and optimizing code, resulting in enhanced scalability and maintainability of applications.</li>
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h2>EXERGY INFOTECH</h2>
                  <p> React Developer</p>
                  <div className="employer_container">
                    <ul className="">
                      <li>Developed and maintained software applications</li>
                      <li>Developed and implemented interactive user interfaces using React.js to enhance user experience and improve overall website.</li>
                      <li>Troubleshot and resolved software defects and issues.</li>
                      <li>Contribute to the continuous improvement of software development processes and best practices..</li>
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">Work History</h2>
          </Col>
          <Col lg="7">
            <Timeline sx={{[`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0, },}} >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h5 className="work_histry_h5">Ecommerce and Specialized Websites</h5>
                  <div className="employer_container">
                    <p>Proven track record in developing a wide range of websites, spanning from Ecommerce and AI tools, B2B and B2C Marketplaces.</p>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h5 className="work_histry_h5">Extensive React.js & Next.js Proficiency</h5>
                  <div className="employer_container">
                    <p>In-depth expertise in React.js, showcasing mastery of advanced concepts like functional components, hooks, context API, and
                      Redux for state management. Additionally, demonstrated Next.js proficiency with skills spanning server-side rendering (SSR),
                      static site generation (SSG), dynamic routing, API routes, and performance optimization.</p>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h5 className="work_histry_h5">Seamless Integration of RESTful APIs and Third-Party Services</h5>
                  <div className="employer_container">
                    <p>Extensive Experience with Payment Gateways, Google APIs, Social Media Platforms (such as Instagram, Twitter, LinkedIn),
                      AI Solutions (such as <a href='https://platform.openai.com/docs/overview' target="_blank">Open AI, </a> <a href='https://stablediffusionapi.com/' target="_blank">stable Diffusion,</a>{" "} 
                      <a href='https://www.klevu.com/' target="_blank">Klevu Smart Search</a>), Search Engines(such as Klaviyo, GA4, Woopra), and
                      More in React.js and Next.js Applications.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h5 className="work_histry_h5">Payment Gateway Integration</h5>
                  <div className="employer_container">
                    <p>Skilled in Payment Gateway Integration, adept at seamlessly incorporating platforms such as Paypal, Stripe, Razor Pay, Square, Affirm,
                      PayGate, Autherzise.net and various others.</p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">Skills</h2>
          </Col>
          <Col lg="7">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {skills?.map((data, i) => {
              return (<TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                 {data?.name !=='CSS' ? <TimelineConnector />:''}
                </TimelineSeparator>
                <TimelineContent>
                 {data.name}
                </TimelineContent>
              </TimelineItem>);
            })}
            </Timeline>
          </Col>
        </Row>
        
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h2 className="color_sec py-4">services</h2>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
