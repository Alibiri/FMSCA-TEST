import PaginationTable from "./Components/Pagination/PaginationTable"
import TableAPP from "./Components/TableApp"





function App() {
  

  return (
      <div className="app">
          <h1 align="center">React App</h1>
          <h3 align="center">FMSCA REACT TABLE APP</h3>
          <div>
          <TableAPP/>  
          <PaginationTable/>
          </div>
      </div>
    )
  }    

export default App
