export default ({ count }) => {
  return (
    <div>
      {Array(count)
        .fill()
        .map((_, index) => (
          <div className="d-flex gap-4 justify-content-around" key={index}>
            <div>
              <div className="skeleton-element"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
            </div>
            <div>
              <div className="skeleton-element"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
            </div>
            <div>
              <div className="skeleton-element"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
