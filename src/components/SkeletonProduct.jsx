export default ({ count }) => {
  return (
    <div>
      {Array(count)
        .fill()
        .map((_, index) => (
          <p key={index}>
            <div className="d-flex gap-4 justify-content-around">
              <div>
                <div class="skeleton-element"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
              </div>
              <div>
                <div class="skeleton-element"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
              </div>
              <div>
                <div class="skeleton-element"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
              </div>
            </div>
          </p>
        ))}
    </div>
  );
};
