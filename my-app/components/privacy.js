import React from 'react';

export default function CookieBanner({
  titolo,
  descrizione,
  policy ,
  accettatutto,
  accettanecessari ,
  preferenze,
  cookie,
}) {
  return (
    <div className="items-center">
      <div className="bg-white p-10 flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl text-blue-400">{titolo}</h2>
          <p className="text-sm mt-2 text-blue-400">{descrizione}</p>
          <br></br>
          <a className="text-gray-500" href="#">
            {policy}
          </a>
        </div>
        <div className="flex flex-col gap-4 ml-5">
          <button className="bg-blue-400 text-white px-20 py-3" >
            {cookie}
          </button>
          <button className="bg-blue-400 text-white px-20 py-3">
            {accettatutto}
          </button>
          <button className="bg-blue-400 text-white px-20 py-3">
            {accettanecessari}
          </button>
          <button className="text-white bg-blue-400 px-20 py-3">
            {preferenze}
          </button>
        </div>
      </div>
    </div>
  );
}
