import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CibSkillshareIcon2 } from './CibSkillshareIcon2.js';
import { CibSkillshareIcon } from './CibSkillshareIcon.js';
import { CodiconProjectIcon } from './CodiconProjectIcon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Group9Icon } from './Group9Icon.js';
import { Group10Icon } from './Group10Icon.js';
import { Group11Icon } from './Group11Icon.js';
import { Group12Icon } from './Group12Icon.js';
import { Group13Icon } from './Group13Icon.js';
import { Group14Icon } from './Group14Icon.js';
import classes from './Landing.module.css';
import { MapInsuranceAgencyIcon } from './MapInsuranceAgencyIcon.js';
import { MdiLeadsIcon } from './MdiLeadsIcon.js';
import { PhCertificateIcon } from './PhCertificateIcon.js';
import { TablerBulbFilledIcon } from './TablerBulbFilledIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Landing: FC<Props> = memo(function Landing(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.cibSkillshare}>
        <CibSkillshareIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.noteFillOutTheApplicationFormS}>
        Note: Fill out the application form.SOP is mandatory to increase your chances of getting Shortlisted*
      </div>
      <div className={classes.masterFullstackWebDevelopment}>
        <div className={classes.textBlock}>Master Fullstack</div>
        <div className={classes.textBlock2}>Web Development</div>
      </div>
      <div className={classes.yourRoadmapToBuildAGlobalCaree}>
        <div className={classes.textBlock3}>
          Your roadmap to build a global career in Data Analytics by learning relevant skill hands-on and create a
          portfolio from scratch starts here!
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.applyNow}>Apply Now</div>
      <div className={classes.applicationDeadline1stOctober2}>Application Deadline: 01st October 2023</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.programmeStartDate10thOctober2}>Programme Start Date: 10th October 2023</div>
      <div className={classes.mentorshipProgrammeIn}>Mentorship Programme in</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.pythonFullStackDevelopment}>
        <div className={classes.textBlock5}>Python FullStack Development</div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle52}></div>
      <div className={classes.pythonForDataScienceMachineLea}>
        <div className={classes.textBlock7}>Python for Data Science &amp; Machine Learning</div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle53}></div>
      <div className={classes.wordPressDevelopmentWithBootst}>
        <div className={classes.textBlock9}>WordPress Development with Bootstrap</div>
        <div className={classes.textBlock10}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.viewMore}>View More</div>
      <div className={classes.rectangle62}></div>
      <div className={classes.viewMore2}>View More</div>
      <div className={classes.rectangle63}></div>
      <div className={classes.viewMore3}>View More</div>
      <div className={classes.iMG_04501}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.inThisHiveProjectYouWillDesign}>
        In this hive project, you will design a data warehouse for e-commerceapplication to perform Hive analytics on
        Sales and Customer Demographicsdata using big data tools such as Sqoop, Spark, and HDFS. In this hive project,
        you will design a data warehouse for e-commerceapplication to perform Hive analytics on Sales and Customer
        Demographicsdata using big data tools such as Sqoop, Spark, and HDFS. In this hive project, you will design a
        data warehouse for e-commerceapplication to perform Hive analytics on Sales and Customer Demographicsdata using
        big data tools such as Sqoop, Spark, and HDFS.
      </div>
      <div className={classes.aboutTheProgram}>About the Program</div>
      <div className={classes.features}>Features</div>
      <div className={classes.group9}>
        <Group9Icon className={classes.icon3} />
      </div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon4} />
      </div>
      <div className={classes.group10}>
        <Group10Icon className={classes.icon5} />
      </div>
      <div className={classes.group13}>
        <Group13Icon className={classes.icon6} />
      </div>
      <div className={classes.group11}>
        <Group11Icon className={classes.icon7} />
      </div>
      <div className={classes.group14}>
        <Group14Icon className={classes.icon8} />
      </div>
      <div className={classes.agencyBasedMasteryProgram}>
        <div className={classes.textBlock11}>Agency-Based Mastery Program</div>
        <div className={classes.textBlock12}>
          <p></p>
        </div>
      </div>
      <div className={classes.industryExpertLedProgram}>
        <div className={classes.textBlock13}>Industry Expert-Led Program</div>
        <div className={classes.textBlock14}>
          <p></p>
        </div>
      </div>
      <div className={classes.realProjectsRealSkills}>Real Projects, Real Skills</div>
      <div className={classes.beAProIn12To20Weeks}>
        <div className={classes.textBlock15}>Be a Pro in 12 to 20 Weeks</div>
        <div className={classes.textBlock16}>
          <p></p>
        </div>
      </div>
      <div className={classes.certifiedJobReadyGraduates}>
        <div className={classes.textBlock17}>Certified Job-Ready Graduates</div>
        <div className={classes.textBlock18}>
          <p></p>
        </div>
      </div>
      <div className={classes.upskillWithHandsOnInternship}>
        <div className={classes.textBlock19}>Upskill with Hands-On Internship</div>
        <div className={classes.textBlock20}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.agencyBasedMentorshipProgram}>
        <div className={classes.textBlock21}>Agency-Based</div>
        <div className={classes.textBlock22}>Mentorship Program</div>
      </div>
      <div className={classes.mapInsuranceAgency}>
        <MapInsuranceAgencyIcon className={classes.icon9} />
      </div>
      <div className={classes.restructure}></div>
      <div className={classes.rectangle92}></div>
      <div className={classes.industryExpertLedProgram2}>
        <div className={classes.textBlock23}>Industry Expert-Led</div>
        <div className={classes.textBlock24}>Program</div>
        <div className={classes.textBlock25}>
          <p></p>
        </div>
      </div>
      <div className={classes.restructure2}></div>
      <div className={classes.mdiLeads}>
        <MdiLeadsIcon className={classes.icon10} />
      </div>
      <div className={classes.rectangle93}></div>
      <div className={classes.realProjectsRealSkills2}>
        <div className={classes.textBlock26}>Real Projects,</div>
        <div className={classes.textBlock27}>Real Skills</div>
        <div className={classes.textBlock28}>
          <p></p>
        </div>
      </div>
      <div className={classes.mapInsuranceAgency2}>
        <div className={classes.codiconProject}>
          <CodiconProjectIcon className={classes.icon11} />
        </div>
      </div>
      <div className={classes.restructure3}></div>
      <div className={classes.rectangle94}></div>
      <div className={classes.beAProIn12To20Weeks2}>
        <div className={classes.textBlock29}>Be a Pro in 12 to</div>
        <div className={classes.textBlock30}>20 Weeks</div>
        <div className={classes.textBlock31}>
          <p></p>
        </div>
      </div>
      <div className={classes.restructure4}></div>
      <div className={classes.tablerBulbFilled}>
        <TablerBulbFilledIcon className={classes.icon12} />
      </div>
      <div className={classes.rectangle95}></div>
      <div className={classes.certifiedJobReadyGraduates2}>
        <div className={classes.textBlock32}>Certified Job-Ready</div>
        <div className={classes.textBlock33}>Graduates</div>
      </div>
      <div className={classes.mapInsuranceAgency3}>
        <div className={classes.phCertificate}>
          <PhCertificateIcon className={classes.icon13} />
        </div>
      </div>
      <div className={classes.restructure5}></div>
      <div className={classes.rectangle96}></div>
      <div className={classes.upskillWithHandsOnInternship2}>
        <div className={classes.textBlock34}>Upskill with Hands-On</div>
        <div className={classes.textBlock35}>Internship</div>
      </div>
      <div className={classes.restructure6}></div>
      <div className={classes.whyShouldYouLearnDataAnalysis}>
        <div className={classes.textBlock36}>Why Should You Learn Data Analysis?</div>
        <div className={classes.textBlock37}>
          <p></p>
        </div>
      </div>
      <div className={classes.cibSkillshare2}>
        <CibSkillshareIcon2 className={classes.icon14} />
      </div>
      <div className={classes.thisProgramIsForYouIfYouAreA}>This program is for you if you are a...</div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.dataAnalyst}>Data Analyst</div>
      <div className={classes.mISAnalyst}>MIS Analyst</div>
      <div className={classes.customerSupportRepresentative}>Customer Support Representative</div>
      <div className={classes.qualityAnalyst}>Quality Analyst</div>
      <div className={classes.financialAnalyst}>Financial Analyst</div>
      <div className={classes.student}>Student</div>
    </div>
  );
});
