import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar/> */}
      <div className="container my-3" >
        <TextForm heading="Enter the text to analyse" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;










// Note - We can return only 1 element from the main function but if we need to return more elements then we have to keep the things inside <> </> known as jsx fragments.

/* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    <div className="container">
      <div>Hello {name}. How are you?</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem enim quaerat reiciendis, itaque, repudiandae consequuntur debitis, quasi earum in excepturi. Culpa cumque numquam, vel quos, dicta earum quod illo dolorum eveniet harum reiciendis?
    </div> */


// JSX - javascript extension. (whatever code which is in the return function is jsx). It is an HTML only with little changes like here we use className istead of class and htmlFor instead of for.

// We can include js in this html using {}.
// The purpose behind usig this jsx is keepig all things at one place instead of keeping in differet files.


// Props - Properties 
// Ek custom component ko hum koi value deke bhej sakte hain jo usko use kar lega - Jaise koi string bhej sakte hain, object, etc. 
// We will use ES7 extension shortcuts

// We will see default export and named export
// We can use any variable name when calling default export but we need to use same variable name when calling named export with {} braces.


// Now we will start PROPS. For that we will make a seperate component.
// Props kul mila ke aisa hai ki aap kuch cheeze de rhe hain variables ki tarah components ko banane ke liye
// Ab isme zaruri ni ki hum sirf strings hi pass kare hum objects bhi pass kar sakte hain.
// Now we'll see proptypes



