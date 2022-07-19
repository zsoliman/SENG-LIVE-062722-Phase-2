import Header from "./components/Header.js";
import projects from "./projects.js"
import ProjectForm from "./components/ProjectForm.js";
import ProjectList from "./components/ProjectList.js";

function App() {
  return (
    <div className="App">
      Project showcase
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App;
