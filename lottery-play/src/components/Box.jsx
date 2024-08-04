import "../App.css";
const Box = ({ onClick, children }) => {
  return (
    <div className="box" onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
