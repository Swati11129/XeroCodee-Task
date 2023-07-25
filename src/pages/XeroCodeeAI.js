import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./XeroCodeeAI.css";
const XeroCodeeAI = () => {
  return (
    <div className="xerocodee-ai">
      <img className="xerocodee-ai-child" alt="" src="/group-4.svg" />
      <img
        className="z-2101w020n001946bp15-1-icon"
        alt=""
        src="/123z-2101w020n001946bp15-1@2x.png"
      />
      <div className="integrate-ai-throughout">
        Integrate AI Throughout Your Workflow
      </div>
      <div className="code-doctor">Code Doctor</div>
      <div className="make-processes-where">
        Make processes where AI collaborates with your team throughout the whole
        development process.
      </div>
      <Form.Group className="cta-formgroup">
        <Form.Control type="text" placeholder="Your Email" />
      </Form.Group>
      <Button className="xerocodee-ai-item" variant="outline-primary" size="sm">
        JOIN WAITLIST
      </Button>
      <img className="logo-1-icon" alt="" src="/logo-1@2x.png" />
      <Button
        className="xerocodee-ai-inner"
        variant="outline-primary"
        size="lg"
      >
        XEROCODEE
      </Button>
      <section className="benefits-list" id="deployment">
        <div className="benefits-list-wrapper">
          <div className="benefits-item">
            <img className="duotonestack-icon" alt="" src="/duotonestack.svg" />
            <a className="benefits-info">
              <div className="h4-tailoring-posts">CI/CD Pipeline Generate</div>
            </a>
          </div>
          <div className="devider" />
          <div className="benefits-item">
            <img
              className="duotonestack-icon"
              alt=""
              src="/duotonestack1.svg"
            />
            <a className="benefits-info">
              <div className="h4-tailoring-posts">Build / Deploymnent</div>
            </a>
          </div>
        </div>
      </section>
      <div className="benefits-list1">
        <section className="benefits-list-wrapper1" id="codeanalysis">
          <div className="benefits-item">
            <img
              className="duotonestack-icon"
              alt=""
              src="/duotonestack2.svg"
            />
            <a className="benefits-info">
              <div className="h4-tailoring-posts">Generate Test Cases</div>
            </a>
          </div>
          <div className="devider" />
          <div className="benefits-item">
            <img
              className="duotonestack-icon"
              alt=""
              src="/duotonestack3.svg"
            />
            <a className="benefits-info">
              <div className="h4-tailoring-posts">Code Analysis</div>
            </a>
          </div>
        </section>
      </div>
      <div className="header-content-header">
        <div className="h2-heading-style-h2">
          Boost the speed of your development and test cycles.
        </div>
      </div>
      <div className="p-text-size-medium">
        With AI-driven test case generation and code analysis, problems may be
        found and fixed more quickly.
      </div>
      <div className="automate-all-aspects-container">
        <p className="automate-all-aspects">
          Automate all aspects of your delivery process with
        </p>
        <p className="automate-all-aspects">AI support.</p>
      </div>
      <div className="get-early-access">Get Early Access</div>
      <h5 className="copyright-2023-container">
        <span>{`Copyright © 2023 `}</span>
        <b>EXOCODE TECHNOLOGIES</b>
        <span> | All rights reserved</span>
      </h5>
      <Form.Group className="cta-formgroup1">
        <Form.Control type="text" placeholder="Your Email" />
      </Form.Group>
      <Button className="frame-button" variant="outline-primary" size="sm">
        JOIN WAITLIST
      </Button>
      <div className="line-div" />
      <div className="container">
        <div className="header">
          <b className="h2-heading-style-h21">
            Use AI to handle workflows in your chat platforms.
          </b>
        </div>
        <main className="grid-2-x-2">
          <div className="columns">
            <section className="column" id="taskques">
              <section className="frame-parent">
                <div className="h3-heading-style-h3-parent">
                  <div className="h3-heading-style-h3">ask questions</div>
                  <div className="p-lorem-ipsum-dolor-container">
                    <p className="to-assist-with">{`To assist with managing the development, testing, and `}</p>
                    <p className="automate-all-aspects">
                      <span className="deployment-process-ask">
                        deployment process, ask it questions or issue
                        instructions
                      </span>
                      <span className="span">.</span>
                    </p>
                  </div>
                </div>
                <div className="button">
                  <b className="comming-soon">Comming soon</b>
                </div>
              </section>
            </section>
            <section className="column1" id="execute">
              <div className="frame-group">
                <div className="h3-heading-style-h3-parent">
                  <div className="h3-heading-style-h31">execute</div>
                  <div className="p-lorem-ipsum-dolor-container1">
                    <p className="automate-all-aspects">{`With a single command, you may run a series of tests or install a `}</p>
                    <p className="automate-all-aspects">
                      new version of a programme in a particular setting.
                    </p>
                    <p className="automate-all-aspects">&nbsp;</p>
                  </div>
                </div>
                <div className="button">
                  <b className="comming-soon1">comming soon</b>
                </div>
              </div>
            </section>
          </div>
          <div className="column2" id="info">
            <div className="column-inner">
              <div className="h3-heading-style-h3-parent">
                <div className="h3-heading-style-h32">
                  Fix security concerns more quickly using generated code
                  recommendations
                </div>
                <div className="p-lorem-ipsum-dolor-container1">
                  <p className="automate-all-aspects">
                    With the aid of AI, recognise any security risk and swiftly
                    and effectively fix it.
                  </p>
                  <p className="automate-all-aspects">
                    granting developers the freedom they require to protect
                    their work frequently and early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default XeroCodeeAI;
