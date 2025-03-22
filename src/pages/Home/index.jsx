import { useEffect, useState } from "react";
import Locations from "./Locations";
import Events from "./Events";
import Footer from "../../components/Footer";
import Convention from "../../assets/images/convention-dance.jpg";
import "./index.scss";

const Home = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    document.title = "LOCCAF";
  }, []);

  return (
    <section>
      <div className="main">
        <div 
          className="video" 
          onMouseEnter={() => setHidden(false)} 
          onMouseLeave={() => setHidden(true)}
        >
          <div className="overlay"></div>
          <img src={Convention} alt="A picture of people dancing on the stage duriing a LOCCAF convention" srcset="" />
          <div className="contents">
            <div className="in-contents" hidden={hidden}>
              <div className="watch">
                <h1>LEARN <br />MORE</h1>
              </div>
            </div>
            <div className="join">
              <div className="text">
                <h5>JOIN US FOR OUR INTERNATIONAL CONVENTION</h5>
                <p>
                  At Precious Palm Royal Hotel - Ugbowu Lagos Road, Benin City
                </p>
                <p>Wed, 30th April - Sat, 3rd May 2025</p>
                <h4>
                  <a href="https://forms.gle/9SYSwz7jZmLpLUF38" target="_blank" rel="noreferrer noopener">JOIN US &rarr;</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Place in the church */}
        <div className="contain">
          <Locations />
        </div>

        <aside id="loccafmusic" className="uui-section_layout06">
          <div className="uui-page-padding-3">
            <div className="uui-container-large-3">
              <div className="uui-padding-vertical-xhuge-2">
                <div className="w-layout-grid uui-layout06_component">
                  <div className="uui-layout06_content">
                    <h2 className="uui-heading-medium-3">
                      <strong className="large-heading">
                        LIGHTING UP OUR WORLD
                      </strong>
                    </h2>
                    <div className="uui-space-xsmall-2"></div>
                    <div className="uui-text-size-large-2">
                      Heavenly sounds released by the LOCCAF Music Ministry.
                      Give it a listen and be blessed by it. Available on all
                      streaming platforms.
                    </div>
                    <div className="uui-space-large-2"></div>
                    <div className="uui-text-size-medium-2">
                      Listen on your favourite platform
                    </div>
                    <div className="uui-layout06_logo-row">
                      <a
                        href="https://www.youtube.com/@LOCCAFMUSICMINISTRY"
                        target="_blank"
                        className="w-inline-block"
                        rel="noreferrer"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/649ff5dfa2d4948b97e91fd4/64d02a2d2bf364da3173c6c7_youtube.png"
                          loading="lazy"
                          alt="Company logo"
                          className="uui-layout06_logo"
                        />
                      </a>
                      <a
                        href="https://open.spotify.com/album/4PX1idLHflaQTRMpqsGezC"
                        target="_blank"
                        className="w-inline-block"
                        rel="noreferrer"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/649ff5dfa2d4948b97e91fd4/64d0db07da34a6520b190cdc_spotify.svg"
                          loading="lazy"
                          alt="Company logo"
                          className="uui-layout06_logo"
                        />
                      </a>
                      <a
                        href="https://music.apple.com/us/album/lighting-up-our-world/1685561662?uo=4&amp;app=music&amp;at=1001lry3&amp;ct=dashboard"
                        target="_blank"
                        className="w-inline-block"
                        rel="noreferrer"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/649ff5dfa2d4948b97e91fd4/64d02c3dcbf69e8894d60d80_music%20(1).png"
                          loading="lazy"
                          alt="Company logo"
                          className="uui-layout06_logo"
                        />
                      </a>
                      <a
                        href="https://on.soundcloud.com/eFhiQ"
                        target="_blank"
                        className="w-inline-block"
                        rel="noreferrer"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/649ff5dfa2d4948b97e91fd4/64d02c38af049d26cd5b121e_icons8-soundcloud-logo-144.png"
                          loading="lazy"
                          alt="Company logo"
                          className="uui-layout06_logo"
                        />
                      </a>
                      <a
                        href="https://music.youtube.com/playlist?list=OLAK5uy_k8r2AMyM85Ii1o3aosoLDQGUxPMASlU3o&amp;feature=share"
                        target="_blank"
                        className="w-inline-block"
                        rel="noreferrer"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/649ff5dfa2d4948b97e91fd4/64d02c381c7aed371a78c629_icons8-youtube-music-144.png"
                          loading="lazy"
                          alt="Company logo"
                          className="uui-layout06_logo"
                        />
                      </a>
                      <a
                        href="https://www.deezer.com/album/435844467"
                        target="_blank"
                        className="w-inline-block"
                        rel="noreferrer"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/649ff5dfa2d4948b97e91fd4/64d02c3db6c6593d16f9b822_deezer%20(1).png"
                          loading="lazy"
                          alt="Company logo"
                          className="uui-layout06_logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="uui-layout06_image-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/649ff5dfa2d4948b97e91fd4/64d0da5c7c26d4d92272d0f9_LOCCAF%20Album%202023.jpg"
                      loading="lazy"
                      width="1440"
                      alt="Dashboard mockup"
                      className="uui-layout06_image shadow-xlarge"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <Events />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
