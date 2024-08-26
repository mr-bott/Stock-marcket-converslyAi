import {Link} from "react-router-dom"
import React from 'react';
import './index.css';
const stockMarketData = [
  {
    imgUrl: 'https://img-cdn.pixlr.com/image-generator/history/66cb40b45e9642e90c4c3903/7b2847cf-8636-45f3-b768-a3ff1889dd81/preview.webp',
    title: 'Global Stock Market Trends',
    description: 'Stay updated with the latest global stock market trends and insights.',
    url:"https://www.moneycontrol.com/markets/global-indices/"
  },
  {
    imgUrl: 'https://img-cdn.pixlr.com/image-generator/history/66cb3e587f0328414a40bf81/f5714af9-d9d5-4f58-a0ff-1b22d4fb776e/preview.webp',
    title: 'Top Gainers and Losers',
    description: 'Discover the top gainers and losers in the stock market today.',
    url: "https://www.nseindia.com/market-data/top-gainers-losers"
  },
  {
    imgUrl: 'https://img-cdn.pixlr.com/image-generator/history/66cb3e587f0328414a40bf81/e1ccd21a-9e95-460a-a142-3f889bf22139/preview.webp',
    title: 'Investment Strategies',
    description: 'Explore various investment strategies to maximize your returns.',
    url: "https://www.investopedia.com/investing/investing-strategies/"
  },
];

const Home = () => {
  const handleCardClick = (url) => {
    window.open(url, '_blank'); 
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Stock Market Dashboard</h1>
        <p>Your go-to source for the latest stock market news and data.</p>
      </header>
      <div className='image-container'>
        <div className='side'>
          <p className='para'>Stay up-to-date with the latest market trends and insights, ensure your investments are secure with our robust platform, and effortlessly track all your financial details to make informed decisions with ease.</p>
          <Link to="/Toplist">
          <button className='btn'>View</button>
          </Link>
          <img src="https://img-cdn.pixlr.com/image-generator/history/66cb3e587f0328414a40bf81/3f3a594f-13e0-436d-b1f5-bc0681c164bf/preview.webp" alt="stockimage" className='small-image'/>
        </div>
        <img src="https://img-cdn.pixlr.com/image-generator/history/66cb3e587f0328414a40bf81/3f3a594f-13e0-436d-b1f5-bc0681c164bf/preview.webp" alt="stockimage" className='main-image'/>
      </div>
      
      <section className="info-section">
        {stockMarketData.map((item, index) => (
          <div 
            key={index} 
            className="info-card"
            onClick={() => handleCardClick(item.url)} 
          >
            <img src={item.imgUrl} alt={item.title} className="info-image" />
            <div className="info-content">
              <h2 className="info-title">{item.title}</h2>
              <p className="info-description">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
