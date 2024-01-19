function Aa() {
  return <>AA</>;
}

// const withLoadingFeedback = (feedback) => (Component) => (props) => {
//   if (props.isLoading) return <div>{feedback}</div>;
//   return <Component {...props} />;
// };

// const withNoDataFeedback = (feedback) => (Component) => (props) => {
//   if (!props.data) return <div>{feedback}</div>;
//   return <Component {...props} />;
// };

const withDataEmptyFeedback = (Component) => (props) => {
  if (props.data) return <div>props.data</div>;
  return <Component {...props} />;
};

// const TodoList = compose(
//   withLoadingFeedback("Loading Todos."),
//   withNoDataFeedback("No Todos loaded yet."),
//   withDataEmptyFeedback("Todos are empty.")
// )(Aa);

// const Bb=()=>(<withDataEmptyFeedback(Aa)({data:1}) />)
    
export default withDataEmptyFeedback(Aa);
