export default function MsgModal({ setShowMsgModal }) {
  return (
    <>
      <div onClick={() => setShowMsgModal(false)} className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-20 cursor-pointer"></div>
      <div className="absolute inset-0 m-auto max-sm:mx-6 bg-page-background sm:max-w-[500px] h-fit rounded-2xl flex flex-col gap-4 shadow-xl p-6 border border-gray-500 border-opacity-20 z-20">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg sm:text-xl">¡Enviá un mensaje al cuidador!</h3>
          <form className="flex flex-col gap-6">
            <textarea id='question-form-faq' required className="min-h-[100px] w-full p-2 border-2 border-gray-300 rounded-lg outline-none" placeholder="Hola, me gustó tu perfil y quería saber..." name='question'></textarea>
            <button onClick={() => setShowMsgModal(false)} type="button" className="w-full bg-btn text-white font-medium rounded-lg py-2 border-[1px] border-btn transition-colors ease-out duration-300 hover:bg-white hover:text-btn disabled:opacity-30">Enviar</button>
          </form>
        </div>
      </div>
    </>
  )
}