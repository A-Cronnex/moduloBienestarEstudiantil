
import "./infotable.css"


function Button({foo,type,texto}){
    return(
        <button className={type}>
            {texto}
        </button>
    )
}



function InfoTable({data}){

    let foo = (index,array) => {
        if(index == array.length - 1){
            return(
                <>
                <Button type="editar" texto="Editar"/>
                <Button type="eliminar" texto="Eliminar"/>
                </>
            )
        } else {
            return (
                <p>Hola</p>
            )
        }
    }

    return (
        <table className="infoTable">
            <thead>
                <tr>
                    {
                        data.map((row,index)=>{
                            return(
                                <td id={index}>
                                    {row}
                                </td>
                            )
                        })

                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row,index)=>{
                        return(
                            <tr>
                                {
                                    data.map((row,index) => {
                                        return(
                                            <td id={index}>
                                                {foo(index,data)}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )  
}


export default InfoTable