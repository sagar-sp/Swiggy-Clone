// const heading = React.createElement("h1",{id : "head"},"Hello World From React!"); // it returns
// //an js Object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id=”parent”>
		<div id=”child”>
			<h1>Hello World</h1>
		</div>
</div> */
}

const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I’m an h1 tag'),
    React.createElement('h2', {}, 'I’m an h2 tag'),
  ])
); // it returns
//an js Object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
