import React, { useEffect, useState } from "react";
import feed from "../Assets/feedback.jpg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
export const Form = ({ onChange, clearForm, reset }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState,
    reset: resetForm,
  } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  // const [selectedForm, setSelectedForm] = useState(""); // default form

  // const handleFormSelection = (event) => {
  //   setSelectedForm(event.target.value);
  // };

  const onSubmit = (data) => {
    onChange(data);
    if (data.course === "Full Stack Development (FSD)") {
      navigate("/form1");
    } else if (data.course === "Data Science & Machine Learning (DSML)") {
      navigate("/form2");
    }
  };

  useEffect(() => {
    const subscription = watch((value) => onChange(value));
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  useEffect(() => {
    resetForm();
  }, [reset, resetForm]);

  return (
    <div className="form-p1">
      <div className="img">
        <img className="khgv" src={feed} alt="" />
      </div>

      <div className="box">
        <div className="dfed"></div>
        <div className="cf">
          Course Feedback - பாடநெறி பற்றிய கருத்துகேட்ப்பு
        </div>
        <div className="exp">
          <span>
            We appreciate your input! Please share your feedback with us to
            improve our training. Your opinions are valuable to us, and we thank
            you for taking the time to contribute.
          </span>
          <br /> <br />
          உங்கள் கருத்துக்களை பாராட்டுகிறோம்! எங்கள் பயிற்சியை மேம்படுத்த உங்கள்
          கருத்தை எங்களுடன் பகிர்ந்து கொள்ளவும். உங்கள் கருத்துக்கள் எங்களுக்கு
          மதிப்புமிக்கவை, மேலும் இதற்க்கு பங்களிக்க நேரம் ஒதுக்கியதற்கு நன்றி.
        </div>
        <div className="line"></div>
        <div className="acc">
          <a className="fcvg" href="">
            Add Account
          </a>
        </div>
        <div className="line"></div>
        <div className="hint">* Indicates required question</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="box">
          <label className="main-label">
            Email <span1>*</span1>
          </label>
          <input
            {...register("email", {
              required: "This is a required question",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email address is invalid",
              },
            })}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            Select your Course <span1>*</span1> <br /> உங்கள் பாடநெறியை
            தேர்வுசெய்யவும்
          </label>
          <select
            {...register("course", { required: "This is a required question" })}
            id="select"
          >
            <option value="">Choose</option>
            <option value="Full Stack Development (FSD)">
              Full Stack Development (FSD)
            </option>
            <option value="Data Science & Machine Learning (DSML)">
              Data Science & Machine Learning (DSML)
            </option>
          </select>
          <p className="error">{errors.course?.message}</p>
        </div>
        <div className="b-box but">
          <button className="nex" type="submit">
            Next
          </button>
          <div onClick={clearForm} className="clf" type="button">
            Clear form
          </div>
        </div>
      </form>
      <div className="footer">
        <div className="uytr">Never submit passwords through Google Forms.</div>

        <div className="fcg">
          This form was created inside entri.me.
          <a className="aaa" href="">
            Report Abuse
          </a>
        </div>
        <div className="gf">
          <span2>Google </span2> Forms
        </div>
      </div>
    </div>
  );
};
