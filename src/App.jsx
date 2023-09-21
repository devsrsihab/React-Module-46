// import Form from "./Components/Forms/Form"
// import CustomHookFrom from "./Components/Forms/CustomHookFrom";
import DynamicForm from "./Components/Forms/DynamicForm";
// import RefForm from "./Components/Forms/RefForm"
// import SateForm from "./Components/Forms/SateForm"




function App() {

  const handleSignUp = data => {

    console.log(data);
  }

  const handleLogin = data => {
    console.log(data);
  }

  return (
    <>
      <main className="flex bg-accent  justify-center items-center h-screen">
        <div className="container flex gap-20  mx-auto p-10    ">
          <DynamicForm handleData={handleSignUp} btnText={"Sign Up"} formTitle={"Sign Up"} formDesc={"Please Fill up the form for sign up"} >
          <h1 className="text-3xl mb-3">Sign Up Step 2</h1>
          <p>Fill up the form for sign up</p> 
          </DynamicForm>
          <DynamicForm handleData={handleLogin} btnText={"Login"} formTitle={"Login"} formDesc={"Please Fill up the form for Login"} >
          <h1 className="text-3xl mb-3">Sigin </h1>
          <p>Fill up the form for login </p> 
          </DynamicForm>
          
        </div>
      </main>
    </>
  );
}

export default App;
