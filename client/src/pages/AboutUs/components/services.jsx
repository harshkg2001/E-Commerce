import React from "react";
import "./services.css";


function Services() {
  let message ="";
  return (
    <section class="section-white">
      <div className="custom-container">
        <div className="custom-row">
          <div  className="custom-col-md-12 custom-text-center">
            <h2 class="section-title">The Team Behind Sneak Kar</h2>

            <p class="section-subtitle">{message}</p>
          </div>

          <div className="custom-col-sm-6 custom-col-md-4">
            <div class="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                class="team-img"
                alt="pic"
              />
              <h3>JOHNATHAN HAWKINS</h3>
              <div class="team-info">
                <p>Head of SEO</p>
              </div>
              <p>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients from international brands to medium
                sized businesses for over five years.
              </p>

              <ul class="team-icon">
              <li>
                  <a href="#" class="twitter">
                    <img class="fa fa-twitter"></img>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <img class="fa fa-pinterest"></img>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <img class="fa fa-facebook"></img>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="custom-col-sm-6 custom-col-md-4">
            <div class="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                class="team-img"
                alt="pic"
              />

              <h3>ALEXANDRA SMITHS</h3>

              <div class="team-info">
                <p>SEO Specialist</p>
              </div>

              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency.
              </p>

              <ul class="team-icon">
              <li>
                  <a href="#" class="twitter">
                    <img class="fa fa-twitter"></img>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <img class="fa fa-pinterest"></img>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <img class="fa fa-facebook"></img>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="custom-col-sm-6 custom-col-md-4">
            <div class="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"
                class="team-img"
                alt="pic"
              />

              <h3>ELISA JOHANSON</h3>

              <div class="team-info">
                <p>Marketing Manager</p>
              </div>

              <p>
                Elisa first fell in love with digital marketing at the
                university. He loves to learn, and looks forward to being part
                of this new exciting industry for many years.
              </p>

              <ul class="team-icon">
              <li>
                  
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <img class="fa fa-pinterest" ></img>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <img class="fa fa-facebook"></img>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
