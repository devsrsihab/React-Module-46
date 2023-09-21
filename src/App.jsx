// import Form from "./Components/Forms/Form"
// import CustomHookFrom from "./Components/Forms/CustomHookFrom";
import DynamicForm from "./Components/Forms/DynamicForm";
// import RefForm from "./Components/Forms/RefForm"
// import SateForm from "./Components/Forms/SateForm"

function App() {
  return (
    <>
      <main className="flex bg-accent  justify-center items-center h-screen">
        <div className="container  mx-auto p-10    ">
          <DynamicForm/>
        </div>
      </main>
    </>
  );
}

export default App;
