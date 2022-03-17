import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 80vw;
  display: flex;
  gap: 30px;
  margin: 100px auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormHeading = styled.h1`
  font-size: 32px;
  color: #35469c;
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 20px;
`

export const InputContainer = styled.div`
  border: 1px solid #5a7184;
  width: 400px;
  border-radius: 6px;
  margin: 4px 0 15px;
`

export const Input = styled.input`
width:100%;
font-size:18px;
  outline: none;
  background: none;
  border:none;
  font-size;20px;
  color:#5a7184;
  padding:7px 10px;
`
export const Select = styled.select`
  width: 400px;
  outline: none;
  background: none;
  border: 1px solid #5a7184;
  font-size: 20px;
  color: #5a7184;
  padding: 7px 10px;
  border-radius: 6px;
  margin: 4px 0 10px;
`

export const Button = styled.button`
  font-size: 22px;
  background-color: #0b69ff;
  color: #ffffff;
  padding: 7px 12px;
  align-self: flex-start;
  outline: none;
  border: none;
  border-radius: 6px;
  margin-top: 10px;
`

export const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 400px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ImageText = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-size: ${props => props.fontSize};
  font-weight: 500;
`
