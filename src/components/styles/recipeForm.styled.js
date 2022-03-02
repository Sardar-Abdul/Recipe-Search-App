import styled from 'styled-components'

const StyledForm = styled.form`
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 50%;
        border: none;
        padding: 10px;
    }

    button {
        background-color: #5f4c4c;
        border: none;
        padding: 10px 20px;
        color: white;
    }
`

export default StyledForm