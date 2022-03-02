import styled from "styled-components";

const StyledMainRecipe = styled.div`
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgb(71,71,71);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    align-items: center;
    min-width: 40%;


    h1 {
        font-size: 20px;
        font-family: sans-serif;
        color:#5f4c4c;
    }
    h3 {
        font-size:20px;
        color:#5f4c4c;
    }
    li {
        list-style: none;
        padding: 5px;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin:20px
    }
`
export default StyledMainRecipe