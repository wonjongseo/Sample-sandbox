//npx create-react-app@5.0.0 my-app

import React from "react";

export default () => {
  const [loading, setLoading] = React.useState(true);
  const [coins, setCoins] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin, index) => (
            <li key={index}>{coin.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
