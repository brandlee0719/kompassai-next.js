export default function Text(props) {
  const { children, variant, className } = props;

  if (variant === "Header1") {
    return (
      <h1
        className={
          "text-4xl md:text-5xl lg:text-6xl font-bold font-Outfit leading-10 " +
          className
        }
      >
        {children}
      </h1>
    );
  }
  if (variant === "Header2") {
    return (
      <h2
        className={`text-3xl md:text-5xl lg:text-6xl font-bold font-Outfit leading-10 ${className}`}
      >
        {children}
      </h2>
    );
  }
  if (variant === "Header3") {
    return (
      <h3
        className={`text-2xl md:text-4xl lg:text-5xl font-semibold font-Outfit leading-10 ${className}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === "Header4") {
    return (
      <h4
        className={`text-xl md:text-3xl lg:text-4xl font-bold font-Outfit leading-loose ${className}`}
      >
        {children}
      </h4>
    );
  }
  if (variant === "SubHeader1") {
    return (
      <p
        className={`text-base md:text-xl lg:text-2xl font-normal font-Outfit leading-loose ${className}`}
      >
        {children}
      </p>
    );
  }
  if (variant === "SubHeader2") {
    return (
      <p
        className={`text-base md:text-xl lg:text-xl font-normal font-Outfit leading-relaxed ${className}`}
      >
        {children}
      </p>
    );
  }
  if (variant === "CaptionBig") {
    return (
      <span
        className={"text-base font-bold font-Outfit leading-snug " + className}
      >
        {children}
      </span>
    );
  }
  if (variant === "CaptionRegular") {
    return (
      <span
        className={
          "text-base font-normal font-Outfit leading-snug " + className
        }
      >
        {children}
      </span>
    );
  }
  if (variant === "Caption") {
    return (
      <span
        className={"text-sm font-bold font-Outfit leading-tight " + className}
      >
        {children}
      </span>
    );
  }
  if (variant === "CaptionSmall") {
    return (
      <span
        className={"text-xs font-normal font-Outfit leading-none " + className}
      >
        {children}
      </span>
    );
  }
  if (variant === "LinkButton") {
    return (
      <span
        className={"text-lg font-normal font-Outfit leading-snug " + className}
      >
        {children}
      </span>
    );
  }

  return (
    <p
      className={`text-base md:text-xl lg:text-xl font-normal font-Outfit leading-7 ${className}`}
    >
      {children}
    </p>
  );
}
