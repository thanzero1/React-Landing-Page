import './Recomendation.css'


import TemptationCapa from "../components/imagens/temptation.jpeg"
import NeverCapa from "../components/imagens/KYLE-1.jpeg"
import SundayCapa from "../components/imagens/KYLE-2.jpeg"

function Recomend() {

    return (
        <>
            <div className="container-recomend">
                <p className='txt-rec'>Separei mais algumas musicas para ouvir</p>
                <ul className='ul-rec'>
                    <li className='li-rec'>
                        <a className='li-rec-a' href="https://www.youtube.com/watch?v=qN5_yNclC90" target={'_blank'} >
                            <img src={TemptationCapa} alt="" />
                            <h2 className='title-song'>Temptation</h2>
                            <p className='copy-song-1'>Joey Bada$$</p>
                        </a>
                    </li>
                    <li className='li-rec'>
                        <a className='li-rec-a' href="https://www.youtube.com/watch?v=MN-JmCOKaao" target={'_blank'} >
                            <img src={SundayCapa} alt="" />
                            <h2 className='title-song'>Sunday</h2>
                            <p className='copy-song-2'>KYLE</p>
                        </a>

                    </li>
                    <li className='li-rec box-3'>
                        <a className='li-rec-a' href="https://www.youtube.com/watch?v=RaRJkMIFu4Y" target={'_blank'} >
                            <img src={NeverCapa} alt="" />
                            <h2 className='title-song'>I Literally Never Think About You</h2>
                            <p className='copy-song-3'>KYLE</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Recomend