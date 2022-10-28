import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div class='form-group'>
          <h3 class="h333">LOG IN</h3> <br></br>
          <input type="text" class="form-control" id="userName" placeholder="Enter UserName"></input> <br></br>
          <input type="text" class="form-control" id="passWord" placeholder="Enter Password"></input> <br></br>
          <input type="submit" value="Submit"></input> 
          </div>
        </form> 
        <a><br></br>
          Please update these class videos. 
        </a> 
      </header>
    </div>
  );
}

export default App