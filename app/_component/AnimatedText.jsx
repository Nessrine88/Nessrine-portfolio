export default function AnimatedText({ text }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="animate-letter"
          style={{ 
            animationDelay: `${index * 0.05}s` 
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}