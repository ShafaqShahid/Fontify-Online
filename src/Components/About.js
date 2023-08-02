import React from "react";
import logo from "../image/favicon.png"
export default function About() {
  return (
    <div className="container">
      <h1 className="my-2 ">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              About Fontify Online
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Welcome to Fontify Online! Discover the wonderful world of writing
              and give your text a creative twist. With Fontify Online, you have
              the power to customize your words like never before. Make them big
              and bold, or small and subtle. You can capitalize, lowercase, or
              put them in sentence case effortlessly. Want to remove extra
              spaces or count the characters? We've got you covered! It's easy
              and fun – just type your text, pick your favorite font, and let
              the magic unfold. So, join us and let your words come alive in a
              whole new way! 😊🖌️🎨
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              About Developer
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Fontify Online was crafted with love and expertise by Shafaq
              Shahid, a Software Engineer with a specialization in the MERN
              stack. Her passion for coding and design came together to create
              this user-friendly platform where people can play with text and
              bring their text to life. With Shafaq's knowledge and dedication,
              Fontify Online promises an enjoyable and seamless experience for
              all users, making typography exploration an exciting adventure for
              everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Contact Us
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              For any inquiries or feedback related to Fontify Online, you can
              reach out to the developer, Syeda Shafaq Gillani, on LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/syeda-shafaq-gillani-4001581b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/syeda-shafaq-gillani-4001581b6/
              </a>
              Additionally, you can contact her via email at{" "}
              <a href="mailto:shafaqgillani5@gmail.com">
                shafaqgillani5@gmail.com
              </a>
              . Feel free to get in touch with any questions or suggestions, and
              Syeda will be delighted to assist you!
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "250px" }}
        />
      </div>
    </div>
  );
}
