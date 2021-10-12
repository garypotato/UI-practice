import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="title">
          <p>Panthera</p>
        </div>
        <div className="button-group">
          <button>Corporate site</button>
          <button>Careers</button>
          <button>Privacy</button>
          <button>Terms</button>
        </div>
        <div className="sing-in">
          <button>Sign Up</button>
          <button>Log in</button>
        </div>
      </header>

      <div className="context">
        <div className="career">
          <div className="join-us">
            <p>This is a great opportunity to join our professional team.</p>
          </div>

          <div className="see-more">
            <div>
              <p>
                Are you looking to join a dynamic and rapidly growing financial
                services brand? Keep reading to learn more, or scroll down to
                view our available positions.
              </p>
            </div>

            <button>See more Jobs</button>
          </div>
        </div>

        <div className="jobs">
          <div className="job-card">
            <div className="job-title">
              <p>Junior Web Developer</p>
            </div>
            <div className="job-picture">
              <div className="job-picture-1"></div>
            </div>
          </div>
          <div className="job-card">
            <div className="job-title">
              <p>Product Owner </p>
            </div>
            <div className="job-picture">
              <div className="job-picture-2"></div>
            </div>
          </div>
          <div className="job-card">
            <div className="job-title">
              <p>Customer Relationship Officer </p>
            </div>
            <div className="job-picture">
              <div className="job-picture-3"></div>
            </div>
          </div>
        </div>

        {/* <div className="about-panthera">
          <div className="about-description">
            <p>Company Info.</p>
            <p>Panthera Finance</p>
            <p>
              is a rapidly growing Finance company of over 500 staff, our HQ is
              based in Brisbane with offices up and down the East Coast. We
              invest in technology to keep ourselves at the forefront of our
              industry and focus on development to take advantage of new
              opportunities in the marketplace.
            </p>
            <button>Company site</button>
          </div>
          <div>
            <div className="about-picture"></div>
          </div>
          <div className="mask"></div>
        </div> */}

        {/* <div className="recruit-title">
          <div>
            <p>Junior Web Developer | React & UI/UX</p>
            <div className="recruite-icon">
              <span>Indeed</span>
              <span>Seek</span>
              <span>LinkIn</span>
              <button>Apply</button>
            </div>
          </div>
        </div> */}

        {/* <div className="job-description">
          <div className="about-you">
            <div>About you</div>
            <ul>
              <li>
                An understanding of critical CSS techniques (CSS in JS, Styled
                components, CSS modules etc)
              </li>
              <li>Understanding of good UI/UX principles</li>
              <li>Basic knowledge and literacy in React</li>
              <li>A passion for Front-end development</li>
              <li>Basic knowledge of JavaScript</li>
              <li>Proclivity towards Photoshop/Illustrator</li>
              <li>
                Self-motivated with the ability to work independently, or with a
                team
              </li>
            </ul>
          </div>

          <div className="desired-skill">
            <div>Additional desired attributes:</div>
            <ul>
              <li className="active">
                <p>
                  12 months working for a start-up or similar fast paced growing
                  company
                </p>
              </li>
              <li>
                <p>Experience with Typescript</p>
              </li>
              <li>
                <p>Experience with NodeJs</p>
              </li>
              <li>
                <p>Experience with writing MS-SQL queries</p>
              </li>
              <li>
                <p>HTML email (MJML)</p>
              </li>
            </ul>
          </div>

          <div className="work-style">
            <div>What will your typical day look like?</div>
            <ul>
              <div className="time-item">
                <div className="circle"></div>
                <li>Daily 10min stand-up meetings</li>
              </div>

              <div className="time-item">
                <div className="circle"></div>
                <li>
                  Comment on new and existing customer facing websites with
                  ideas on how we can improve the design & UI/UX
                </li>
              </div>

              <div className="time-item">
                <div className="circle"></div>
                <li>Implement front-end code in React</li>
              </div>

              <div className="time-item">
                <div className="circle"></div>
                <li>Support bug fixing</li>
              </div>

              <div className="time-item">
                <div className="circle last-circle"></div>
                <li>Create designs or graph</li>
              </div>
            </ul>
          </div>

          <div className="benefits">
            <div>What’s in it for you?</div>
            <ul>
              <li className="active">
                Growing company with opportunities for progression – want to be
                a full-stack developer? We can help mentor you.
              </li>
              <li>Work from home arrangements can be provided</li>
              <li>Laptop will be provided</li>
              <li>Free online training courses provided</li>
              <li>Learn about how the finance industry operates</li>
            </ul>
          </div>
        </div> */}

        {/* <div className="homework">
          <h1>Interested?</h1>
          <div>
            <p>
              If this sounds like the type of position you would be interested
              in, then Fork this pen and style it up.
            </p>
            <p>
              There are no rules – we just want to see your creative design
              ability and basic React skills. Once you are happy with it, please
              send it to amcarthur@pantherafinance.com.au with your CV attached.
            </p>
          </div>
        </div> */}
      </div>

      {/* <footer>
        <div>
          <p>Panthera Finance</p>
          <p>© 2021 Panthera Finance Pty Ltd</p>
        </div>
      </footer> */}
    </div>
  );
};

export default App;
