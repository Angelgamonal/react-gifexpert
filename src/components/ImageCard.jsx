import styled from "styled-components"

export const ImageCard = ({id,title,url}) =>{

    return(
        <Container className="card" key={id}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  
`;