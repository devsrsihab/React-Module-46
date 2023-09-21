const DynamicForm = ({  handleData, btnText, children }) => {
  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    handleData(data);
  };

  return (
    <div className="form-container  text-white">
      {children}
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
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
