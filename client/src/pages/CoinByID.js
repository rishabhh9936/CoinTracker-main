// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loadingui from "../components/Loadingui";
// import Coin from "../components/Coin";

// const CoinByID = () => {
//   const { id } = useParams();

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
//       .then((response) => response.json())
//       .then((response) => setData(response))
//       .catch((err) => console.error(err));
//   }, [id]);

// console.log(data)

//   return data.length ===0 ? (
//     <Loadingui/>
//   ) : (
//     <div>
//       < Coin data={data} />
//     </div>
//   )
// };

// export default CoinByID;



import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { useParams } from "react-router-dom";

const CoinByID = () => {
  const { id } = useParams();

  const [data, setData] = useState(null); // Initialize as null

  useEffect(() => {
    setData(null); // Reset data when id changes
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) {
    return (
      <div className="mt-48 flex justify-center">
        <div role="status" className="max-w-sm animate-pulse">
          <div className="mb-4 h-3 w-64 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-4 w-[120px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Page data={data} />
      </div>
    );
  }
};

export default CoinByID;
