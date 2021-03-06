function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])

    return (
        <div className="container">
            <h1>React Components</h1>
            {loaded && data.books.map((book,i) => <Book key={i} data={book}/>)}
        </div>
    );   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
