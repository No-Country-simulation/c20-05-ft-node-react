import React from "react";
import MailIcon from "../../assets/svg/heroicons-outline--mail.svg"
import CloseSvg from "../../assets/svg/mingcute--close-line.svg"

const PinValidationEmail = () =>{
    return(
        
        <div class="bg-white m-auto w-[300px] h-[366px] rounded-lg flex flex-col shadow-xl p-2 gap-4 items-center cursor-pointer border border-gray-500 border-opacity-20 sm:w-[500px] sm:h-[566px]">

            <button class="self-end size-7 sm:size-16">
                <img class="m-auto" src={CloseSvg} alt=""/>
            </button>

            <div class="rounded-full bg-violet-200 border-8 border-violet-100 border-opacity-60 size-12 mx-auto flex items-center justify-center sm:size-16 sm:border-[10px]">
                <img src={MailIcon} alt=""/>
            </div>
            <div class="flex flex-col gap-1 text-center ">
                <p class="font-bold text-lg sm:text-2xl">Por favor, revisa tu email</p>
                <p class="text-sm sm:text-lg">Te hemos enviado un código a olivia@untitledui.com</p>
            </div>

            <div class="flex flex-col justify-center w-full h-[100px] gap-1 sm:gap-4">

                <div class="flex justify-evenly [&_input]:border-2 [&_input]:border-violet-500 [&_input]:text-violet-500 [&_input]:rounded-lg [&_input]:size-14 [&_input]:text-center sm:[&_input]:size-20">
                    <input type="number" maxlength="1" min="0" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1);"/>
                    <input type="number" maxlength="1" min="0" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1);"/>
                    <input type="number" maxlength="1" min="0" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1);"/>
                    <input type="number" maxlength="1" min="0" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1);"/>
                </div>

                <p class="ml-2 text-sm sm:ml-8">¿No recibiste el código? <a class="underline" href="">Reenviar.</a></p>
                
            </div>

            <div class="w-full flex justify-center gap-3 mb-1 [&_button]:rounded-lg [&_button]:text-center [&_button]:items-center [&_button]:font-semibold [&_button]:h-11 [&_button]:w-[45%] sm:mt-28">
                <button class="bg-white border border-gray-400">Cancelar</button>
                <button class="bg-violet-500 text-white">Confirmar</button>
            </div>
        </div>
    






    )
}

export default PinValidationEmail; 