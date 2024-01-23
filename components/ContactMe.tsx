"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import emailJs from "@emailjs/browser";
import { useState } from "react";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};
function ContactMe({ pageInfo }: Props) {
  const serviceID: any = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID: any = process.env.NEXT_PUBLIC_EMAIL_ID;
  const publicKey: any = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsLoading(true);
    emailJs
      .send(
        serviceID,
        templateID,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phoneNumber,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        reset();
        toast.success("Message sent");
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("An Error occur");
      });
  };
  return (
    <div className="h-screen flex flex-col overflow-hidden text-left max-w-6xl px-10 mx-auto items-center">
      <h3 className=" uppercase tracking-[10px] text-gray-500 text-xl pt-20">
        Contact
      </h3>
      <div className="flex flex-col items-center h-full space-y-2">
        <h4 className="text-2xl font-semibold text-center py-2">
          I have got just what you need.{" "}
          <span className="underline decoration-[#cc5223]">Lets talk</span>
        </h4>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="w-6 h-6 animate-pulse text-[#cc5223]" />
            <p className="text-lg">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="w-6 h-6 animate-pulse text-[#cc5223]" />
            <p className="text-lg">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="w-6 h-6 animate-pulse text-[#cc5223]" />
            <p className="text-lg">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:mx-auto py-2 md:py-5 w-full px-3"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("phoneNumber")}
              type="phone"
              placeholder="Phone"
              className="contactInput"
            />
          </div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="bg-[#cc5223] py-3 px-10 font-bold text-base rounded-md disabled:bg-gray-700 disabled:text-white"
          >
            {isLoading ? "Loading" : "Button"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
