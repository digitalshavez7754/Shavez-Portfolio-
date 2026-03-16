import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Golden Rabbit Communications</h4>
              </div>
              <h3>JAN 2024 - PRESENT</h3>
            </div>
            <p>
              Worked on logo animations for various clients. Created social media videos for clients like Kross, Wavin, Agarwal Jewellers, Abhushan Jeweller, Mahabir Danwar Jew, LIVIN, Liquiclear, Navaratan jew, Ratandeep Jew, NS Jew etc.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sunstone</h4>
              </div>
              <h3>MAR 2023 - SEP 2023</h3>
            </div>
            <p>
              Created learning content videos for the ongoing MBA and BBA courses. As per the requirment assisting marketing team to create short videos for social media. Have worked on creating video templates for various communication channels.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Poppy Seed Comm.</h4>
              </div>
              <h3>MAY 2022 - FEB 2023</h3>
            </div>
            <p>
              Worked on logo animations for various clients. Created social media videos for clients like Patanjali, HCG Hospital, Fair shop, Apollo Dental, VMart etc.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digidzire</h4>
              </div>
              <h3>DEC 2020 - AUG 2021</h3>
            </div>
            <p>
              Worked on logo animations for various clients. Created social media videos for clients like GoldGym, Lakme Institute, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
