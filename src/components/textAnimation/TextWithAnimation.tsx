import "./TextWithAnimation.css";
type NavigationLogoProps = {
  text: string;
};

const TextWithAnimation: React.FC<NavigationLogoProps> = ({ text }) => {
  return (
    <div className="card">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </div>
  );
};

export default TextWithAnimation;
