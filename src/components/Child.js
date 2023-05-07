const Child = (props) => {
    const data = props.details.map((item) => (
        <div key={item.name}>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
        </div>
    ));
    return (
        <div>
            <h1>Child</h1>
            {data}
        </div>
    );
};
export default Child;
