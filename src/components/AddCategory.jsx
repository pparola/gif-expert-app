
import { useState } from "react"

export const AddCategory = ( { onAddCategoria } ) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;
        onAddCategoria(inputValue.trim())
        setinputValue('')
    }

    return (
        <form onSubmit={ onSubmitForm }>
            <input 
                type="text" 
                placeholder="Ingrese Gif a Buscar"
                value={ inputValue }
                onChange={ onInputChange }    
            />    
        </form>
    )
}
