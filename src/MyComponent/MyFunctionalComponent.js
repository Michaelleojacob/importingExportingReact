const MyFunctionalComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>this is from MyFunctionalComponent. Hello, {props.title}</h1>
    </div>
  );
};

export default MyFunctionalComponent;
