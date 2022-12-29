import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

// api_key 2wOE4JeKFof5x8n8vcFi2hYqHSbEXMgb

export const GiftExpertApp = () => {

    const [Categories, setCategories] = useState(['Homero Simpson'])


    const onAddCategoria = (valor) => 
    {
        if(Categories.includes(valor)) return
        setCategories( [ valor,  ...Categories ] )
    }

    return (
    <>
        <h1>Gift Expert App</h1>

        <AddCategory onAddCategoria={ onAddCategoria } />

            {
                Categories.map( Categoria => ( 
                
                <GifGrid 
                    key={Categoria} 
                    category={Categoria} /> 
                ))
            }

    </>
  )
}
