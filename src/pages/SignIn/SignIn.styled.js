// @flow
import styled from 'styled-components/macro';
import { Avatar, TextField as MuiTextField, makeStyles } from '@material-ui/core';
import { Alert as MuiAlert } from '@material-ui/lab';
import { spacing } from '@material-ui/system';

const Wrapper: any = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Container: any = styled.div`
  padding: 8rem;
`;

export const Alert: any = styled(MuiAlert)(spacing);

export const TextField: any = styled(MuiTextField)(spacing);

export const BigAvatar: any = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${props => props.theme.spacing(5)}px;
`;

export const Title: any = styled.div`
  font-size: 2rem;
  text-align: left;
  padding-left: 15px;
  color: #344767;
  @media (max-width: 1080px) {
    text-align: center;
  }
`;

export const HeadingText: any = styled.p`
  font-weight: 300;
  font-size: 1rem;
  text-align: left;
  padding-left: 18px;
  color: #67748e;
  @media (max-width: 1080px) {
    text-align: center;
  }
`;

export const Button: any = styled.button`
  padding: 10px;
  width: 70%;
  border: 0px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 10px;
  background-image: linear-gradient(to left, #2152ff, #21d4fd);
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-transform: uppercase;
`;

export const Text: any = styled.p`
  text-align: start;
  margin-left: 12px;
  text-decoration: none;
  color: #67748e;
  cursor: pointer;
  font-size: 16px;
  @media (max-width: 1080px) {
    text-align: center;
  }
`;

export const Poster: any = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #2152ff, #21d4fd);
  height: 100vh;
  width: 45%;
  @media (max-width: 1080px) {
    display: none;
  }
`;
export const Image: any = styled.img`
  height: 40vh;
  margin-left: 8rem;
  margin-bottom: -40vh;
`;
export const PosterText: any = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: -58vh;
`;
export const PosterTitle: any = styled.p`
  margin: 0;
  text-align: center;
  font-size: 1rem;
  padding: 3rem;
  line-height: 20px;
  color: #fff;
`;

export const useStyle: any = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '70%',
      margin: theme.spacing(1),
    },
    '& label.Mui-focused': {
      color: '#344767',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'red',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'lightgray',
      },
      '&:hover fieldset': {
        borderColor: 'lightgray',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2152FF',
      },
    },
  },
}));

export default Wrapper;
