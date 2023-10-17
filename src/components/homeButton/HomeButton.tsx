import "./HomeButton.css";

type HomeButtonProps = {
  text: string;
};

const HomeButton: React.FC<HomeButtonProps> = ({ text }) => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default HomeButton;
