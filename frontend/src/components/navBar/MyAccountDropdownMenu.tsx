import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/useAuthStore";

import { useGeneralStore } from "@/store/useGeneral";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CustomIcon from "@/components/CustomIcon";

import { LogOut, User } from "lucide-react";

const MyAccountDropdownMenu = () => {
  const { authUser, logOutRequest } = useAuthStore();
  const { previewProfilePic } = useGeneralStore();

  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          src={`${
            previewProfilePic
              ? previewProfilePic
              : authUser?.profilePic === ""
              ? "/imgs/default-user.svg"
              : authUser?.profilePic
          }`}
          className="w-8 h-8 rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <p className="font-montserrat">Mi cuenta</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex gap-3 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <CustomIcon icon={User} variant={"nohover"} />
          <p className="font-poppins">Ir al perfil</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-3 cursor-pointer"
          onClick={() => {
            logOutRequest();
          }}
        >
          <CustomIcon icon={LogOut} variant={"destructive"} />
          <p className="font-poppins">Salir</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyAccountDropdownMenu;