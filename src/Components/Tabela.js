import React from "react";

export default function Tabela() {
    return (

        <>
            <table class="tabela">

                <tbody>

                    <tr class="cabeca">
                        <th rowspan="2" scope="row">Nome</th>
                        <th colspan="2" scope="row">Contatos</th>
                        <th colspan="3" scope="row">Endereço</th>


                    </tr>
                    <tr>

                        <th>Telefone</th>
                        <th>email</th>
                        <th>Cep</th>
                        <th>UF</th>
                        <th>Cidade</th>
                    </tr>
                    <tr>
                        <td>joão</td>
                        <td>619475898</td>
                        <td>j@gmail.com</td>
                        <td>72.474-857</td>
                        <td>DF</td>
                        <td>Ceilândia</td>
                    </tr>
                    <tr>
                        <td>Maria</td>
                        <td>61986048</td>
                        <td>mm@gmail.com</td>
                        <td>72.474-667</td>
                        <td>DF</td>
                        <td>Ceilândia</td>

                    </tr>
                    <tr>
                        <td>Bruno</td>
                        <td>61899048</td>
                        <td>brbb@gmail.com</td>
                        <td>72.454-557</td>
                        <td>DF</td>
                        <td>Taguatinga</td>

                    </tr>
                </tbody>
            </table>
        </>


    )
}