import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { ResumeContent } from '../components/ResumeContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About Me</title>
    </Helmet>

    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <ResumeContent className="post-full-content">
              <div className="post-content">
                <h4><span>Int</span>ro</h4>
                <hr></hr>

                <p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Hi, I'm BoSoek Kim. I am a student who is interested in AI and robots.
                  On this page, I'd like to introduce myself. If you want to see my portfolio, click <a href="https://universal-vanilla-3ae.notion.site/694293da940a40158b274c6a7ca61dbe">here</a>.
                </p>

                <br></br>
                <h4><span>Cur</span>rently</h4>
                <hr></hr>

                <p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I am majoring in embedded software at Gwangju Software Meister High School.
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  AI studied because it was interested in NLP and VISION, and robots are studying because they are interested in autonomous robots and humanoids.
                </p>


              </div>
            </ResumeContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;