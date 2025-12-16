import * as React from "react";
import { Button } from "@material-tailwind/react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as CloseSVGIcon } from "@/assets/image/icons/close.svg";
import { ReactComponent as MembersSVGIcon } from "@/assets/image/icons/members.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import useTeam from "@/hooks/useTeam";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {
  FormControl,
  FormControlLabel,
  Switch,
  InputLabel,
  Box,
  Typography,
  Card,
  Grid,
  TextField,
  Stack,
  IconButton,
  Tooltip,
  Radio,
  FormHelperText
} from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useFormik } from 'formik';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
  // width: "500px"
}));

const validationSchema = Yup.object().shape({

});


function ProfileTabComponent() {
  const { inviteMembers, getTeamMembers } = useTeam();

  const initialValues = {
    members: [
      {
        email: "",
        name: "",
      }
    ]
  };
  // const baseUuid = uuid();

  const [members, setMembers] = React.useState([{
    id: "baseUuid",
  }]);

  const handleSubmit = async (values, { setSubmitting }) => {
    const response = await inviteMembers(values);
    console.log(response);

    console.log("Form submitted:", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="p-1" sx={{
          width: "500px"
        }}>
          <Stack direction={{
            sm: 'row',
          }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" gutterBottom component="div">
              {"Members"}
            </Typography>
            <IconButton
              variant="outlined"
              onClick={() => {
                // Add Choice
                setFieldValue(
                  'members',
                  [
                    ...values.members,
                    {
                      email: "",
                      name: "",
                    }
                  ]
                )
              }}
              sx={{
                width: 55,
                height: 55,
              }}
            >
              <AddTwoToneIcon />
            </IconButton>
          </Stack>
          {members ? values.members.map((member, index) => (
            <div className="gap-4 flex flex-col relative">
              { 
              index > 0 &&

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} className="absolute right-0">
                <Tooltip title="Delete" >
                  <IconButton
                    onClick={() => {
                      setFieldValue(
                        'members',
                        [...values.members.filter((_, i) => i !== index)]
                      )
                    }}>

                    <DeleteSharpIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            }

              <div className="w-full flex flex-col justify-start items-center rounded-xl p-6 gap-2 border border-stone-250 mb-2">
                <div className="w-full flex flex-col gap-y-6 justify-start items-start">
                  <div className="w-full lg:w-5/5  flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-black text-base font-medium font-Outfit leading-snug">
                        Email address
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                        You will use it to login
                      </div>
                    </div>
                    <div className="self-stretch bg-white justify-start items-center gap-2 inline-flex">
                      <Field
                        type="email"
                        name={`members.${index}.email`}
                        className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug py-2 px-3 border border-stone-250 rounded-md"
                        placeholder="anna.a@pinedev.eu"
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                    />
                  </div>

                  <div className="w-full lg:w-5/5 flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-black text-base font-medium font-Outfit leading-snug">
                        Name
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                        Name of the team member
                      </div>
                    </div>
                    <div className="self-stretch bg-white justify-start items-center gap-2 inline-flex">
                      <Field
                        type="name"
                        name={`members.${index}.name`}
                        className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug py-2 px-3 border border-stone-250 rounded-md"
                        placeholder="6 character minimums"
                      />
                    </div>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                    />
                  </div>
                </div>
              </div>
            </div>
          )) : ""}

          <div className="w-full justify-center items-center gap-2.5 mb-4 inline-flex mt-4">
            <Button
              type="submit"
              className="flex px-3 py-2 bg-stone-950 rounded-md justify-center items-center"
            >
              <ContactMailIcon className="w-4 h-4 fill-current text-white" fontSize="small" />
              &nbsp;&nbsp;
              <div className="text-white text-base font-bold font-Outfit text-lg  leading-tight tracking-tight">
                Sent invitation
              </div>
            </Button>
          </div>

        </Form>
      )}
    </Formik>
  );
}


export default function InviteMemberDialog({
  open,
  handleClose,
  handleInviteMember,
  limitAvailable = true,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BootstrapDialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <button
        onClick={handleClose}
        className="flex flex-row justify-end pt-4 pr-4"
      >
        <CloseSVGIcon className="w-4 h-4 relative" />
      </button>
      <DialogContent className="p-8">
        <div className="flex flex-row justify-center">
          <MembersSVGIcon className="w-16 h-16 relative" />
        </div>

        {
          limitAvailable ? (
            <ProfileTabComponent
              handleClose={handleClose}
              open={open}
              handleInviteMember={handleInviteMember}
            />
          ) :
            <>
              <div className="self-stretch flex-col justify-start items-center gap-4 flex p-4">
                <div className="self-stretch text-center text-stone-950 text-3xl font-bold font-Outfit leading-loose">
                  You’ve reached your team member limit
                </div>
                <div className="self-stretch text-center text-stone-950 text-base font-light font-Outfit leading-snug">
                  It's great that you make full use of KompassAI!
                  <br />
                  Upgrade your plan to invite more team members.
                </div>
              </div>
              <div className="w-full flex flex-row justify-center font-Outfit text-lg text-black font-bold gap-2 my-4">
                <Button
                  className="w-[220px] flex items-center justify-center border-[1px] border-[#000] bg-black text-white text-xs font-Outfit rounded-full py-4"
                  onClick={handleInviteMember}
                >
                  Check upgrade options
                </Button>
              </div>
            </>
        }
      </DialogContent>
    </BootstrapDialog>
  );
}
