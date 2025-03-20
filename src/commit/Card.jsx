import Style from "./Card.module.css"
const Card = ({name, text, text2, buy}) =>{
    return(
        <>
        
        <header className={Style.shop}>
            <h1>{name}</h1>
            </header>
            <main className={Style.main}>
        <div className={Style.block}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbYAF4ph9YBQ_Nt3jLmSStoHiLAUzQ6Bs4A&s" alt="" />
            <h2 className={Style.text}>{text}</h2>
            <h3 className={Style.text2}>{text2}</h3>
            <button>{buy}</button>
        </div>
        <div className={Style.block}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbYAF4ph9YBQ_Nt3jLmSStoHiLAUzQ6Bs4A&s" alt="" />
            <h2 className={Style.text}>{text}</h2>
            <h3 className={Style.text2}>{text2}</h3>
            <button>{buy}</button>
        </div>
        <div className={Style.block}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbYAF4ph9YBQ_Nt3jLmSStoHiLAUzQ6Bs4A&s" alt="" />
            <h2 className={Style.text}>{text}</h2>
            <h3 className={Style.text2}>{text2}</h3>
            <button>{buy}</button>
        </div>
        <div className={Style.block}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbYAF4ph9YBQ_Nt3jLmSStoHiLAUzQ6Bs4A&s" alt="" />
            <h2 className={Style.text}>{text}</h2>
            <h3 className={Style.text2}>{text2}</h3>
            <button>{buy}</button>
        </div>
        </main>
        </>
    );
}
export default Card;