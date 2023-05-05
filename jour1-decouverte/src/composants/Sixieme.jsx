const Sixieme = () => {
    const action1 = () => {
        alert("j'ai cliqué sur le bouton 1");
    }

    const handleEnter = (e) => {
        e.target.style["color"] = "red";
    }

    const HandleLeave = (e) => {
        e.target.style["color"] = "black";
    }


    return ( <div>
        <h2>Evenement dans React</h2>
        <button onClick={action1}>action1</button>
        <button onClick={() => action1()}>action2</button>
        <p onMouseEnter={handleEnter} onMouseLeave={HandleLeave}>Lorem dqsjd jhiz isqdjs hdjqhsdh jqshdjshj</p>
    </div> );
}
 
export default Sixieme;