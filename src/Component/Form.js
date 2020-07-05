import React from 'react'

function Form(props){
    return(
        <React.Fragment>
            <form>
                <table>
                    <tr>
                        <td>Name :</td>
                        <td>
                            <input id='idName' name='idName' type='text' value={props.namePengguna} onChange={props.setPengguna}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Bilangan Pertama : </td>
                        <td>
                            <input id='bilanganPertama' name='bilanganPertama' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td>Bilangan Kedua : </td>
                        <td>
                            <input id='bilanganKedua' name='bilanganKedua' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input id='btnSubmit' name='btnSubmit' type='submit' value='Save'/>
                        </td>
                    </tr>
                </table>
            </form>
        </React.Fragment>
    )
}
export default Form