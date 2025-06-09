import React from "react";

export default function Titolo({
  sopratitolo,
  sottotitolo1,
  titolo,
  Testo,
  titolo1,
  Testo1,
  titolo2,
  Testo2,
  titolo3,
  Testo3,
}) {
  return (
    <div className="items-center">
      <div className="px-24 bg-white p-10">
        <h1 className="text-4xl text-black mt-2">
          {sopratitolo}
        </h1>
        <p className="text-black mt-4">
          {sottotitolo1} 
        </p>
      <br></br>
      <br></br>
      <h1 className="text-4xl text-black mt-2">
          {titolo}
        </h1>
        <p className="text-black mt-4">
          {Testo} 
          </p>
          <br></br>
          <h1 className="text-4xl text-black mt-2">
          {titolo1}
        </h1>
        <p className="text-black mt-4">
          {Testo1} 
          </p>
          <br></br>
          <h1 className="text-4xl text-black mt-2">
          {titolo2}
          <br></br>
        </h1>
        <p className="text-black mt-4">
          {Testo2} 
          </p>
          <br></br>
          <h1 className="text-4xl text-black mt-2">
          {titolo3}
        </h1>
        <p className="text-black mt-4">
          {Testo3} 
          </p>
      </div>
    </div>
  );
}
