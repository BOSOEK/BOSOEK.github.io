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
                  Hi, I'm Soohwan Kim. I am the co-founder and A.I. engineer of <a href="http://www.tunib.ai">TUNiB</a>.
                  On this page, I would like to introduce myself in a free format, not in a hard format like resume. If you want to see my resume, check <a href="https://sooftware.io/resume">here</a>.
                </p>

                <br></br>
                <h4><span>Cur</span>rently</h4>
                <hr></hr>

                <p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  At TUNiB, I'm trying to make a global persona chatbot.
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Meanwhile, I am also working on open-source activities for the development of natural language processing in Korea. You can check my github (http://github.com/sooftware) to see what I've done and I'm doing.
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
