import * as React from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as CloseSVGIcon } from "@/assets/image/icons/close.svg";
import { ReactComponent as AddSVGIcon } from "@/assets/image/icons/icon-add.svg";
import { ReactComponent as SubSVGIcon } from "@/assets/image/icons/icon-remove.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import SelectDropdown from "./common/SelectDropdown";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
}));

export default function AddTeamSeatDialog({
  open,
  handleClose,
  handleAddSeat,
}) {
  // const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // console.log("Form submitted:", values);
    setSubmitting(false);
  };

  const initialValues = {
    plan: "Premium - 1500 lookups/year - $421.00 USD Yearly Recurring",
    password: "",
    role: "Director",
  };

  const plansOptions = [
    "Premium - 1500 lookups/year - $421.00 USD Yearly Recurring",
    "Premium - 1500 lookups/year - $421.00 USD Yearly Recurring",
    "Premium - 1500 lookups/year - $421.00 USD Yearly Recurring",
  ];

  return (
    <BootstrapDialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <button
        onClick={handleClose}
        className="flex flex-row justify-end pt-4 pr-4"
      >
        <CloseSVGIcon className="w-4 h-4 relative" />
      </button>
      <DialogContent>
        <div className="font-Outfit text-xl text-center text-black font-bold p-3">
          Add team seats
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="w-full flex flex-col justify-start items-center bg-white rounded-2xl p-5 gap-2 gap-y-6 mb-4">
                <div className="w-full flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Plan
                    </div>
                  </div>

                  <SelectDropdown
                    options={plansOptions}
                    selectedOption={values.plan}
                    onChange={(value) => setFieldValue("plan", value)}
                  />
                </div>

                <div className="w-full flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Seats Quantity
                    </div>
                  </div>

                  <div className="w-full h-11 justify-between items-center inline-flex">
                    <div className="w-3/5 h-11 justify-start items-center gap-1 flex">
                      <button
                        onClick={() => {
                          const currentQuantity = Number(values.quantity) || 0;
                          const updateQuantity = currentQuantity + 1;
                          setFieldValue("quantity", updateQuantity);
                        }}
                        className="px-3 py-3 rounded-full border border-rose-500 justify-center items-center gap-2 flex"
                      >
                        <AddSVGIcon className="w-6 h-6 relative" />
                      </button>
                      <Field
                        type="number"
                        name="quantity"
                        placeholder="0"
                        className="w-20 text-center grow shrink basis-0 h-11 px-6 py-3 bg-white rounded-full border border-stone-200 justify-start items-center gap-2 flex"
                      />
                      <button
                        onClick={() => {
                          const currentQuantity = Number(values.quantity) || 0;
                          const updateQuantity = currentQuantity - 1;
                          if (updateQuantity < 0) {
                            setFieldValue("quantity", 0);
                          } else {
                            setFieldValue("quantity", updateQuantity);
                          }
                        }}
                        className="px-3 py-3 rounded-full border border-rose-500 justify-center items-center gap-2 flex"
                      >
                        <SubSVGIcon className="w-6 h-6 relative" />
                      </button>
                    </div>
                    <div className="text-right text-neutral-400 text-sm font-normal font-['Outfit'] leading-tight">
                      3/5 Team seats left
                    </div>
                  </div>
                </div>

                <div className="w-full flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Team members
                    </div>
                  </div>
                  <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                    <Field
                      type="email"
                      name="last_name"
                      className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                      placeholder="saurav.bubber@deel.com"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                    />
                  </div>
                  <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                    <Field
                      type="email"
                      name="last_name"
                      className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                      placeholder="Invite via email address"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="w-full flex flex-row justify-center font-Outfit text-lg text-black font-bold gap-2 mt-4">
          <Button
            className="w-[150px] flex items-center justify-center border-[1px] border-[#E7436A] bg-magenta-500 text-white text-xs font-Outfit rounded-full py-4"
            onClick={handleAddSeat}
          >
            Add Seats
          </Button>
        </div>
      </DialogContent>
      {/* <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions> */}
    </BootstrapDialog>
  );
}
