import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { JudgemodalPage } from '../judgemodal/judgemodal';
/*
  Generated class for the Thejudges page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thejudges',
  templateUrl: 'thejudges.html'
})
export class ThejudgesPage {

  judges:Array<{id:number,name:string,title:string,
  pic:string,descripion:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public modalCtrl: ModalController) {
    this.judges = [
      {
        id: 0,
        name: "Glen Caruso",
        title:"Chief Revenue & Marketing Officer - UserIQ",
        pic: 'assets/pictures/judges/glencaruso.png',
        descripion: "Glen is an established entrepreneur, educator, and marketing automation & SaaS expert.  He's worked at leading digital media companies throughout his career and has helped launch and sell two technology startups. Currently, he's Chief Revenue Officer for UserIQ – a technology startup that’s part of the Advanced Technology Development Center located on the Georgia Institute of Technology campus.  UserIQ is a SaaS offering that acts as a Customer Growth Platform for other B2B SaaS companies. Glen’s background includes positions with Rocket Fuel, Gannett, BLiNQ Media, Tremor Video, TACODA, Microsoft/MSN, AOL, Disney Internet Group, Yahoo!, weather.com, Turner Broadcasting and JWT/NY. He's also Past President of the American Marketing Association and teaches Programmatic Advertising and Marketing Automation at the University of Georgia-Athens. Glen is a frequent speaker and moderator for business organizations and universities and talks about marketing innovation.  He’s also a former standup comedian."
      },
      {
        id:1,
        name:"Elizabeth Clubb",
        title:"Founder of Kismet Associates",
        pic:'assets/pictures/judges/elizabethcubb.png',
        descripion:"Elizabeth W. Clubb serves as founder and principal of Kismet Associates, an innovation and growth strategy firm. She has more than 25 years of results in strategy development, innovation and emerging business models. She couples her corporate experiences with an expertise in entrepreneurial business models and design thinking to bring unexpected and game-changing results. Elizabeth has been a partner and Chief Strategy Officer in a software development firm, President and Chief Strategy Officer of BrightHouse, an innovation and strategy firm, a Managing Consultant with Zyman Group and has held a variety of corporate roles with Cisco Systems, RockTenn and The Mead Corporation. Elizabeth earned her MBA from Goizueta School of Business at Emory University and her BA in English Literature from Connecticut College."
      },
      {
        id:2,
        name:"Rob Crews",
        title:"CMO- Rob Crew Marketing LLC",
        pic:'assets/pictures/judges/robcrew.png',
        descripion:"Rob Crews is a data-driven CMO with deep experience in the restaurant industry.  He is the principal at Rob Crews Marketing, a firm that connects technology firms with restaurant companies.  Previously, he was the Chief Marketing Officer of Ovation Brands, the parent company of Old Country/Hometown Buffet, and Ryan's Steakhouses.  Rob was the CMO of Church's Chicken where he built a delivery agnostic CRM platform, and prior to that, ran international marketing for The Wendy’s Arby’s Group. Rob holds an IDM Award in Mobile Marketing from the Institute of Direct and Digital Marketing in the United Kingdom."
      },
      {
        id:3,
        name:"Russ Davis",
        title:"CMO- Rob Crew Marketing LLC",
        pic:'assets/pictures/judges/robcrew.png',
        descripion:"The YMCA of Metro Atlanta is pleased to introduce Russ Davis as the chief marketing officer beginning June 1. In this role, he will lead the marketing strategy, programs and initiatives for the organization; enrich the member experience; build partner relationships; and foster awareness of the Y brand and impact throughout Atlanta. Previously, Russ was director of marketing and public relations for the Northside Hospital healthcare system. With more than 19 years of experience in marketing and communications at Northside, he was an integral member of the hospital’s leadership team. Russ provided strategic direction and oversight for all communications, marketing, advertising,  corporate partnerships, and alliances for three hospitals and more than 150 outpatient service  delivery locations. He was responsible for system-wide branding and served as the hospital’s official media spokesperson. He also was instrumentally involved in public affairs, government and community relations efforts. Before joining Northside Hospital, Russ was an account executive at GCI Group, an Atlanta public  relations firm. While there, he provided communications and public relations expertise to many of  Atlanta’s largest companies and corporate partners for the 1996 Centennial Olympic Games. In addition to his marketing and communications expertise, Russ brings a leadership style of  transparency, flexibility, strategic collaboration, and a commitment to achieving maximum results. As the CMO, he will support the organization’s overall goals and provide insight and offer strategic  communications solutions to the Y’s leadership team. “I am excited to be able to continue to use my marketing and communications skills for a purpose that  really matters,” says Russ. “I look forward to joining the Y, where improving lives and caring for others are at the heart of the mission.” Russ has a broad history of volunteer involvement and civic leadership. Currently, he is a Sandy Springs/Perimeter Chamber of Commerce board member and serves on the Mt. Bethel United Methodist Church administrative council. He is a 2014 graduate of Leadership Cobb and previously served on the Cobb Chamber’s board. He is a past board member of the Metro Atlanta Chapter of the American Red Cross and currently is a member of the Public Relations Society of America’s Georgia Chapter and the Atlanta Press Club. Russ grew up in the Atlanta suburbs. He earned a bachelor’s degree in communication arts from  Georgia Southern University where he was a founding father and charter member of the Pi Kappa  Alpha Fraternity’s Iota Upsilon Chapter. Russ and his wife, Leslie, live in Cobb County and have two sons and one daughter, Carson, Zachary and Harper, ages 11, 9 and 5. He and his family enjoy the outdoors, including: golf, boating, swimming, camping, gardening, and helping coach youth baseball."
      },
      {
        id:4,
        name:"Daryl Evans",
        title:"Senior Vice President--Mobile, Media and Advertising Strategy MediaLink",
        pic:'assets/pictures/judges/darylevans.png',
        descripion:"Daryl Evans currently serves as Senior Vice President, Mobile, Media and Advertising Strategy for MediaLink. He brings more than 25 years of experience spanning branding, mobile technology, advertising, media, digital content creation, sponsorship and sports marketing across the wireless, beverage, insurance and other industries. Prior to joining MediaLink, Evans led AT&T consumer advertising as well as marketing communications and merchandising for consumer products including AT&T wireless, Uverse TV, AT&T Digital Life and connected wireless products. Evans joined AT&T in 2001, the founding year of Cingular Wireless, and drove the creation of the Cingular brand. In 2007 Cingular was rebranded to AT&T and Evans’ responsibility expanded to all of the company’s consumer products. Before joining AT&T he served as Managing Director for Randstad, the third largest employment company in the world and headquartered Amsterdam. Prior to that, Evans served McCann-Erickson Worldwide as senior vice president/deputy general manager as well as senior vice president/director of client services.  In that position, he managed accounts such as Coca-Cola, Motorola, Georgia-Pacific and AFLAC among others. He and his teammates have won numerous awards including Cannes Lions, Effies and others throughout his career. Prior to McCann, Evans gained marketing and brand experience with companies ranging from Quaker Oats and Kimberly Clark Corporation on the client side to D’Arcy Masius Benton and Bowles on the agency side. Evans is currently a member of the Board of Visitors of the University of North Carolina at Chapel Hill. He also serves on the Board of Directors of the American Advertising Federation, The Alliance Theatre, The College Football Hall of Fame, the American Marketing Association (Atlanta Chapter) and the Board of Trustees of the Chick-fil-A Peach Bowl (former chairman). He is also on the Board of Trustees and immediate past chairman of the Atlanta Convention and Visitors Bureau. Evans holds a Bachelor’s Degree in business administration from the University of North Carolina and a Master’s Degree in business from the Harvard Business School."
      },
      {
        id:5,
        name:"Cindy Giller",
        title:"Managing Partner, Leader Mindshare",
        pic:'assets/pictures/judges/giller.png',
        descripion:"Cindy manages Mindshare’s Atlanta office and sits on the Executive Committee for Mindshare North America.   She’s responsible for the office and client leadership.  She has a passion for understanding shifts in consumer behavior and applying insights to ensure media is a competitive advantage for her clients. Prior to joining Mindshare, Cindy worked at J. Walter Thompson, Young & Rubicam, Publicis and MEC San Francisco where, as SVP, Global Media Director she was instrumental in the launch of the Digital Edge.  Cindy’s early embrace of digital was one of reasons she was named Media Strategist of the Year by Advertising Age. Account experience includes Adobe, AMD, California Winegrowers Association, Hilton, John Deere, Motorola, Nokia, Orkin, Pizza Hut, Sony, Symantec, Transamerica, U.S. Marine Corps, U.S. Virgin Islands and Xerox. Born and raised in the San Francisco Bay Area, Cindy moved to Atlanta in 2004.  She’s been married for 26 years and has a daughter graduating from college in May.  She loves to travel, throw dinner parties, discover new wineries and attend all kinds of sporting events."
      },
      {
        id:6,
        name:"Jarod J. Greene",
        title:"Managing Partner, Leader Mindshare",
        pic:'',
        descripion:""
      },
      {
        id:7,
        name:"Jo Ann Herold",
        title:"Managing Partner, Leader Mindshare",
        pic:'assets/pictures/judges/herold.png',
        descripion:"Jo Ann is a purpose-driven executive and brings more than 25 years of marketing experience. She has a long track record of delivering financial results and award-winning marketing programs that build sales and profitability for iconic brands in the B2B and B2C space.  As Chief Marketing Officer for Interface, Inc., she globalized the marketing team and brought forth a highly effective, integrated marketing approach resulting in five consecutive quarters of record financial performance. Prior to Interface, she was Vice President of Brand Marketing and Public Relations at Arby’s Restaurant Group resulting in a brand turnaround and 13 quarters of same sale growth. And before Arby’s, she spent 16 years at HoneyBaked Ham, where she served as Vice President of Marketing and then Chief Marketing Officer. She also has owned her own marketing firm where she worked with the Tropical Smoothie Café, Asian Tin Drum Kitchen, Atlanta Convention and Visitors Bureau, Buckhead Branding, Intercontinental Hotels Group and The Borgata Casino and Spa, Boyd Gaming and others. Jo Ann has an MBA in International Business from Mercer University in Atlanta, and an undergraduate degree in Communication from Mississippi State University. She is an Adjunct Professor at Georgia State University and Mercer University. She’s a passionate community volunteer and served as Vice Chair of the Arby’s Foundation, whose mission is to end childhood hunger. Her work has been lauded by industry and community groups including the National Diversity Council’s Most Powerful and Influential women, the prestigious Best Neighbor Award from the National Restaurant Association, two AMY Awards from the American Marketing Association, a Mercury Award for radio advertising, a Phoenix Award from Shirley Franklin for community volunteerism, and a Silver Effie for advertising effectiveness and was a finalist for the Catalog of the Year award by Catalog Age. Jo Ann is the Past President of the 1,000-member AMA Atlanta chapter and has raised over $100,000 for student scholarships. She is currently is on the board of Southface and has served as the Chair of the Marketing Committee and is on the Executive Board of the Atlanta Convention and Visitor’s Bureau. She is a graduate of the 2012 Leadership Atlanta class and serves on the marketing board for Children’s Healthcare of Atlanta, Zoo Atlanta, Fernbank and Crime Stoppers. Jo Ann and her husband Mark live in the Druid Hills neighborhood of Atlanta with their daughter, Lily. They love to walk on the Belt-line with their French Bulldog, Gatsby."
      },
      {
        id:8,
        name:"Jack Jessen",
        title:"President Northeast Region Clear Channel Outdoor ",
        pic:'assets/pictures/judges/jensen.png',
        descripion:"Jack was named President and General Manager at Clear Channel Outdoor Atlanta in December, 2010.  Jack was promoted to Region President Northeast and is now also responsible for the Boston, Philadelphia, New York, and Baltimore/DC Markets. Jack provides leadership in the areas of sales, real estate, public affairs, operations and finance. Jack served as Vice President and General Sales Manager for Clear Channel Outdoor before his promotion to President in 2010. Prior to joining Clear Channel Outdoor, Jack held several successive senior sales leadership roles with the Atlanta Journal-Constitution across their digital and print media platforms. Jack was Advertising Director for the Atlanta Journal-Constitution prior to his departure.  Before his career with the Atlanta Journal-Constitution, Jack held senior Sales and Leadership roles with WebHelp, SITEL Corporation and Time Warner Cable. Jack started his career in public accounting with KPMG – Peat Marwick. Jack has an established and well-rounded career in media and technology where he has held sales leadership and general management roles.  He has significant experience in competitive media sales, a strong network in the local Atlanta market and a people-centric leadership style. Jack currently serves on the Metro Atlanta Chamber Board of Directors, the Gwinnett County Chamber of Commerce Board of Directors, and the Outdoor Advertising Association of Georgia Board of Directors.  He is an active member of the Atlanta Chapter of the American Marketing Association and the Downtown Atlanta Rotary Club.  Jack has previously served on other boards in the Atlanta community including the Greater Atlanta Home Builder’s Association and the Society for Human Resource Management Atlanta. Jack provides media support via Clear Channel Outdoor to various non-profit organizations and public service initiatives.  Jack is actively involved in directing media donations to the Atlanta Community Food Bank and Camp Twin Lakes. Jack holds a bachelor’s degree in accounting and a Master’s of Business Administration, both from the University of Nebraska."
      },
      {
        id:9,
        name:"Vicky Jones",
        title:"Brand Strategy & Creative Phase 3",
        pic:'assets/pictures/judges/jones.png',
        descripion:"Originally from Antwerp, Belgium, Vicky Jones is the creatively gifted brand architect and strategist at one of Atlanta’s fastest growing marketing services organizations – PHASE:3 Marketing & Communications. In 2015, PHASE:3 acquired BRAND FEVER the agency she founded and lead for 18 years. Vicky has a keen eye to see beyond the surface. To read between the lines. To do the homework behind first impressions. To seek deeper meaning and purpose. To desire authenticity and speak truth. These lessons endured through her days at prominent Atlanta agencies such as Wages Design, TW Design and SA+A. Vicky brings strategic perspective to the work performed by PHASE:3."
      },
      {
        id:10,
        name:"Michael Kogon",
        title:"Brand Strategy & Creative Phase 3",
        pic:'assets/pictures/judges/jones.png',
        descripion:""
      },
      {
        id:11,
        name:"Shari Neumann",
        title:"Sr. Director, Content Center Lead for Georgia-Pacific",
        pic:'assets/pictures/judges/neumann.png',
        descripion:"Shari Neumann is an accomplished international marketing executive with expertise in leveraging brand storytelling to develop breakthrough campaigns and content that builds Brands of the Heart. As Sr. Director, Content Center Lead for Georgia-Pacific in Atlanta, GA, Shari most recently guided development of six new breakthrough campaigns - for Angel Soft®, Quilted Northern®, Vanity Fair Napkins®, Dixie®, Brawny® and Sparkle® Paper Towels; and is now focused on guiding ongoing content strategy, creative development and production across the brands. Prior to Georgia-Pacific Shari worked at Zyman Group leading insights and brand strategies for numerous multinational companies across a variety of industries; and prior to that she held a series of positions at The Coca-Cola Company including leading Advertising Planning for the company in Europe based in London, UK."
      },
      {
        id:12,
        name:"William Pate",
        title:"Sr. Director, Content Center Lead for Georgia-Pacific",
        pic:'assets/pictures/judges/neumann.png',
        descripion:""
      },
      {
        id:13,
        name:"Brian Pruitt",
        title:"Senior Director, Brand Media for Arby’s Restaurant Group, Inc.",
        pic:'assets/pictures/judges/pruitt.png',
        descripion:"Brian Pruitt is the Senior Director, Brand Media for Arby’s Restaurant Group, Inc., an Atlanta-based company that is the franchisor of the Arby’s restaurant system which operates and franchises nearly 3,400 restaurants worldwide. In this role, Brian is responsible for leading the media strategy and planning development/activation across all paid media channels for Arby’s National initiatives. Additionally, Brian leads the local integrated media strategy and direction for all company operated markets and serves as counsel to franchisee partners for media investment guidance. Brian joined the Arby’s team back in 2010 after almost 15 years working mostly on the agency side, predominantly with McCann Worldgroup and Starcom Mediavest. Within these agency-based media planning roles, Brian’s focus was concentrated in the automotive, QSR, Retail and CPG sectors. This is Brian’s second tenure on the client side after a role at The Coca-Cola Company as Manager of Local Media based at their corporate headquarters, also in Atlanta. Brian is a graduate of the University of Georgia and lives in Atlanta with his wife and their two children."
      },
      {
        id:14,
        name:"David Randolph",
        title:"Chief Strategy Officer for BKV",
        pic:'assets/pictures/judges/randolph.png',
        descripion:"David Randolph is the Chief Strategy Officer for BKV.  David is a 20 year veteran of advertising and marketing, with particular expertise in digital marketing and ecommerce.  David obsesses over marketing that complements and motivates the consumer buying journey.  He has led the business development and ongoing growth of accounts like American Express, Apple, Fox Broadcasting, JCPenney, Office Depot, Ralph Lauren, Saks Fifth Avenue, Spanx, Suntrust and Verizon.  Over his 20 year career, David has worked for 360i, SunTrust, JWT, BBDO and Ogilvy; from Atlanta to Detroit to Los Angeles and back again.  Husband and father of two precocious tweeners, David resides in Dunwoody.  When he’s not parenting, playing tennis, cooking or coaching little league, he cheers for his alma mater, Penn State."
      },
      {
        id:15,
        name:"Scot Safon",
        title:"Chief Marketing Officer of CNN Worldwide",
        pic:'assets/pictures/judges/safon.png',
        descripion:"Scot Safon is a marketing, communications and branding strategist who has spent most of his career inside the media, as the Chief Marketing Officer of CNN Worldwide, the CMO of The Weather Channel and the Senior VP of Marketing at TNT.   He also spent 7 years in the New York Ad Agency world, working on accounts like Pampers, Pepto-Bismol and Gravy Train.    Most recently, he has been a marketing and media strategy consultant for iconic brands like Ford, as well for a number of non-profits in Atlanta and New York.    He is a very proud recipient of the AMY Awards' Corporate Marketer of the Year 2014."
      },
      {
        id:16,
        name:"Liz Ward",
        title:"the Chief Marketing Officer for United Way of Greater Atlanta",
        pic:'assets/pictures/judges/ward.png',
        descripion:"Liz Ward is the Chief Marketing Officer for United Way of Greater Atlanta.She is also the Director of the Georgia State Marketing RoundTable, a group of senior marketing executives from Atlanta's top companies. Liz is a past President of AMA Atlanta and member of the AMA Executive Advisory Board. Prior to United Way, Liz ran a consulting firm, Thought Partners, serving clients ranging from established businesses like Baskin-Robbins, H&R Block and KQED (public broadcasting stations in San Francisco), to startups like Astrum Solar and MotionDSP. Liz began her career at Foote, Cone & Belding, San Francisco, where she oversaw accounts that included Levi Strauss & Co., Pillsbury and Intuit. When she's not working, Liz is out running, or home baking biscotti."
      },
      {
        id:17,
        name:"Barton Wood",
        title:"President at Frirefly Creative, Inc.",
        pic:'assets/pictures/judges/wood.png',
        descripion:"Barton has served in a number of creative and management capacities at Firefly Creative since he joined the firm in 1986. In 2001 Bart was appointed President and Chief Creative Officer. He re-branded the company, streamlined operations and refocused the Company’s position in the industry. Barton brings over 30 years of experience helping clients solve marketing challenges. His creative passion and analytical skills enable him to execute marketing campaigns from concept to completion. Barton’s career highlights include:Recipient of numerous awards, including Addy Awards for design, Mobius Awards for packaging and Amy Awards for marketing.Extensive creative experience in brand creation and brand management with UPS, Coke, Weyerhauser, International Paper, Stainmaster and Georgia Pacific."
      }
      

    ]
  }
  // Jack Jessen 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThejudgesPage');
  }

  presentJudgeModal(judge){
    console.log("Opening judge modal");
    console.log("Sending this judge to modal: " + judge.name);
    let modal = this.modalCtrl.create( JudgemodalPage, {
      judgeName: judge.name,
      judgeTitle: judge.title,
      judgePic: judge.pic,
      judgeDescription: judge.descripion
    });
    modal.present();
  }


}
