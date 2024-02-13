import { useState } from "react";

const WelcomeScreenService = ()=>{
  const [pin, setPin] = useState("");
  const [isCompModalOpen, setIsCompModalOpen] = useState(false);

  return{
    pin, setPin,
    isCompModalOpen, setIsCompModalOpen
  }
}

export default WelcomeScreenService;