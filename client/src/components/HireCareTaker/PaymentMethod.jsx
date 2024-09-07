const PaymentMethod = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>4. Seleccioná método de pago</h2>
      <div className="flex flex-col gap-4 min-[1100px]:max-w-[80%]">
        <div>
          <select name="card-type" className="border-[1px] p-2 border-gray-300 rounded-lg w-full">
            <option value="credit-card">Tarjeta de crédito</option>
            <option value="debit-card">Tarjeta de débito</option>
          </select>
        </div>
        <div className="flex flex-col [&>div>input]:p-2 [&>div>input]:border-gray-300">
          <div className="[&>input]:w-full">
            <label className="hidden" htmlFor="card-owner">Nombre y apellido</label>
            <input className="rounded-lg rounded-b-none border-b-0 border" type="text" id="card-owner" name="card-owner" placeholder="Nombre y apellido" />
          </div>
          <div className="[&>input]:w-full">
            <label className="hidden" htmlFor="card-number">Número de tarjeta</label>
            <input className="rounded-lg rounded-b-none rounded-t-none border" type="text" id="card-number" name="card-number" placeholder="Número de tarjeta" />
          </div>
          <div className="flex [&>input]:w-full [&>label]:hidden">
            <label htmlFor="card-expiration">Fecha de vencimiento</label>
            <input className="rounded-lg rounded-t-none rounded-r-none border-b border border-r-0 border-t-0" type="text" id="card-expiration" name="card-expiration" placeholder="Fecha de vencimiento" />
            <label htmlFor="card-cvv">CVV</label>
            <input className="rounded-lg rounded-t-none rounded-l-none border border-t-0" type="text" id="card-cvv" name="card-cvv" placeholder="CVV" />
          </div>
        </div>
        <p className="text-xs md:text-sm text-gray-400 mt-4">El cuidador tiene 24 horas para confirmar tu reserva. No te vamos a cobrar hasta que el no acepte tu solicitud.</p>
      </div>
    </section>
  )
}

export default PaymentMethod