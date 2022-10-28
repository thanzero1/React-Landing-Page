import './Main.css'

import SlideCapa from "../components/imagens/slide-logo.jpg"

function Main() {

    return (
        <>
            <div className='container-main'>
                <p className='txt-inicio'> Esse é um site feito somente com React, <br />
                    em homenagem a minha música favorita, Slide.
                </p>
                <a href='https://www.youtube.com/watch?v=8Ee4QjCEHHc' target={'_blank'} className='container-song'>
                <img className='image-slide' src={SlideCapa}  />
                <h2>Slide</h2><br/>
                <p className='copy-song'>Calvin Harris ft Frank Ocean & Migos</p>
                </a>
            </div>
        </>
    )
}

export default Main