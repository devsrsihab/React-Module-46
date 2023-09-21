import { useState } from "react";

const SateForm = () => {
    

    // deinfa form error state
    const [errors, setError] = useState('')
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);

    if (phone.length < 11) {
      setError('Phone must be 11 digit')
        
    } else{
      setError('')
    }
    console.log(errors);
  };

  // name sate or hanlder
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    // setName(e.target.value)
    setName(e.target.value);
  };

  // email state and handler
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // phone state and handler
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <form onSubmit={handleForm} action="" autoComplete="off">
      <div className="form-group">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          onChange={handleNameChange}
          name="name"
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
          onChange={handlePhoneChange}
          name="phone"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <span className="text-xl my-5 text-red-500" >{errors}</span>
      </div>
      <div className="form-group">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          onChange={handleEmailChange}
          name="email"
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

export default SateForm;
