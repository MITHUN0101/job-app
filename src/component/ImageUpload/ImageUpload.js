import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[50%]">
        <div>{image && <img src={image} style={{ maxWidth: "100%" }} />}</div>
        <div className="py-2 flex justify-center">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      </div>
    </div>
  );
}
