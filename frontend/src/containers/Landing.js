import React from "react";
import { Page, Section } from "react-page-layout";
// import SignupForm from "../components/landing-page/SignupForm";
import exampleImage from "../assets/images/summary.png";
import exampleImageMobile from "../assets/images/landing-pic-mobile.png";
import { Link } from "react-router-dom";
import graph from "../assets/images/income.png";

export default function Landing() {
  return (
    <Page layout="public">
      <Section slot="main">
        <div className="landing-page">
          <h1 id="welcome">Welcome</h1>
          <span className="big-text mb-2">Sign up and manage your balance</span>
          <span className="small-text mb-3">
            Note down your expenditure and income, <br /> then check your
            balance everyday
          </span>
          <img id="graphdemo" src={graph} alt="ABC" />
          <Link className="sign-up-mobile" to="/sign-up">
            <button className="mt-2 custom-btn mobile" type="button">
              Register
            </button>
          </Link>
          <img className="example-image" src={exampleImage} alt="example-pic" />
          <img
            className="example-image-mobile"
            src={exampleImageMobile}
            alt="example-mobile-pic"
          />
        </div>
      </Section>
    </Page>
  );
}
