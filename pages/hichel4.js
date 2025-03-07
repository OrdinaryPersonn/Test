import { useState } from "react";

const Data = [
  {
    id: 1,
    fname: "Naruto",
    lname: "Uzumaki",
    rank: "Genin",
    alive: true,
    items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 101,
        name: "Shuriken"
      },
    ],
    height: 166,
    image: "https://i.pinimg.com/736x/bd/0b/e5/bd0be5136e4214a25a160af157e92d43.jpg",
  },
  {
      id: 2,
      fname: "Sakura",
      lname: "Haruno",
      rank: "Chunin",
      alive: true,
      items: [
        {
          id: 100,
          name: "Kunai"
        },
        {
          id: 101,
          name: "Shuriken"
        },
      ],
      height: 161,
      image: "https://i.pinimg.com/736x/10/03/5f/10035fa57377e1d9b7fb291e2d8fb945.jpg",
  },
  {
      id: 3,
      fname: "Sasuke",
      lname: "Uchiha",
      rank: "Genin",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 101,
        name: "Shuriken"
      },
    ],
      height: 168,
      image: "https://preview.redd.it/r3b2ic3lylw61.jpg?auto=webp&s=6b78275917898bdcd7374fb35a122d6e20e62a14",
  },
  {
      id: 4,
      fname: "Kakashi",
      lname: "Hatake",
      rank: "Jonin",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 101,
        name: "Shuriken"
      },
    ],
      height: 181,
      image: "https://preview.redd.it/whats-your-opinion-on-hatake-kakashi-is-he-overrated-v0-54lk9zp713kc1.jpeg?auto=webp&s=5c02491fb3cef7671b0068e5b91a5bcf18de8797",
  },
  {
      id: 5,
      fname: "Shikamaru",
      lname: "Nara",
      rank: "Jonin",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 101,
        name: "Shuriken"
      },
    ],
      height: 170,
      image: "https://i.pinimg.com/736x/47/46/6e/47466eca2bfc5b8cb5634f55af470228.jpg",
  },
  {
      id: 6,
      fname: "Ino",
      lname: "Yamanaka",
      rank: "Chunin",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 101,
        name: "Shuriken"
      },
    ],
      height: 162,
      image: "https://64.media.tumblr.com/a9459e10a41ba8e19057a93b80993ef9/tumblr_pnxd11jVIv1wwomqk_250.jpg",
  },
  {
      id: 7,
      fname: "Choji",
      lname: "Akimichi",
      rank: "Jonin",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 107,
        name: "Pills"
      },
    ],
      height: 172,
      image: "https://i.pinimg.com/736x/b4/61/4e/b4614e36f2cb1a8f06ddef72da6687e3.jpg",
  },
  {
      id: 8,
      fname: "Asuma",
      lname: "Sarutobi",
      rank: "Jonin",
      alive: false,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 101,
        name: "Shuriken"
      },
    ],
      height: 190,
      image: "https://i.pinimg.com/736x/25/e9/56/25e9569a04ad29451297e75d7baf657c.jpg",
  },

  {
      id: 9,
      fname: "Shino",
      lname: "Aburame",
      rank: "Chunin",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 102,
        name: "Insects"
      },
    ],
      height: 175,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRwoBEps6pbcisrcMMDDEQWVpzhF_yallBQ&s",
  },
  {
      id: 10,
      fname: "Hinata",
      lname: "Hyūga",
      rank: "Ninja",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 101,
        name: "Shuriken"
      },
    ],
      height: 160,
      image: "https://pm1.aminoapps.com/7893/08292327172e0f072d392864763234d8ca1080bdr1-736-712v2_hq.jpg",
  },
  {
      id: 11,
      fname: "Kiba",
      lname: "Inuzuka",
      rank: "Ninja",
      alive: true,
      items: [
      {
        id: 100,
        name: "Kunai"
      },
      {
        id: 103,
        name: "Akamaru"
      },
    ],
      height: 160,
      image: "https://i.pinimg.com/736x/ab/47/58/ab4758431c4783711437c1676611ed37.jpg",
  },
  {
    id: 12,
    fname: "Kurenai",
    lname: "Yūhi",
    rank: "Ninja",
    alive: true,
    items: [
    {
      id: 100,
      name: "Kunai"
    },
    {
      id: 101,
      name: "Shuriken"
    },
  ],
    height: 160,
    image: "https://i.pinimg.com/736x/61/24/62/612462a96659f30452feda47792f4e16.jpg",
},
{
  id: 13,
  fname: "Rock",
  lname: "Lee",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 100,
    name: "Kunai"
  },
  {
    id: 101,
    name: "Shuriken"
  },
],
  height: 160,
  image: "https://i.pinimg.com/564x/b0/0b/c7/b00bc7949aa25a9006ba35b3e8dc3fb0.jpg",
},
{
  id: 14,
  fname: "Tenten",
  lname: "",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 100,
    name: "Kunai"
  },
  {
    id: 101,
    name: "Shuriken"
  },
],
  height: 160,
  image: "https://i.pinimg.com/736x/41/9a/dc/419adc24bbbfdb63f067484dd445da6f.jpg",
},
{
  id: 15,
  fname: "Neji",
  lname: "Hyūga",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 100,
    name: "Kunai"
  },
  {
    id: 101,
    name: "Shuriken"
  },
],
  height: 160,
  image: "https://i.pinimg.com/736x/7f/e7/68/7fe7688faccb936765fbe4141512ad42.jpg",
},
{
  id: 16,
  fname: "Might",
  lname: "Guy",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 100,
    name: "Kunai"
  },
  {
    id: 101,
    name: "Shuriken"
  },
],
  height: 160,
  image: "https://pbs.twimg.com/profile_images/798043257028550656/SL5vKsYT_200x200.jpg",
},
{
  id: 17,
  fname: "Gaara",
  lname: "",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 104,
    name: "Sand"
  },
  {
    id: 104,
    name: "Sand"
  },
],
  height: 160,
  image: "https://i.pinimg.com/736x/69/1f/7d/691f7d9262afbdcae6154f3e9369f584.jpg",
},
{
  id: 18,
  fname: "Temari",
  lname: "",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 100,
    name: "Kunai"
  },
  {
    id: 105,
    name: "Fan"
  },
],
  height: 160,
  image: "https://i.pinimg.com/550x/0f/b4/8a/0fb48a756f44052a6635435919d20379.jpg",
},
{
  id: 19,
  fname: "Kankurō",
  lname: "",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 100,
    name: "Kunai"
  },
  {
    id: 106,
    name: "Puppet"
  },
],
  height: 160,
  image: "https://i.pinimg.com/736x/d5/33/6e/d5336e7a871b2a5221a9b20d7aeccb23.jpg",
},
{
  id: 20,
  fname: "Baki",
  lname: "",
  rank: "Ninja",
  alive: true,
  items: [
  {
    id: 100,
    name: "Kunai"
  },
  {
    id: 101,
    name: "Shuriken"
  },
],
  height: 160,
  image: "https://i.pinimg.com/736x/63/52/14/6352143d4e68b49e0a33a061b12f3ff6.jpg",
},
];

function Home() {
  return (
    <div className="m-5 grid h-48 grid-cols-4 place-content-around gap-4">
      {Data.map((person) => (
        <div className="border p-2 rounded-lg flex-col items-center justify-center flex" key={person.id}>
            <img src={person.image} alt={`${person.fname}`} width="250" />
            <h2 className="font-bold mt-2">{person.fname} {person.lname}</h2>
            <div className="flex justify-between w-full pl-10 pr-10">
            <p>Rank: {person.rank} <br></br>
            Height: {person.height} cm <br></br>
            Status: {person.alive ? "Alive" : "Dead"}</p>
            <div>
              <p>Items:</p>
              <ul className="list-disc pl-4">
                {person.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default Home;
