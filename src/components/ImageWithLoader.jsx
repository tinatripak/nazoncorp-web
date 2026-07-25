import { useState } from "react";

import "./ImageWithLoader.css";

function ImageWithLoader({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  width,
  height,
  ...imageProps
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`image-loader-wrapper ${wrapperClassName} ${
        isLoaded ? "is-loaded" : ""
      }`}
    >
      {!isLoaded && !hasError && (
        <div className="image-loader" aria-label="Loading image">
          <span className="image-loader-spinner" />
        </div>
      )}

      {hasError && (
        <div className="image-error">
          <span>Image unavailable</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`image-loader-image ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...imageProps}
      />
    </div>
  );
}

export default ImageWithLoader;
