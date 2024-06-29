import CrimeCard from "@/components/CrimeCard";
import Globe from "@/components/Globe";
import Map from "@/components/Map";

let data = [
  {
    typeOfCrime: "Burglary",
    location: {
      address: "456 Oak Street",
      city: "Metropolis",
      state: "NY",
      zipcode: "10001",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    time: "2024-06-15T02:00:00Z",
    description: "A window was broken and several electronics were stolen.",
    media: {
      photos: ["https://example.com/photos/photo1.jpg"],
      videos: ["https://example.com/videos/video1.mp4"],
    },
  },
  {
    typeOfCrime: "Assault",
    location: {
      address: "789 Elm Street",
      city: "Gotham",
      state: "NJ",
      zipcode: "07001",
      coordinates: {
        latitude: 40.7357,
        longitude: -74.1724,
      },
    },
    time: "2024-06-16T21:15:00Z",
    description:
      "Two individuals were involved in a physical altercation in the park.",
    media: {
      photos: ["https://example.com/photos/photo2.jpg"],
      videos: ["https://example.com/videos/video2.mp4"],
    },
  },
  {
    typeOfCrime: "Theft",
    location: {
      address: "123 Pine Street",
      city: "Smallville",
      state: "KS",
      zipcode: "66002",
      coordinates: {
        latitude: 39.0528,
        longitude: -95.6778,
      },
    },
    time: "2024-06-17T13:45:00Z",
    description: "A bicycle was stolen from the front yard.",
    media: {
      photos: ["https://example.com/photos/photo3.jpg"],
      videos: ["https://example.com/videos/video3.mp4"],
    },
  },
  {
    typeOfCrime: "Vandalism",
    location: {
      address: "321 Cedar Street",
      city: "Star City",
      state: "CA",
      zipcode: "90210",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    time: "2024-06-18T23:30:00Z",
    description: "Graffiti was spray-painted on the side of a building.",
    media: {
      photos: ["https://example.com/photos/photo4.jpg"],
      videos: ["https://example.com/videos/video4.mp4"],
    },
  },
  {
    typeOfCrime: "Hit and Run",
    location: {
      address: "654 Maple Avenue",
      city: "Central City",
      state: "CO",
      zipcode: "80422",
      coordinates: {
        latitude: 39.8017,
        longitude: -105.514,
      },
    },
    time: "2024-06-19T08:00:00Z",
    description: "A vehicle struck a pedestrian and fled the scene.",
    media: {
      photos: ["https://example.com/photos/photo5.jpg"],
      videos: ["https://example.com/videos/video5.mp4"],
    },
  },
  {
    typeOfCrime: "Arson",
    location: {
      address: "987 Birch Road",
      city: "Coast City",
      state: "FL",
      zipcode: "33101",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    time: "2024-06-20T19:45:00Z",
    description: "A vehicle was set on fire in the parking lot.",
    media: {
      photos: ["https://example.com/photos/photo6.jpg"],
      videos: ["https://example.com/videos/video6.mp4"],
    },
  },
  {
    typeOfCrime: "Fraud",
    location: {
      address: "213 Willow Lane",
      city: "Emerald City",
      state: "OR",
      zipcode: "97401",
      coordinates: {
        latitude: 44.0521,
        longitude: -123.0868,
      },
    },
    time: "2024-06-21T10:30:00Z",
    description:
      "A credit card was used without authorization to make several purchases.",
    media: {
      photos: ["https://example.com/photos/photo7.jpg"],
      videos: ["https://example.com/videos/video7.mp4"],
    },
  },
  {
    typeOfCrime: "Shoplifting",
    location: {
      address: "432 Spruce Street",
      city: "Mystic Falls",
      state: "VA",
      zipcode: "24501",
      coordinates: {
        latitude: 37.4316,
        longitude: -78.6569,
      },
    },
    time: "2024-06-22T14:00:00Z",
    description: "An individual was caught stealing merchandise from a store.",
    media: {
      photos: ["https://example.com/photos/photo8.jpg"],
      videos: ["https://example.com/videos/video8.mp4"],
    },
  },
  {
    typeOfCrime: "Domestic Violence",
    location: {
      address: "987 Cedar Street",
      city: "Bludhaven",
      state: "DE",
      zipcode: "19901",
      coordinates: {
        latitude: 39.1582,
        longitude: -75.5244,
      },
    },
    time: "2024-06-23T22:30:00Z",
    description: "A physical altercation occurred between two family members.",
    media: {
      photos: ["https://example.com/photos/photo9.jpg"],
      videos: ["https://example.com/videos/video9.mp4"],
    },
  },
  {
    typeOfCrime: "Public Intoxication",
    location: {
      address: "345 Pine Street",
      city: "Duckburg",
      state: "CA",
      zipcode: "94101",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    time: "2024-06-24T03:00:00Z",
    description: "An individual was found intoxicated in a public park.",
    media: {
      photos: ["https://example.com/photos/photo10.jpg"],
      videos: ["https://example.com/videos/video10.mp4"],
    },
  },
  {
    typeOfCrime: "Cybercrime",
    location: {
      address: "567 Elm Street",
      city: "Storybrooke",
      state: "ME",
      zipcode: "04401",
      coordinates: {
        latitude: 45.2538,
        longitude: -69.4455,
      },
    },
    time: "2024-06-25T09:00:00Z",
    description: "Personal information was stolen through a phishing email.",
    media: {
      photos: ["https://example.com/photos/photo11.jpg"],
      videos: ["https://example.com/videos/video11.mp4"],
    },
  },
  {
    typeOfCrime: "Trespassing",
    location: {
      address: "789 Birch Road",
      city: "Sunnydale",
      state: "CA",
      zipcode: "93001",
      coordinates: {
        latitude: 34.4481,
        longitude: -119.2429,
      },
    },
    time: "2024-06-26T18:30:00Z",
    description: "An individual was found trespassing on private property.",
    media: {
      photos: ["https://example.com/photos/photo12.jpg"],
      videos: ["https://example.com/videos/video12.mp4"],
    },
  },
  {
    typeOfCrime: "Kidnapping",
    location: {
      address: "321 Maple Avenue",
      city: "Riverdale",
      state: "IL",
      zipcode: "60827",
      coordinates: {
        latitude: 41.6448,
        longitude: -87.6186,
      },
    },
    time: "2024-06-27T07:15:00Z",
    description: "A child was reported missing from the playground.",
    media: {
      photos: ["https://example.com/photos/photo13.jpg"],
      videos: ["https://example.com/videos/video13.mp4"],
    },
  },
  {
    typeOfCrime: "Drug Possession",
    location: {
      address: "654 Oak Street",
      city: "Rosewood",
      state: "PA",
      zipcode: "19001",
      coordinates: {
        latitude: 40.0052,
        longitude: -75.2491,
      },
    },
    time: "2024-06-28T23:00:00Z",
    description: "An individual was found in possession of illegal substances.",
    media: {
      photos: ["https://example.com/photos/photo14.jpg"],
      videos: ["https://example.com/videos/video14.mp4"],
    },
  },
  {
    typeOfCrime: "Prostitution",
    location: {
      address: "987 Spruce Street",
      city: "Hawkins",
      state: "IN",
      zipcode: "46301",
      coordinates: {
        latitude: 41.6103,
        longitude: -87.3303,
      },
    },
    time: "2024-06-29T01:30:00Z",
    description:
      "An individual was arrested for soliciting sex in a public area.",
    media: {
      photos: ["https://example.com/photos/photo15.jpg"],
      videos: ["https://example.com/videos/video15.mp4"],
    },
  },
  {
    typeOfCrime: "Embezzlement",
    location: {
      address: "213 Oak Lane",
      city: "Everwood",
      state: "CO",
      zipcode: "80201",
      coordinates: {
        latitude: 39.7392,
        longitude: -104.9903,
      },
    },
    time: "2024-06-30T12:00:00Z",
    description: "A large sum of money was embezzled from a corporate account.",
    media: {
      photos: ["https://example.com/photos/photo16.jpg"],
      videos: ["https://example.com/videos/video16.mp4"],
    },
  },
  {
    typeOfCrime: "Stalking",
    location: {
      address: "456 Birch Road",
      city: "Mystic Falls",
      state: "VA",
      zipcode: "24501",
      coordinates: {
        latitude: 37.4316,
        longitude: -78.6569,
      },
    },
    time: "2024-07-01T17:45:00Z",
    description: "An individual reported being followed and harassed.",
    media: {
      photos: ["https://example.com/photos/photo17.jpg"],
      videos: ["https://example.com/videos/video17.mp4"],
    },
  },
  {
    typeOfCrime: "Animal Cruelty",
    location: {
      address: "789 Maple Avenue",
      city: "Sunnydale",
      state: "CA",
      zipcode: "93001",
      coordinates: {
        latitude: 34.4481,
        longitude: -119.2429,
      },
    },
    time: "2024-07-02T16:30:00Z",
    description: "A dog was found tied up and neglected in a backyard.",
    media: {
      photos: ["https://example.com/photos/photo18.jpg"],
      videos: ["https://example.com/videos/video18.mp4"],
    },
  },
  {
    typeOfCrime: "Homicide",
    location: {
      address: "123 Cedar Street",
      city: "Coast City",
      state: "FL",
      zipcode: "33101",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    time: "2024-07-03T04:00:00Z",
    description: "A body was found in an abandoned warehouse.",
    media: {
      photos: ["https://example.com/photos/photo19.jpg"],
      videos: ["https://example.com/videos/video19.mp4"],
    },
  },
  {
    typeOfCrime: "Forgery",
    location: {
      address: "432 Oak Street",
      city: "Emerald City",
      state: "OR",
      zipcode: "97401",
      coordinates: {
        latitude: 44.0521,
        longitude: -123.0868,
      },
    },
    time: "2024-07-04T13:15:00Z",
    description: "A counterfeit check was cashed at the bank.",
    media: {
      photos: ["https://example.com/photos/photo20.jpg"],
      videos: ["https://example.com/videos/video20.mp4"],
    },
  },
  {
    typeOfCrime: "Child Abuse",
    location: {
      address: "789 Willow Lane",
      city: "Metropolis",
      state: "NY",
      zipcode: "10001",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    time: "2024-07-05T08:45:00Z",
    description: "A child was found with visible signs of physical abuse.",
    media: {
      photos: ["https://example.com/photos/photo21.jpg"],
      videos: ["https://example.com/videos/video21.mp4"],
    },
  },
  {
    typeOfCrime: "Identity Theft",
    location: {
      address: "321 Spruce Street",
      city: "Gotham",
      state: "NJ",
      zipcode: "07001",
      coordinates: {
        latitude: 40.7357,
        longitude: -74.1724,
      },
    },
    time: "2024-07-06T20:00:00Z",
    description:
      "Personal information was stolen and used to open fraudulent accounts.",
    media: {
      photos: ["https://example.com/photos/photo22.jpg"],
      videos: ["https://example.com/videos/video22.mp4"],
    },
  },
  {
    typeOfCrime: "Harassment",
    location: {
      address: "987 Maple Avenue",
      city: "Smallville",
      state: "KS",
      zipcode: "66002",
      coordinates: {
        latitude: 39.0528,
        longitude: -95.6778,
      },
    },
    time: "2024-07-07T15:30:00Z",
    description: "An individual reported being harassed by a neighbor.",
    media: {
      photos: ["https://example.com/photos/photo23.jpg"],
      videos: ["https://example.com/videos/video23.mp4"],
    },
  },
  {
    typeOfCrime: "Burglary",
    location: {
      address: "213 Cedar Street",
      city: "Star City",
      state: "CA",
      zipcode: "90210",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    time: "2024-07-08T02:00:00Z",
    description: "A house was broken into and valuables were stolen.",
    media: {
      photos: ["https://example.com/photos/photo24.jpg"],
      videos: ["https://example.com/videos/video24.mp4"],
    },
  },
  {
    typeOfCrime: "Car Theft",
    location: {
      address: "567 Maple Avenue",
      city: "Central City",
      state: "CO",
      zipcode: "80422",
      coordinates: {
        latitude: 39.8017,
        longitude: -105.514,
      },
    },
    time: "2024-07-09T11:00:00Z",
    description: "A vehicle was stolen from the parking garage.",
    media: {
      photos: ["https://example.com/photos/photo25.jpg"],
      videos: ["https://example.com/videos/video25.mp4"],
    },
  },
  {
    typeOfCrime: "Extortion",
    location: {
      address: "432 Cedar Street",
      city: "Coast City",
      state: "FL",
      zipcode: "33101",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    time: "2024-07-10T14:00:00Z",
    description:
      "An individual was threatened with violence unless money was paid.",
    media: {
      photos: ["https://example.com/photos/photo26.jpg"],
      videos: ["https://example.com/videos/video26.mp4"],
    },
  },
  {
    typeOfCrime: "Bribery",
    location: {
      address: "789 Willow Lane",
      city: "Emerald City",
      state: "OR",
      zipcode: "97401",
      coordinates: {
        latitude: 44.0521,
        longitude: -123.0868,
      },
    },
    time: "2024-07-11T09:00:00Z",
    description: "A government official was caught accepting bribes.",
    media: {
      photos: ["https://example.com/photos/photo27.jpg"],
      videos: ["https://example.com/videos/video27.mp4"],
    },
  },
  {
    typeOfCrime: "Hate Crime",
    location: {
      address: "321 Pine Street",
      city: "Riverdale",
      state: "IL",
      zipcode: "60827",
      coordinates: {
        latitude: 41.6448,
        longitude: -87.6186,
      },
    },
    time: "2024-07-12T22:00:00Z",
    description: "An individual was attacked based on their ethnicity.",
    media: {
      photos: ["https://example.com/photos/photo28.jpg"],
      videos: ["https://example.com/videos/video28.mp4"],
    },
  },
  {
    typeOfCrime: "Human Trafficking",
    location: {
      address: "456 Spruce Street",
      city: "Gotham",
      state: "NJ",
      zipcode: "07001",
      coordinates: {
        latitude: 40.7357,
        longitude: -74.1724,
      },
    },
    time: "2024-07-13T16:00:00Z",
    description: "Individuals were found being transported against their will.",
    media: {
      photos: ["https://example.com/photos/photo29.jpg"],
      videos: ["https://example.com/videos/video29.mp4"],
    },
  },
  {
    typeOfCrime: "Possession of Illegal Weapons",
    location: {
      address: "987 Oak Street",
      city: "Metropolis",
      state: "NY",
      zipcode: "10001",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    time: "2024-07-14T10:00:00Z",
    description: "An individual was found in possession of illegal firearms.",
    media: {
      photos: ["https://example.com/photos/photo30.jpg"],
      videos: ["https://example.com/videos/video30.mp4"],
    },
  },
];

const Homepage = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(position);
  });

  return (
    <div>
      {/* <Globe /> */}
      {/* <Map /> */}
      {data.map((item, index) => (
        // <div key={index}>{item.typeOfCrime}</div>
        <CrimeCard key={index} crime={item} />
      ))}
    </div>
  );
};

export default Homepage;
