import { rgbToHex } from "./index";

export const Colors = ({ obj }) => {
  return (
    <div className="colors__container">
      {obj.map(({ rgb, weight }, index) => {
        const [r, g, b] = rgb;
        const hexColor = rgbToHex(r, g, b);
        const textColor = index < 8 ? "black" : "white";

        return (
          <div
            key={index}
            className="colors__item"
            style={{
              backgroundColor: hexColor,
              color: textColor,
            }}
          >
            <p>{weight}%</p>
            <p>{hexColor}</p>
          </div>
        );
      })}
    </div>
  );
};
