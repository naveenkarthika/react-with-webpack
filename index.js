// JS way
// const root = document.getElementById('root');
// const p = document.createElement('p')
// p.innerText = 'Hello world!'

// root.appendChild(p)

//  In React
// Two ways to create a react elements
// Using createElement
const child = React.createElement('p', {}, 'Child1');
const child2 = React.createElement('p', {}, 'Child2')
const div = React.createElement('div', { className: 'text'}, ['Hello this is React!!', child, child2]); 

// This approach is difficult

// JSX


const root1 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(div)