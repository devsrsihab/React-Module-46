import useInputeSate from "../../Hooks/HookForm";

const CustomHookFrom = () => {
  // 1. this process is in array
  //   const [name, handleNameChange] = useInputeSate("");
  //   const [email, handleEmailChange] = useInputeSate("");
  //   const [phone, handlePhoneChange] = useInputeSate("");

  // 2. this process is in object
  const nameState = useInputeSate('ssdfdf');
  const emailState = useInputeSate();
  const phoneState = useInputeSate();

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    console.log(nameState.value);
    console.log(emailState.value);
    console.log(phoneState.value);

  };
  return (
    <form onSubmit={handleSubmitFrom} action="" autoComplete="off">
      <div className="form-group">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          {...nameState}
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
          {...emailState}
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
          {...phoneState}
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

export default CustomHookFrom;
