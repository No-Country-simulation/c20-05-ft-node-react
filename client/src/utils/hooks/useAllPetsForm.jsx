import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const useAllPetsForm = () => {
  const dispatch = useDispatch()
  const { numberOfPetForms, forms } = useSelector((state) => state.petForm)
  const [currentNumberPetForm, setCurrentNumberPetForm] = useState(0)

  useEffect(() => {
    console.log('currentNumberPetForm', currentNumberPetForm)
  }, [currentNumberPetForm])

  const petFormRefs = useRef([])

  return {
    dispatch,
    forms,
    numberOfPetForms,
    currentNumberPetForm,
    setCurrentNumberPetForm,
    petFormRefs
  }
}