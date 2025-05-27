import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animationApply from "../../public/apply.json"; // Adjust the path as necessary

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(id, user);

  const handleApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);
    const application = {
      jobId: id,
      userEmail: user?.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error("Error applying for job:", err.message);
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-red-200">
        Submit Your Application
      </h2>
      <p className="text-red-200 mb-6">
        Please complete the form below and our team will be in touch shortly.
      </p>
      <div className="grid grid-cols-2 fieldset bg-base-200 border-base-300 text-black rounded-box  border p-4">
        <form className="cols-span-1  py-5 px-3" onSubmit={handleApply}>
          <fieldset className="">
            <label className="label text-black">LinkedIn Link</label>
            <input
              type="url"
              name="linkedIn"
              required
              className="input w-full mb-4 text-black border border-red-300 rounded-lg focus:outline-none focus:ring-red-400"
              placeholder="LinkedIn profile link"
            />

            <label className="label text-black">Github Link</label>
            <input
              type="url"
              name="github"
              required
              className="input w-full mb-4 text-black  border border-red-300 rounded-lg focus:outline-none focus:ring-red-400"
              placeholder="Github Link"
            />

            <label className="label text-black">Resume Link</label>
            <input
              type="url"
              name="resume"
              required
              className="input w-full mb-4 text-black  border border-red-300 rounded-lg focus:outline-none focus:ring-red-400"
              placeholder="Resume Link"
            />

            <div className="flex w-full">
              <button type="submit" className="btn-grad w-full">
                Apply
              </button>
            </div>
          </fieldset>
        </form>
        <div className="cols-span-1">
            <Lottie animationData={animationApply}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
