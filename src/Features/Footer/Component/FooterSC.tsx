import styled from "styled-components";

export const FooterSC = styled.div`

padding: 4rem;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
& h2,h4{
    text-align: center;
}
& span{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    & a{
        & img{
            width: 2rem;
            height: auto;
        }
        padding: 1rem;
        color: black;
    }

}
& h4{
    
    color: grey;
}
& .gif{
    max-width: 32rem;
    padding-bottom: 20rem;
}
`
export default FooterSC