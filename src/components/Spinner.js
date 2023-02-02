const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center my-3"
      id="spinner-loader"
    >
      <div
        className="spinner-border text-dark"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
