import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { Button } from "@material-tailwind/react";

import MainLayout from "@/components/MainLayout";
import TeamIcon from "@/assets/image/team/team.svg";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useTeam from "@/hooks/useTeam";

const CardWrapper = ({ 
  senderName,
  message,
  handleAcceptInvitation,
  handleRejectInvitation
}) => (
  <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Invitation from
      </Typography>
      <Typography variant="h5" component="div">
        {senderName} Hasan
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {message} You have been invited to join the team.
      </Typography>
    </CardContent>
    <CardActions>
      <Stack
        direction="row"
        gap={2}
        sx={{
          justifyContent: "end",
        }}
      >
        <Button size="small" variant="outlined" onClick={
          () => handleRejectInvitation()
        }>
          Reject
        </Button>
        <Button size="small" onClick={
          () => handleAcceptInvitation()
        }
        >Accept</Button>
      </Stack>
    </CardActions>
  </>
);

export default function TeamScene() {
  const [data, setData] = useState([]);

  const { getInvitations, acceptInvitation, rejectInvitation} = useTeam();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInvitations();
      console.log(response);
      setData(response.data);
    };
    fetchData();
  }, []);


  const handleAcceptInvitation = async (id) => {
    const response = await acceptInvitation({ id });
    console.log(response);
  };

  const handleRejectInvitation = async (id) => {
    const response = await rejectInvitation({ id });
  }

  return (
    <MainLayout>
      <div className="w-full flex flex-row items-center text-center text-xl md:text-2xl text-black font-bold font-Outfit leading-loose gap-2 m-8 sm:mb-4">
        <ReactSVG src={TeamIcon} />
        <p>Invitations management</p>
      </div>
      <Box sx={{ minWidth: 275, m: 5 }}>
        {data?.map((item, index) => (
          <Card variant="outlined" key={index} className="mb-2">
            <CardWrapper senderName={item.senderName} message={item.message} 
              handleAcceptInvitation={async() => {
                await handleAcceptInvitation(item._id);
                setData(data?.filter((i) => i._id !== item._id));
              }}
              handleRejectInvitation={async() =>{
                 await handleRejectInvitation(item._id);
                  setData(data?.filter((i) => i._id !== item._id));
              }}
            />
          </Card>
        ))}
        {
          data?.length === 0 && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  No invitations available
                </Typography>
              </CardContent>
            </Card>
          )
        }
      </Box>
    </MainLayout>
  );
}

