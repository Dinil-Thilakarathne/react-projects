import StaggeredDropDown from "./components/StaggeredDropdown"

const App = () => {
  return (
    <div className=" bg-[#324D6D] w-full h-screen flex flex-col items-center justify-center">
        <div className="container h-[50vh] w-[80%] flex flex-col items-center justify-start gap-6 border-4 border-sky-500 p-5 rounded-xl bg-slate-200">
            <h1 className="text-4xl font-mono font-bold mt-4">Staggered Dropdown menu</h1>
        <StaggeredDropDown/>
        </div>
    </div>
  )
}

export default App
