"use client";
import { useState } from "react";
import Submit from "./Action";

const Con = () => {
  async function handel(formData) {
    const response = await Submit({
      item1: formData.get("item1"),
      item2: formData.get("item2"),
      item3: formData.get("item3"),
      item4: formData.get("item4"),
      watsapp: formData.get("item5"),
    });
  }
  const [Change, SetChange] = useState(false);
  const change = () => {
    SetChange(!Change);
  };
  return (
    <div>
      <form action={handel}>
        <div
          className="iPhone14 Pro Max - 1 inline-flex flex-col space-y-8 items-center justify-start px-12 pt-12 pb-20 bg-yellow-400"
          style={{ width: 430, height: 932 }}
        >
          <div className="Group3 relative" style={{ width: 238, height: 52 }}>
            <img src="/Gr.png" alt="" />
          </div>
          <p className="ADDYOUR ITEMS text-xl text-red-900">
            अपने सामान को जोड़ने के लिए, सामान का नाम और मात्रा का चयन करें।
            उदाहरण के लिए, आटा - 1 किलोग्राम
          </p>
          <div className="Group2 flex flex-col space-y-10 items-center justify-end w-full">
            <input
              name="item1" required
              className="Rectangle1    w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item2" required
              className="Rectangle2   w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item3"
              className="Rectangle3   w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item4"
              className="Rectangle4   w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item5"  required   type="number" 
              placeholder="Enter your watsapp num"
              className="Rectangle5 w-full h-14 bg-gray-300 shadow rounded-lg  "
            />
            <button  onClick={change}
              type="submit"
              className="Rectangle6 inline-flex items-center justify-center w-1/2 h-11 px-12 py-2 bg-red-700 bg-opacity-95 rounded-2xl"
            >
              <p
               
                className="SEND text-2xl font-extrabold text-white"
              >
                SEND
              </p>
            </button>
            <div>
              {Change ? (
                <p> धन्यवाद! आपने अपनी वस सूची बना ली है। हमें आपकी सूची मिल गई है</p>
              ) : (
                <p>
                 विकल्प पर क्लिक करके अपने समानों की लिस्ट बना सकते हैं।
                </p>
              )}
           
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Con;
