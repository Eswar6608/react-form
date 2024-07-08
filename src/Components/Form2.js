import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import feed from "../Assets/feedback.jpg";
import { Link, useNavigate } from "react-router-dom";

export const Form2 = ({ onChange, clearForm, reset }) => {
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
    navigate("/general");
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
          <div>DSML Batch Details / பேட்ச் விவரங்கள் </div>
        </div>
        <div className="box-fsd">
          <label className="main-label">
            Choose your Batch <span1>*</span1> <br /> உங்கள் பேச்சை
            தேர்வுசெய்யவும்
          </label>
          <select
            {...register("DSMLBatch", {
              required: "This is a required question",
            })}
            id="select-2"
          >
            <option value="">Choose</option>
            <option value="FN B01 (Morning)">FN B01 (Morning)</option>
            <option value="FN B02 (Morning)">FN B02 (Morning)</option>
            <option value="AN B01 (Evening)">AN B01 (Evening)</option>
            <option value="AN B02 (Evening)">AN B02 (Evening)</option>
            <option value="AN B03 (Evening)">AN B03 (Evening)</option>
            <option value="AN B04 (Evening)">AN B04 (Evening)</option>
          </select>
          <p className="error">{errors.DSMLBatch?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            Choose your Mentor <span1>*</span1> <br /> உங்கள் ஆசிரியரை / மென்டரை
            தேர்வுசெய்யவும்
          </label>
          <select
            {...register("DSMLMentor", {
              required: "This is a required question",
            })}
            id="select-3"
          >
            <option value="">Choose</option>
            <option value="Archana S">Archana S</option>
            <option value="Janani Lakshmi Narayanan">
              Janani Lakshmi Narayanan
            </option>
          </select>
          <p className="error">{errors.DSMLMentor?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            Are you satisfied with the Core Mentor's training? <span1>*</span1>
            <br /> உங்கள் கோடிங் மென்டரின் பயிற்சியில் நீங்கள்
            திருப்தியடைகிறீர்களா?
          </label>
          <div className="fgjhbh">
            <input
              {...register("DSMLMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLMentorRating"
              value="Strongly Agree"
              id="sa"
            />
            <label for="sa">Strongly Agree</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLMentorRating"
              value="Agree"
              id="a"
            />
            <label for="a">Agree</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLMentorRating"
              value="Neutral"
              id="ne"
            />
            <label for="ne">Neutral</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLMentorRating"
              value="Disagree"
              id="di"
            />
            <label for="di">Disagree</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLMentorRating"
              value="Strongly Disagree"
              id="std"
            />
            <label for="std">Strongly Disagree</label>
          </div>
          <p className="error">{errors.DSMLMentorRating?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            Choose your Soft Skills Mentor <span1>*</span1> <br />
            உங்கள் ஆசிரியரை / மென்டரை தேர்வுசெய்யவும்
          </label>
          <select
            {...register("DSMLSoftSkillsMentor", {
              required: "This is a required question",
            })}
            id="select-4"
          >
            <option value="">Choose</option>
            <option value="Sindhujs Kalpat Pattabiraman">
              Sindhujs Kalpat Pattabiraman
            </option>
          </select>
          <p className="error">{errors.DSMLSoftSkillsMentor?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            Are you satisfied with the Soft Skills mentor's training?
            <span1>*</span1>
            <br /> சாஃப்ட் ஸ்கில்ஸ் மென்டரின் பயிற்சியில் நீங்கள்
            திருப்தியடைகிறீர்களா?
          </label>
          <div className="fgjhbh">
            <input
              {...register("DSMLSoftSkillsMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLSoftSkillsMentorRating"
              value="Strongly Agree"
              id="stag"
            />
            <label for="stag"> Strongly Agree</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLSoftSkillsMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLSoftSkillsMentorRating"
              value="Agree"
              id="age"
            />
            <label for="age">Agree</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLSoftSkillsMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLSoftSkillsMentorRating"
              value="Neutral"
              id="neu"
            />
            <label for="neu">Neutral</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLSoftSkillsMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLSoftSkillsMentorRating"
              value="Disagree"
              id="dis"
            />
            <label for="dis">Disagree</label>
          </div>
          <div className="fgjhbh">
            <input
              {...register("DSMLSoftSkillsMentorRating", {
                required: "This is a required question",
              })}
              type="radio"
              name="DSMLSoftSkillsMentorRating"
              value="Strongly Disagree"
              id="ds"
            />
            <label for="ds"> Strongly Disagree</label>
          </div>
          <p className="error">{errors.DSMLSoftSkillsMentorRating?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            Choose your Course Coordinator <span1>*</span1> <br />
            உங்கள் பாட ஒருங்கிணைப்பாளரை தேர்வு செய்யவும்
          </label>
          <select
            {...register("DSMLCourseCoordinator", {
              required: "This is a required question",
            })}
            id="select-5"
          >
            <option value="">Choose</option>
            <option value="Rafsal">Rafsal</option>
          </select>
          <p className="error">{errors.DSMLCourseCoordinator?.message}</p>
        </div>
        <div className="box">
          <label className="main-label">
            How do you rate the support from the Course Coordinator ?{" "}
            <span1>*</span1> <br /> பாட ஒருங்கிணைப்பாளரை எப்படி
            மதிப்பிடுகிறீர்கள்?
          </label>
          <div className="fgjhbh">
            <input
              type="radio"
              name="DSMLCourseCoordinatorRating"
              value="Excellent"
              {...register("DSMLCourseCoordinatorRating", {
                required: "This is a required question",
              })}
              id="e"
            />
            <label for="e">Excellent</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="DSMLCourseCoordinatorRating"
              value="Good"
              {...register("DSMLCourseCoordinatorRating", {
                required: "This is a required question",
              })}
              id="g"
            />
            <label for="g">Good</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="DSMLCourseCoordinatorRating"
              value="Fair"
              {...register("DSMLCourseCoordinatorRating", {
                required: "This is a required question",
              })}
              id="f"
            />
            <label for="f">Fair</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="DSMLCourseCoordinatorRating"
              value="Poor"
              {...register("DSMLCourseCoordinatorRating", {
                required: "This is a required question",
              })}
              id="p"
            />
            <label for="p">Poor</label>
          </div>
          <div className="fgjhbh">
            <input
              type="radio"
              name="DSMLCourseCoordinatorRating"
              value="Very Poor"
              {...register("DSMLCourseCoordinatorRating", {
                required: "This is a required question",
              })}
              id="vp"
            />
            <label for="vp">Very Poor</label>
          </div>
          <p className="error">{errors.DSMLCourseCoordinatorRating?.message}</p>
        </div>
        <div className="b-box but">
          <div>
            <button className="nex" type="submit">
              Next
            </button>
            <div className="nex">
              <Link className="fcvgm" to={"/"}>
                Back
              </Link>
            </div>
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
