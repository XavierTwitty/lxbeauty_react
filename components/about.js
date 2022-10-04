import React from "react";

function about() {
  return (
    <div>
      <section className="about">
        <div className="about-header">
          <div className="about-image-top">
            <img src="https://static.wixstatic.com/media/5bff28_79571441247d44bb9cd172b7e42fd5d7~mv2.jpg/v1/fill/w_594,h_851,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG-3046-Facetune-27-03-2022-22-37-36.jpg" />
          </div>
          <div className="about-header-container">
            <h2> The Home of Beauty & Aesthetics</h2>
            <p>
              Based in Charlotte, North Carolina. Our Lash & Brow salon strives
              for top tier professionalism & quality beauty treatment with every
              service. Loxurious Beauty offers guests a variety of services and
              products that will help you feel young, energized and stunning
              every day. We put safety first, and stay up to date on the best
              techniques and latest treatment developments. If you’re ready for
              a fresh start - give us a call today and find out more about our
              services and special offers!
            </p>
            <button> BOOK NOW </button>
          </div>
        </div>
        <div className="about-bio">
          <div className="about-middle-container">
            <div className="about-img-bottom">
              <img src="https://static.wixstatic.com/media/5bff28_08ab8e7b5fb84901a02975443a6a43aa~mv2.jpg/v1/fill/w_490,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-3067-Facetune-27-03-2022-23-03-05.jpg" />
            </div>
            <h2>
              {" "}
              Lauren <br /> Isenberger{" "}
            </h2>
            <p>
              I am a proud mother to a very smart, bright, beautiful baby girl.
              She pushes me to be a better woman everyday.
              <br /> I am an Entrepreneur, Lash guru, and Eyebrow specialist. I
              have a passion for lash education & training.
              <br /> I began my beauty career at Paul Mitchell the School of
              Charlotte. 2017 Alumni. I am now a 5 year licensed Cosmetologist
              here in Charlotte, North Carolina. Growing an interest in the
              aesthetic side of beauty, I continued my education with many
              trainings from micro-blading to the new and growing technique
              Ombre/Powder Brows, to advanced lash styling.
            </p>
          </div>
        </div>

        <div className="about-CT">
          <h2>Client Testimonials</h2>
          <p className="quote">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            ipsam nemo aliquid facere neque rerum illum, tempore in, ullam
            maxime hic perferendis culpa ab accusantium consequatur suscipit
            ipsum quaerat provident!
          </p>
          <p className="name"> -Blair Hancock </p>

          <p className="qoute">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            ipsam nemo aliquid facere neque rerum illum, tempore in, ullam
            maxime hic perferendis culpa ab accusantium consequatur suscipit
            ipsum quaerat provident!
          </p>
          <p className="name"> -Desiree Simpson </p>

          <p className="qoute">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            ipsam nemo aliquid facere neque rerum illum, tempore in, ullam
            maxime hic perferendis culpa ab accusantium consequatur suscipit
            ipsum quaerat provident!
          </p>
          <p className="name"> -Kara Bowman </p>
        </div>
      </section>
    </div>
  );
}

export default about;
