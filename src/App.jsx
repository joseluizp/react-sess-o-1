import { useState } from "react"
function App() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");

    const [messagem, setmessage] = useState("messagem");


    function verificaCampos(e) {
        e.preventDefault()
        if (nome == "") {
            setmessage("Digite o Nome")
        }

        if (telefone == "") {
            setmessage("Digite o Telefone")
        }

        if (endereco == "") {
            setmessage("Digite o Endereco")
        }
    }


    return (
        <div>
            <header className="nav">
                <img className="logo" src="/logo.png" alt="" />
                <img src="/shop-car.png" alt="" />
            </header>

            <div className="ctx-principal">
                <form className="form-1" >
                    <h1>Pedidos</h1>

                    <div className="item-input">
                        <label >Nomes</label>
                        <input type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className="item-input">
                        <label >Telefones</label>
                        <input type="text" placeholder="telefone"
                            value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </div>

                    <div className="item-input">
                        <label >Endereco</label>
                        <input type="text" placeholder="endereco" value={endereco}
                            onChange={e => setEndereco(e.target.value)}
                        />
                    </div>

                    <button onClick={verificaCampos}>Enviar</button>

                    <h3>{messagem}</h3>
                </form>

                <img src="/pizza.png" className="img-principal" alt="" />

            </div>

        </div>
    )
}
export default App