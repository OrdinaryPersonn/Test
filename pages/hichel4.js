import { useState } from "react";

const Data = [
  {
    id: 1,
    fname: "Naruto",
    lname: "Uzumaki",
    rank: "Genin",
    alive: true,
    height: 166,
    image: "https://i.pinimg.com/736x/bd/0b/e5/bd0be5136e4214a25a160af157e92d43.jpg",
  },
  {
      id: 2,
      fname: "Sakura",
      lname: "Haruno",
      rank: "Chunin",
      alive: true,
      height: 161,
      image: "https://i.pinimg.com/736x/10/03/5f/10035fa57377e1d9b7fb291e2d8fb945.jpg",
  },
  {
      id: 3,
      fname: "Sasuke",
      lname: "Uchiha",
      rank: "Genin",
      alive: true,
      height: 168,
      image: "https://preview.redd.it/r3b2ic3lylw61.jpg?auto=webp&s=6b78275917898bdcd7374fb35a122d6e20e62a14",
  },
  {
      id: 4,
      fname: "Kakashi",
      lname: "Hatake",
      rank: "Jonin",
      alive: true,
      height: 181,
      image: "https://preview.redd.it/whats-your-opinion-on-hatake-kakashi-is-he-overrated-v0-54lk9zp713kc1.jpeg?auto=webp&s=5c02491fb3cef7671b0068e5b91a5bcf18de8797",
  },
  {
      id: 5,
      fname: "Shikamaru",
      lname: "Nara",
      rank: "Jonin",
      alive: true,
      height: 170,
      image: "https://i.pinimg.com/736x/47/46/6e/47466eca2bfc5b8cb5634f55af470228.jpg",
  },
  {
      id: 6,
      fname: "Ino",
      lname: "Yamanaka",
      rank: "Chunin",
      alive: true,
      height: 162,
      image: "https://64.media.tumblr.com/a9459e10a41ba8e19057a93b80993ef9/tumblr_pnxd11jVIv1wwomqk_250.jpg",
  },
  {
      id: 7,
      fname: "Choji",
      lname: "Akimichi",
      rank: "Jonin",
      alive: true,
      height: 172,
      image: "https://i.pinimg.com/736x/b4/61/4e/b4614e36f2cb1a8f06ddef72da6687e3.jpg",
  },
  {
      id: 8,
      fname: "Asuma",
      lname: "Sarutobi",
      rank: "Jonin",
      alive: false,
      height: 190,
      image: "https://i.pinimg.com/736x/25/e9/56/25e9569a04ad29451297e75d7baf657c.jpg",
  },

  {
      id: 9,
      fname: "Shino",
      lname: "Aburame",
      rank: "Chunin",
      alive: true,
      height: 175,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRwoBEps6pbcisrcMMDDEQWVpzhF_yallBQ&s",
  },
  {
      id: 10,
      fname: "Hinata",
      lname: "Hyūga",
      rank: "Ninja",
      alive: true,
      height: 160,
      image: "https://pm1.aminoapps.com/7893/08292327172e0f072d392864763234d8ca1080bdr1-736-712v2_hq.jpg",
  },
];

function Home() {
  return (
    <div className="m-5 grid h-48 grid-cols-4 place-content-around gap-4">
      {Data.map((person) => (
        <div className="border p-2 rounded-lg flex-col items-center justify-center flex" key={person.id}>
            <img src={person.image} alt={`${person.fname}`} width="250" />
            <h2 className="font-bold mt-2">{person.fname} {person.lname}</h2>
            <p>Rank: {person.rank}</p>
            <p>Height: {person.height} cm</p>
            <p>Status: {person.alive ? "Alive" : "Dead"}</p>
        </div>
      ))}
    </div>
    
  );
}

export default Home;
