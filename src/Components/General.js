import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import feed from "../Assets/feedback.jpg";
import { Link, useNavigate } from "react-router-dom";

export const General = ({ onChange, clearForm, triggerClick, reset }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState,
    reset: resetForm,
  } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    onChange(data);
    triggerClick();
    navigate("");
  };

  // Watch for changes and pass them up
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
        <div className="fsd">
          <div>General</div>
        </div>
        <div className="box-g">
          <label>பொது</label>
        </div>
        <div className="box">
          <label className="main-label">
            How do you rate the overall training ? <span1>*</span1> <br />{" "}
            ஒட்டுமொத்த பயிற்சியை எப்படி மதிப்பிடுகிறீர்கள்?
          </label>
          <div className="fgjhbh">
            <input
              type="radio"
              name="OverallTrainingRating"
              value="Excellent"
              {...register("OverallTrainingRating", {
                required: "This is a required question",
              })}
              id="e"
            />
            <label for="e">Excellent</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="OverallTrainingRating"
              value="Good"
              {...register("OverallTrainingRating", {
                required: "This is a required question",
              })}
              id="g"
            />
            <label for="g">Good</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="OverallTrainingRating"
              value="Fair"
              {...register("OverallTrainingRating", {
                required: "This is a required question",
              })}
              id="f"
            />
            <label for="f">Fair</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="OverallTrainingRating"
              value="Poor"
              {...register("OverallTrainingRating", {
                required: "This is a required question",
              })}
              id="p"
            />
            <label for="p">Poor</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="OverallTrainingRating"
              value="Very Poor"
              {...register("OverallTrainingRating", {
                required: "This is a required question",
              })}
              id="vp"
            />
            <label for="vp">Very Poor</label>
          </div>
          <p className="error">{errors.OverallTrainingRating?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            What do you like the most about the training? <span1>*</span1>{" "}
            <br />
            பயிற்சியில் நீங்கள் எதை அதிகம் விரும்புகிறீர்கள்?
          </label>
          <textarea
            name="AboutTraining"
            id="about"
            rows="1"
            cols="10"
            placeholder="Your answer"
            {...register("AboutTraining", {
              required: "This is a required question",
            })}
          ></textarea>
          <p className="error">{errors.AboutTraining?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            Any suggestions to improve the training ? <br />
            பயிற்சியை மேம்படுத்த ஏதேனும் ஆலோசனைகள் உள்ளதா?
          </label>
          <textarea
            name="Suggestion"
            id="sugges"
            cols="10"
            rows="1"
            placeholder="Your answer"
            {...register("Suggestion")}
          ></textarea>
        </div>
        <div className="b-box but">
          <div>
            <div className="nex">
              <Link className="fcvgm" to={"/form1"}>
                back
              </Link>
            </div>
            <button className="sub">Submit</button>
          </div>
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
