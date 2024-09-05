import React from "react";



export default function Formulario() {
  return (
    <>
      <form class="meuform">
        <div>
          <label for="Nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="Nome" />
        </div>
        <div>
          <label for="Telefone" class="form-label">Telefone</label>
          <input type="Number" class="form-control" id="Telefone" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <p>Sexo:</p>
        <div class="form-check">

          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Masculino
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault2">
            Feminino
          </label>
        </div>
        <select class="form-select" aria-label="Default select example">
          <option selected >UF</option>
          <option value="1">DF</option>
          <option value="2">GO</option>
          <option value="3">TO</option>
          <option value="1">MT</option>
          <option value="2">SP</option>
          <option value="3">RJ</option>
        </select>
        <p></p>
        <p>Hobies</p>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Esporte
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Musica
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Cinema
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Xadrez
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Leitura
          </label>
        </div>
        <label htmlFor="observacao">Observação:</label>
        <textarea
          id="observacao"
          name="observacao"
          rows="4"
          cols="50"
          placeholder="Digite suas observações aqui..."
          style={{ width: '100%', padding: '10px', resize: 'vertical' }}
        ></textarea>





        <div class="butoes">
          <button type="button" class="btn btn-secondary">Voltar</button>
          <button type="button" class="btn btn-warning">Limpar</button> 
          <button type="button" class="btn btn-primary">Salvar</button>
       

        </div>


      </form>





    </>
  )

}