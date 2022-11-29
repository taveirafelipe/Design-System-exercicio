import React, { useState } from "react";
import { ChakraProvider, Button, Grid } from "@chakra-ui/react";
import BlogPostWithImage from "./components/blogPostWithImage";

function App() {
  const [data, setData] = useState([
    {
      img: "https://d1b3667xvzs6rz.cloudfront.net/2022/11/global-tourism-810x456-1-768x430.jpeg",
      heading: "Global traveller survey reveals international travel is back",
      text: "According to the survey of more than 26,000 consumers from 25 countries, conducted by YouGov for WTTC, 63% are planning a leisure trip in the next 12 months",
      imgAutor:
        "https://www.infomoney.com.br/wp-content/uploads/2019/06/homer-simpson.jpg?fit=900%2C734&quality=50&strip=all",
      nameAutor: "Homer",
      date: "Nov 08, 2022",
      readingTime: 6,
      link: "https://dailynewsegypt.com/2022/11/29/global-traveller-survey-reveals-international-travel-is-back/",
    },
    {
      img: "https://picsum.photos/seed/2/200/200",
      heading: "HotelPlanner's Top 10 Travel Trends for 2023",
      text: "'Purpose-driven' travel trends reflect the pent-up demand for epic “Insta-worthy”adventure for which travelers are willing to pay a premium; more culturally immersive and experiential travel with friends and family; and extended stays that mix business and leisure travel.",
      imgAutor:
        "https://http2.mlstatic.com/D_NQ_NP_931824-MLB48731751809_012022-O.jpg",
      nameAutor: "Marge",
      date: "Oct 15, 2022",
      readingTime: 5,
      link: "https://www.businesswire.com/news/home/20221129005287/en/HotelPlanner%E2%80%99s-Top-10-Travel-Trends-for-2023",
    },
    {
      img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F221124110348-07-bridget-mccutchen.jpg",
      heading:
        "The woman aiming to be the youngest to travel the world by motorcycle",
      text: "Born into a family of motorcyclists, Bridget McCutchen was able to witness firsthand the thrill that riding a motorbike could bring from a very early age. The 22-year-old, who grew up in Northern Wisconsin, got her first bike when she was around 19 and soon began heading off on trips to the likes of Baltimore and New York.",
      imgAutor:
        "https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/04/lisa-1.jpg",
      nameAutor: "Lisa",
      date: "Sep 29, 2022",
      readingTime: 7,
      link: "https://www.cnn.com/travel/article/the-woman-traveling-the-world-by-motorcycle/index.html",
    },
  ]);

  return (
    <ChakraProvider>
      {/* <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Adicionar
      </Button> */}
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        {data.map((item, index) => {
          return <BlogPostWithImage key={index} item={item} />;
        })}
      </Grid>
    </ChakraProvider>
  );
}

export default App;
