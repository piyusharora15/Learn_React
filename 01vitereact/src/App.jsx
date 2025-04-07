import Chai from "./chai";
// while making a component, the first letter must be upper-case.
// If we created react-app using vite, then we have to give filename as .jsx, it's convention.
// In jsx, we can only export one element.
// In order to return multiple elements, we have several ways: <div></div> enclose the elements in div element.
// Best way is <>....</> this is called fragment, within this fragment enclose multiple elements, it will be treated as returning a single element.
function App() {
  const username = "chai aur code"
  return (
    <>
    <Chai />
    <h1>Chai aur React {username}</h1>
    <p>Test Para</p>
    </>
  );
}

export default App
