import React from "react";

const MarketingDetails = () => {
  return (
    <div className="shadow-md py-6 px-4 lg:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">

        {/* Item 1 */}
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlOV8zZF9pbGx1c3RyYXRpb25fb2ZfaGFwcHlfZW1vamlfaWNvbl9tYXR0ZV90ZXh0dV9lMDg0ZDQxMi0wYjM4LTQ3NWMtYmJkYi0wNmIxMzk0MGM2MzEucG5n.png"
            alt=""
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold text-black">1 Lakh +</h1>
            <p className="text-gray-400">Trusted Students</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://www.shutterstock.com/image-vector/headset-icon-vector-illustration-isolated-260nw-1919366027.jpg"
            alt=""
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold text-black">500 +</h1>
            <p className="text-gray-400">Expert Members</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <img
            className="w-16 h-16 rounded-full object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
            alt=""
          />
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold text-black">4.5/5 (500)</h1>
            <p className="text-gray-400">Google Ratings</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MarketingDetails;
