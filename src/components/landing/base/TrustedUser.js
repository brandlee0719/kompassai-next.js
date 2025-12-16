import { Box, useMediaQuery, Grid, useTheme, Rating } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import person1 from "@/assets/image/about/Person1.png";
import person2 from "@/assets/image/about/Person2.png";
import person3 from "@/assets/image/about/Person3.png";
import person4 from "@/assets/image/about/Person4.png";
import person5 from "@/assets/image/about/Person5.png";
import person6 from "@/assets/image/about/Person6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@material-tailwind/react";
import Text from "@/components/Text";

const User = ({ isMobile, face, feedback, name, position }) => {
  return (
    <Box
      className="flex max-sm:flex-col max-lg:flex-col p-16 max-sm:p-6 items-start self-stretch gap-[24px] rounded-[30px] bg-white box-Shadow3"
      sx={{
        display: isMobile ? "inline-block" : "flex !important",
        height: "350px",
        overflowY: "hidden",
      }}
    >
      <Box
        className="w-48 h-48 rounded-[100px] m-auto flex flex-col items-center"
        style={{ alignSelf: "center" }}
      >
        <img src={face} alt="person" />
        <Rating name="read-only" className="mt-4" value={5} readOnly />
      </Box>
      <Box className="flex flex-col items-start flex-1 flex-shrink-0 max-sm:mt-8 gap-12">
        <Text variant="SubHeader2" className="text-stone-950 ">
          {feedback}
        </Text>
        <Text variant="SubHeader1" className="text-stone-950">
          {name}
          <Typography className="text-stone-350">{position}</Typography>
        </Text>
      </Box>
    </Box>
  );
};
const TrustedUser = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box className="flex flex-col items-center mx-12 mt-24 mb-24">
        <Box
          className="text-center text-white uppercase bg-black rounded-full bg-black w-40 font-OutfitMedium text-md mb-8"
        >
          <Text>TESTIMONIALS</Text>
        </Box>

        <div className="font-OutfitBold text-stone-950 text-black text-center text-[3rem] pb-12">
          What clients says about us
        </div>
        <Slider {...settings} className="custom-p35">
          <div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                className="max-sm:order-2 max-lg:order-2"
              >
                <User
                  isMobile={isMobile}
                  face={person1}
                  feedback="If you do an ROI assessment on KompassAI it had well over 20 times return on capital for my startup - would highly recommend!"
                  name="Amish Taploo"
                  position="Veritao Skincare, Chief Executive Officer"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                className="max-sm:order-2 max-lg:order-2"
              >
                <User
                  isMobile={isMobile}
                  face={person2}
                  feedback="After implementing KompassAI across our sales team we saw our revenue grow rapidly, as we had 0% bounce rates on email outreach"
                  name="Liam Jeys"
                  position="RocketWallet, Operations Manager"
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                className="max-sm:order-2 max-lg:order-2"
              >
                <User
                  isMobile={isMobile}
                  face={person3}
                  feedback="Truly the best tool on the market - allows me to efficiently build prospect lists with my SDRs and close deals at at a rapid pace!"
                  name="Kyle De Souza"
                  position="Vena Solutions"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                className="max-sm:order-2 max-lg:order-2"
              >
                <User
                  isMobile={isMobile}
                  face={person4}
                  feedback="Love the email LinkedIn prospecting tool - helps me
                  connect with potential partners without going straight to
                  spam"
                  name="Matthew Plante"
                  position="Rocket Mortgage"
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                className="max-sm:order-2 max-lg:order-2"
              >
                <User
                  isMobile={isMobile}
                  face={person5}
                  feedback="KompassAI was instrumental in supporting our experienced
                  hire recruiting efforts, we where able to identify
                  candidate emails with ease."
                  name="Samantha Holland"
                  position="Coca Cola"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                className="max-sm:order-2 max-lg:order-2"
              >
                <User
                  isMobile={isMobile}
                  face={person6}
                  feedback="Love the email LinkedIn prospecting tool - helps me
                  connect with potential partners without going straight to
                  spam"
                  name="John Abraham"
                  position="CIBC"
                />
              </Grid>
            </Grid>
          </div>
        </Slider>
      </Box>
    </>
  );
};

export default TrustedUser;
