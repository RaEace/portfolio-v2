import "./HomePicture.css";

const HomePicture: React.FC = () => {
  return (
    <div className="img-container">
      <img
        className="img-zoom img-grayscale img-render img-rounded"
        src="/jules.jpg"
      />
    </div>
  );
};

export default HomePicture;
