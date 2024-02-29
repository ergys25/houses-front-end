"use client";

import * as React from "react";

function getGradient(colors) { // getGradient function
    const [color1, color2] = colors.split(' and ');
    return `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`;
}

function MyComponent({ data }) { // MyComponent function

    return (
        <>
            {data && data.map((house, index) => ( // data.map function
                <div className="div" key={index}>
                    <div className="div-2">
                        <div className="div-3">
                            <div className="div-4">{house.name}</div>
                            <div className="div-5">{house.animal}</div>
                        </div>
                        <div className="div-6" style={{background: getGradient(house.houseColours)}} />
                        <div className="div-7">
                            <div className="div-8">Founder:</div>
                            <div className="div-9">{house.founder}</div>
                        </div>
                    </div>
                </div>
            ))}
            <style jsx>{` // style jsx
        .div {
          align-items: center;
          background-color: #fff;
          display: flex;
          justify-content: center;
          font-size: 16px;
          color: #000;
          padding: 10px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          align-content: flex-start;
          flex-wrap: wrap;
          border-radius: 10px;
          box-shadow: 0px 4px 41.8px 0px rgba(0, 0, 0, 0.3);
          background-color: #fff;
          display: flex;
          margin-top: 10px;
          width: 495px;
          max-width: 90%;
          flex-direction: column;
          padding: 8px 16px;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-top: 10px;
          }
        }
        .div-3 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-4 {
          font-family: Verdana, sans-serif;
          font-weight: 700;
          margin-right: 118px;
        }
        @media (max-width: 640px) {
          .div-4 {
            margin-right: -4px;
          }
        }
        .div-5 {
          font-family: Verdana, sans-serif;
          font-weight: 400;
          flex-grow: 1;
          flex-basis: auto;
          margin-left: 200px;
        }
        @media (max-width: 640px) {
          .div-5 {
            padding-left: 31px;
            margin-left: 127px;
          }
        }
        .div-6 {
          border-radius: 12px;
          background: linear-gradient(90deg, #fff 0%, #000 100%);
          box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
          margin-top: 14px;
          height: 20px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
          }
        }
        .div-7 {
          display: flex;
          margin-top: 14px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-right: -5px;
          }
        }
        .div-8 {
          font-family: Verdana, sans-serif;
          font-weight: 400;
          margin-right: 10px;
        }
        @media (max-width: 640px) {
          .div-8 {
            margin-right: -2px;
          }
        }
        .div-9 {
          font-family: Verdana, sans-serif;
          font-weight: 700;
          flex-grow: 1;
          flex-basis: auto;
          margin: 0 200px 0 -4px;
        }
        @media (max-width: 991px) {
          .div-9 {
            padding-left: 8px;
          }
        }
        @media (max-width: 640px) {
          .div-9 {
            margin: -5px -2px 0 0;
          }
        }
            `}</style>
        </>
    );
}

export default MyComponent;


