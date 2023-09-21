import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
  // name ref
  const nameRef = useRef(null);
  // email ref
  const emailRef = useRef(null);
  // phone ref
  const phoneRef = useRef(null);
  // define effect for name focued
  useEffect(() => {
      nameRef.current.focus()
  },[])
  // deinfe hanldeSubmitForm
  const hanldeSubmitForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
  };

  return (
    <form onSubmit={hanldeSubmitForm} action="" autoComplete="off">
      <div className="form-group">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          ref={nameRef}
          name="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
      </div>
      <div className="form-group">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          defaultValue={'rojoni@sojoni.com'}
          ref={emailRef}
          name="email"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
      </div>
      <div className="form-group">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          ref={phoneRef}
          name="phone"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-5">
        Submit
      </button>
    </form>
  );
};

export default RefForm;
