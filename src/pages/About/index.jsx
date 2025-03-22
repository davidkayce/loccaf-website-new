import React from "react";
import We from "../../assets/images/ACC.jpg";
import "./index.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Prayer from "../../assets/images/Prayer.jpg";
import { Link } from "react-router-dom";
import History from "../../assets/images/history.jpg";
import Footer from "../../components/Footer";
import { useState, useRef } from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Us";
  }, []);

  const [checked, setchecked] = useState("");
  const val = useRef("");
  

  const handleCheck = (e) => {
    val.current = e.currentTarget.id;
    if (checked === val.current) {
      setchecked("");
    } else {
      setchecked(val.current);
    }

    console.log(val.current);
  };


  return (
    <section>
      <div className="aboutCon">
        <div className="aboutz">
          <div className="about">
            <div className="usCon">
              <div className="top">
                    <h1>US</h1>
                  </div>
              <div className="us">
                <div className="us-left">
                  <div className="left-body">
                    <div className="bod-top">
                      <h4>GLORY TO GOD</h4>
                      <h4>EXTRAVAGANT WORSHIP</h4>
                    </div>
                    <div className="body-bot">
                      <p>
                        We are a multicultural church that aims to: connect
                        people with God, improve their personal relationship
                        with the Lord, and provide them with a safe home full of
                        love, attention, and support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="us-right">
                  <img src={We} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="belief-con">
          <div className="belief">
            <h1>WHAT WE BELIEVE</h1>
            <p>
              We live in shifting times but are rooted in eternal truths, the
              teachings of Holy Scripture. Here at City Church District we are
              guided by certain foundational beliefs and shaping values.
            </p>
            <h3>Read more about our Theological Truths below.</h3>
          </div>
        </div>
        <div className="truthCon">
          <div className="truth">
            <h5>THEOLOGICAL TRUTHS</h5>
            <div className="close-divs">
              <div className="container" id="one" onClick={handleCheck}>
                <h1>01</h1>
                <div className="contain">
                  <div className="tops">
                    <h4 id="one"> THE BIBLE</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "one" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "one" ? "show" : ""}`}>
                    <p>
                      We believe in the divine inspiration and authority of the
                      Holy Scriptures. That the Bible is infallible in its
                      declaration, final in its authority, comprehensive and
                      all-sufficient in its provisions. (2 Timothy 3:16, 17; 2
                      Peter 1:20-21).
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" id="two" onClick={handleCheck}>
                <h1>02</h1>
                <div className="contain">
                  <div className="tops">
                    <h4> THE ONE TRUE GOD </h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "two" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "two" ? "show" : ""}`}>
                    <p>
                      We believe in the existence of the One True God, Elohim,
                      maker of the whole universe; indefinable but revealed as
                      Triune God – the Father, the Son and the Holy Spirit
                      (Genesis 1:1; Genesis 1:26; Matthew 3:16, 17; 28:19; 2
                      Corinthians 13:14); one in nature, essence and attributes
                      – Omnipotent (Deuteronomy 6:4; Job 42:2; Isaiah 46:9, 10;
                      Revelation 19:6); Omnipresent (Psalm 139:7-12; 147:5);
                      Omniscient (Job 42:2; Isaiah 46:9, 10; Acts 5:4-5);
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" id="three" onClick={handleCheck}>
                <h1>03</h1>
                <div className="contain">
                  <div className="tops">
                    <h4>THE DEPRAVED NATURE OF HUMANITY</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "three" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "three" ? "show" : ""}`}>
                    <p>
                      We believe that “all have sinned and come short of the
                      glory of God” (Genesis 3:1-19; Isaiah 53:6; Romans 3:23),
                      and are subject to eternal punishment (Matthew 13:41, 42;
                      Romans 6:23), and need Repentance (Acts 2:38; Matthew
                      4:17; Acts 20:21) and Regeneration (John 3:3, 5; Titus
                      3:5).
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="container"
                id="four"
                onClick={handleCheck}
              >
                <h1>04</h1>
                <div className="contain">
                  <div className="tops">
                    <h4>THE SAVIOUR</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "four" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "four" ? "show" : ""}`}>
                    <p>
                      We believe humanity’s need of a Saviour has been met in
                      the person of Jesus Christ (Matthew 1:21; John 4:42; Acts
                      2:36; Ephesians 5:23; Philippians 2:6-11), because of His
                      Deity (Isaiah 9:6, John 1:1; John 20:28; Romans 9:5; Titus
                      2:13-14), Virgin Birth (Isaiah 7:14; Matthew 1:18; Luke
                      1:25-26), Atoning death (Romans 3:25; Hebrews 9:22; 1 John
                      2:2), Resurrection (Matthew 28:5-7; Acts 2:24; Acts 2:36;
                      Acts 10:39-40; 1 Corinthians 15:3-4) and Ascension (Acts
                      1:9-11; Acts 2:33-36), His Abiding Intercession (Romans
                      8:34; Hebrews 7:25) and His second coming to judge the
                      living and the dead (Acts 1:11; Acts 10:42; 1
                      Thessalonians 4:16-18, 2 Timothy 4:1; Revelation 22:12,
                      20)
                    </p>
                  </div>
                </div>
              </div>
              <div className="container"  id="five" onClick={handleCheck}>
                <h1>05</h1>
                <div className="contain">
                  <div className="tops">
                    <h4>DIVINE HEALING</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "five" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "five" ? "show" : ""}`}>
                    <p>
                      We believe that the healing of sicknesses and diseases is
                      provided for God’s people in the atonement (Isaiah 53:4,5;
                      Matthew 8:7-13; 16,17; Mark 16:17,18; Luke 13:10-16; Acts
                      10:38; James 5:14-16). However, the Church is not opposed
                      to medication by qualified medical practitioners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container"   id="six" onClick={handleCheck}>
                <h1>06</h1>
                <div className="contain">
                  <div className="tops">
                    <h4>BAPTISM, GIFTS AND FRUIT OF THE HOLY SPIRIT</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "six" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "six" ? "show" : ""}`}>
                    <p>
                      We believe in the Baptism of the Holy Spirit for all
                      believers with the initial evidence of speaking in tongues
                      (Joel 2:28, 29; Acts 2:3,4,38,39; Acts 10:44-46; Acts
                      19:16), and in the operation of the gifts and fruit of the
                      Holy Spirit (Romans 12:6-8; Galatians 5:22,23 and 1
                      Corinthians 12:8-11; 28-30)
                    </p>
                  </div>
                </div>
              </div>
              <div className="container"  id="seven" onClick={handleCheck}>
                <h1>07</h1>
                <div className="contain">
                  <div className="tops">
                    <h4> TITHES AND OFFERINGS</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "seven" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "seven" ? "show" : ""}`}>
                    <p>
                      We believe in tithing and in the giving of freewill
                      offerings towards the furtherance of the cause of the
                      Kingdom of God. We believe that God blesses a cheerful
                      giver (Genesis 14:18-20; Malachi 3:6-10; Matthew 23:23;
                      Acts 20:35; Hebrews 7:1-4; I Corinthians 16:1, 2; 2
                      Corinthians 9:1-9).
                    </p>
                  </div>
                </div>
              </div>
              <div className="container"  id="eight" onClick={handleCheck}>
                <h1>08</h1>
                <div className="contain">
                  <div className="tops">
                    <h4>THE SECOND COMING AND THE NEXT LIFE</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "eight" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "eight" ? "show" : ""}`}>
                    <p>
                      We believe in the second coming of Christ and the
                      resurrection of the dead, both the saved and the unsaved.
                      They that are saved to the resurrection of life and the
                      unsaved to the resurrection of damnation (Daniel 12:2;
                      Mark 13:26; John 5:28, 29; Acts 1:11; Acts 10:42; Romans
                      2:7-11; Romans 6:23).
                    </p>
                  </div>
                </div>
              </div>
              <div className="container"  id="nine" onClick={handleCheck}>
                <h1>09</h1>
                <div className="contain">
                  <div className="tops">
                    <h4>MARRIAGE AND FAMILY LIFE</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${
                        checked === "nine" ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className={`close ${checked === "nine" ? "show" : ""}`}>
                    <p>
                      We believe in the institution of marriage as a union
                      established and ordained by God for the lifelong, intimate
                      relationship between a man as husband and a woman as wife
                      as biologically defined at birth. We believe that God
                      instituted marriage primarily for mutual help, fellowship
                      and comfort that one ought to have for the other and for
                      the honourable procreation of children, and their training
                      in love, obedience to the Lord and responsible
                      citizenship. (Genesis 2:18, Genesis 21-25; Matthew 19:4-6;
                      1 Corinthians 7:1-2).
                    </p>
                  </div>
                </div>
              </div>
              <div className="container last"  id="ten" onClick={handleCheck}>
                <h1>10</h1>
                <div className="contain">
                  <div className="tops">
                    <h4>REPENTANCE, JUSTIFICATION AND SANCTIFICATION</h4>
                    <IoIosCloseCircleOutline
                      className={`number1 ${checked === "ten" ? "rotate" : ""}`}
                    />
                  </div>
                  <div className={`close ${checked === "ten" ? "show" : ""}`}>
                    <p>
                      We believe all humans have to repent and confess their
                      sins before God (Luke 15:7; Acts 2:38; Acts 3:19; Acts
                      17:30), and believe in the vicarious death of Jesus Christ
                      before they can be justified before God (Romans 4:25;
                      5:1). We believe in the sanctification of the believer
                      through the working of the Holy Spirit (1 Corinthians
                      1:30; 6:11) and God’s gift of eternal life to the believer
                      (John 17:2, 3; John 10:27, 28; Romans 6:23b; 1John
                      5:11-13)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <div className="about">
            <h1>ABOUT OUR MISSION</h1>
            <p>
              The mission of Amsterdam City Church is to go into the world and
              preach the Gospel, to share the grace of our Lord Jesus Christ, to
              spread the Love of God and to show the sweet fellowship of the
              Holy Spirit. God has reconciled us to Himself through Jesus Christ
              and He has given us the ministry of reconciling Him back to you (2
              Corinthians 5:18-21). We are a glorious church to possess the
              nation.
            </p>
          </div>
        </div>
        <div className="us-picsCon">
          <div className="us-pics">
            <div className="pics">
              <div className="uspic1">{/* <img src={Prayer} alt="" /> */}</div>
              <div className="uspic2">
                <div className="overlaid"></div>
                <img src={Prayer} alt="" />
              </div>
            </div>

            <div className="uspic-contents">
              <h1>WHY YOU SHOULD JOIN US</h1>
              <p>
                Amsterdam City Church exist to lead people into a growing
                relationship with Jesus Christ. We want to help you discover
                what it means to have a RELATIONSHIP with Jesus Christ. Our
                mission is to spread the word of God and His love. We believe
                that the more you know Jesus the more you know you!
              </p>
            </div>
          </div>
        </div>
        <div className="weCon">
          <div className="leftCon">
            <div className="left">
              <h4>We are: for God. for people. for the city. for the world.</h4>
              <p>
                Amsterdam City Church (ACC) is a church that was opened on
                Sunday 4 October 2020. The church consists of many young people
                and is one of the many branches of The Church of Pentecost
                Holland. Amsterdam City Church is also referred to as ACC.
              </p>
              <p>
                Amsterdam City Church is a multicultural church that aims to:
                connect people with God, improve their personal relationship
                with the Lord, and provide them with a safe home full of love,
                attention, and support.
              </p>
              <p>
                The City Church district’s overseer is John Angoh who also
                presides at ACC.
              </p>
              <p>
                The national head of The Church of Pentecost Holland is Apostle
                Samuel Obeng Eshun.
              </p>
              <p>
                Since our inception we have seen God do miraculous things. We
                want to personally invite you to come be part of the journey.
              </p>
              <div className="sunday">
                <h5>Our church services take place every week on:</h5>
                <p>Fridays from 20:00u. till 21:30u.</p>
                <p>Sundays from 10:45u. till 12:30u.</p>
              </div>
            </div>
           <Link to="/amsterdam/sundays">
              JOIN US FOR A SUNDAY &rarr;
            </Link>
          </div>
          <div className="right">
            <div className="top">
              <h1>WHO WE ARE</h1>
            </div>
            <div className="pic">
              <img src={History} alt=""/>
            </div>
          </div>
        </div>
        <div className="vision-con" id="vision">
          <div className="vision">
            <h1>OUR VISION</h1>
            <p>
              The vision of Amsterdam City Church is to spread the love of God,
              which is the Gospel of our Lord Jesus Christ, that all men may be
              saved and find their true identity in Christ. (John 3:16).
            </p>
            <p>
              We believe that the more you know Jesus, the more you know you.
              Because ‘in Him, we live and move and have our very being. Our aim
              is that all men may grow in the gifts of the Holy Spirit so that
              we can experience the power of Christ and bear the fruit of the
              Holy Spirit to serve the community, nation, and the world at
              large. In fact, it is all about Jesus. Jesus is the answer to all
              questions.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
