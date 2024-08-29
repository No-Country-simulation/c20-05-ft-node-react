import React from "react";
import CloseSvg from "../../assets/svg/mingcute--close-line.svg"
import CheckSvg from "../../assets/svg/ic--outline-check-circle.svg"

const ProfileCreatedSuccessfully = () =>{
    return(
<div class="bg-white w-[300px] h-[250px] rounded-lg flex flex-col shadow-xl p-4 gap-4 border border-gray-500 border-opacity-20 m-auto sm:w-[450px] sm:h-[400px] sm:gap-6">

<button class="bg-transparent self-end ">
    <img class="size-7" src={CloseSvg} alt=""/>
</button>

<div class="bg-green-200 size-12 border-8 -mt-8 border-green-100 rounded-full flex items-center justify-center sm:size-16 sm:border-[12px]  ">
    <img class="size-7" src={CheckSvg} alt=""/>
</div>

<div class="flex flex-col gap-2">
    <p class="font-bold text-lg sm:text-2xl">Tu perfil ha sido creado con éxito</p>
    <p class="text-sm text-[#475467] sm:text-lg">¡Ya eres parte de (nombre de app)!</p>
</div>

<div class="mt-3 flex justify-between [&_button]:text-center [&_button]:h-10 [&_button]:w-28 [&_button]:font-bold sm:mt-28 sm:[&_button]:h-14 sm:[&_button]:w-32 sm:[&_button]:text-xl" >
    <button>Omitir</button>
    <button class="border-2 border-blue-400 text-center rounded-lg text-blue-400  ">Ir a perfil</button>
</div>


</div>

    )
}
export default ProfileCreatedSuccessfully;