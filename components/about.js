import React from "react";

function about() {
  return (
    <div>
      <section className="about">
        <div
          className="about-header"
          style={{
            display: "flex",
            textAlign: "center",
            marginRight: "2%",
          }}
        >
          <div
            className="about-image-top"
            style={{
              width: "50%",
              marginLeft: "2%",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/5bff28_79571441247d44bb9cd172b7e42fd5d7~mv2.jpg/v1/fill/w_594,h_851,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG-3046-Facetune-27-03-2022-22-37-36.jpg"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="about-header-container"
            style={{
              width: "50%",
            }}
          >
            <h2
              style={{
                fontSize: "9.8rem",
                fontFamily: "fantasy",
              }}
            >
              {" "}
              The Home of Beauty & Aesthetics
            </h2>
            <p
              style={{
                fontSize: "2.5rem",
              }}
            >
              Based in Charlotte, North Carolina. Our Lash & Brow salon strives
              for top tier professionalism & quality beauty treatment with every
              service. Loxurious Beauty offers guests a variety of services and
              products that will help you feel young, energized and stunning
              every day. We put safety first, and stay up to date on the best
              techniques and latest treatment developments. If you’re ready for
              a fresh start - give us a call today and find out more about our
              services and special offers!
            </p>
            <button
              style={{
                width: "30%",
                padding: "2%",
                backgroundColor: "pink",
              }}
            >
              {" "}
              BOOK NOW{" "}
            </button>
          </div>
        </div>
        <div
          className="about-bio"
          style={{
            display: "flex",
            marginTop: "5%",
            justifyContent: "center",
          }}
        >
          <div
            className="about-middle-container"
            style={{
              width: "40%",
            }}
          >
            <h2
              style={{
                fontSize: "8rem",
                textAlign: "center",
              }}
            >
              {" "}
              Lauren <br /> Isenberger{" "}
            </h2>
            <p
              style={{
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
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

          <div
            className="about-img-bottom"
            style={{
              width: "50%",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/5bff28_08ab8e7b5fb84901a02975443a6a43aa~mv2.jpg/v1/fill/w_490,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-3067-Facetune-27-03-2022-23-03-05.jpg"
              style={{
                marginLeft: "8%",
              }}
            />
          </div>
        </div>

        <div
          className="about-CT"
          style={{
            backgroundColor: "pink",
            width: "100%",
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "6rem",
              width: "50%",
            }}
          >
            Client Testimonials
          </h2>
          <p
            style={{
              marginTop: "5%",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            ipsam nemo aliquid facere neque rerum illum, tempore in, ullam
            maxime hic perferendis culpa ab accusantium consequatur suscipit
            ipsum quaerat provident!
          </p>
          <p
            style={{
              marginTop: "2%",
            }}
          >
            {" "}
            -Blair Hancock{" "}
          </p>

          <p
            style={{
              marginTop: "5%",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            ipsam nemo aliquid facere neque rerum illum, tempore in, ullam
            maxime hic perferendis culpa ab accusantium consequatur suscipit
            ipsum quaerat provident!
          </p>
          <p
            style={{
              marginTop: "2%",
            }}
          >
            {" "}
            -Desiree Simpson{" "}
          </p>

          <p
            style={{
              marginTop: "5%",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            ipsam nemo aliquid facere neque rerum illum, tempore in, ullam
            maxime hic perferendis culpa ab accusantium consequatur suscipit
            ipsum quaerat provident!
          </p>
          <p
            style={{
              marginTop: "2%",
            }}
          >
            {" "}
            -Kara Bowman{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default about;
