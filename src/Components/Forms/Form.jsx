const Form = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };

  return (
    <form onSubmit={handleForm} action="" autoComplete="off">
      <div className="form-group">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
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
          name="phone"
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

export default Form;
