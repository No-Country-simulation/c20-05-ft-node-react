import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const useAllPetsForm = () => {
  const dispatch = useDispatch()
  const { numberOfPetForms } = useSelector((state) => state.petForm)
  const [currentNumberPetForm, setCurrentNumberPetForm] = useState(0)
  const petFormRefs = useRef([])

  return {
    dispatch,
    numberOfPetForms,
    currentNumberPetForm,
    setCurrentNumberPetForm,
    petFormRefs
  }
}