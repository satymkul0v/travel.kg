import React, { useEffect, useState } from "react";
import "./Home.css";
import img1 from "/assets/trek.png"
import img2 from '/assets/Arslanbob02.png'
const img3 = '/assets/alabuka.png'
import img4 from '/assets/padyshaata.png'
const img5 = '/assets/chatkal.png'

function Home() {
  const [location, setLocation] = useState(0);
  const images = [img1, img2, img3,img4, img5]; // Массив изображений
  const text1 = ['SARY-CHELEK','ARSLANBAP', 'ALA-BUKA' , 'PADYSHA-ATA', 'CHATKAL' ]
  const price = ['202 $', '300 $', '190 $', '240 $', '230 $', '450 $']
  const text2 = ['Sary-Chelek (also Sarychelek,) is a mountain lake located in Sary-Chelek Nature Reserve in Jalal-Abad Province in Western Kyrgyzstan ','Arslanbob (Kyrgyz: Арстанбап) is a village, sub district, valley, mountain range, and a large forest of wild walnut (Juglans regia) in the Jalal-Abad Region of Kyrgyzstan.','Ala-Buka a village which is the seat of Ala-Buka District of Jalal-Abad Region, Kyrgyzstan. Its population was 15,426 in 2021.', 'Kashka-Suuy aiyl district is part of the Aksy district, Jalal-Abad region, with a center in the village of Kashka-Suu. On the territory of the region and near the village of Kashka-Suu.','The Chatkal (Russian: Чаткал) is a river of Jalal-Abad Region, Kyrgyzstan and Tashkent Region in Uzbekistan. It is the left source river of the Chirchiq in the Syr Darya basin. In its upper course it is called Karakulja']
  const maxLocation = images.length - 1// Последний индекс массива

  useEffect(() => {
    const interval = setInterval(() => {
      setLocation((prevLocation) => (prevLocation >= maxLocation ? 0 : prevLocation + 1));
    }, 3000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <div>
      <div className="img-style">
        <img src={images[location]} alt="Kyrgyzstan Landscape" />
        <h1>VISIT KYRGYZSTAN <br />{text1[location]}</h1> 
        <hr />
        <h4 className='BBb'> <span>BB</span> Travel</h4>

        <p className='aer'> {text2[location]}</p>
        <h3 className='era'> price <br/>{price[location]}</h3>

        <div className='button'>
          <a href="#">READ TUR</a>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
