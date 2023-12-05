import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTask";

function App() {
  return (
    <section className=" grid place-items-center h-screen ">
      <div className="shadow-md p-4">
        <AddTask />
        <ListTasks />
      </div>
    </section>
  );
}

export default App;
